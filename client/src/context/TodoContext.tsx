import { createContext, useState } from "react";
import { Todo } from "../../global";

type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
