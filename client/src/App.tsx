import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import { CreateTodo } from "./pages/CreateTodo";
import { TodoList } from "./pages/TodoList";
import { EditTodo } from "./pages/EditTodo";
import DeleteTodo from "./components/DeleteTodo";
import "./App.css";
import { TodoDetails } from "./pages/TodoDetails";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <nav className="bg-slate-800 w-full">
          <ul className="w-full flex flex-row justiy-end text-white font-bold gap-6">
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <main className="flex flex-col p-12 w-full">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/:id" element={<TodoDetails />} />
            <Route path="/:id/edit" element={<EditTodo />} />
            <Route path="/:id/delete" element={<DeleteTodo />} />
          </Routes>
        </main>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
