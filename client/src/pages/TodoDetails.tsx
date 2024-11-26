import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import type { Todo } from "../../global.d.ts";

export const TodoDetails = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:80/todo/api/${id}`).then((response) => {
      setTodo(response.data);
    });
  }, [id]);

  return <div>{JSON.stringify(todo, null, 2)}</div>;
};
