import { useContext, useEffect, useState } from "react";
import { TodoItem } from "../components/TodoItem.tsx";
import { PageTitle } from "../components/PageTitle.tsx";
import { PageContainer } from "../components/PageContainer.tsx";
import { TodoContext } from "../context/TodoContext.tsx";
import axios from "axios";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:80/todo/api/index.php"
      );
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [todos]);

  return (
    <PageContainer>
      <PageTitle>Todos</PageTitle>
      <ul className="flex flex-col gap-6 w-2/3">
        {loading ? (
          <li>Loading...</li>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
          ))
        )}
      </ul>
    </PageContainer>
  );
};
