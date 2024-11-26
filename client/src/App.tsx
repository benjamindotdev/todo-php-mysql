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
        <main className="flex flex-col gap-8 p-12 w-full">
          <nav className="bg-slate-200 text-slate-800 flex flex-row justify-center gap-6">
            <ul className="w-full flex flex-row justify-center font-bold gap-6">
              <li className="p-6 text-2xl">
                <Link to="/">List</Link>
              </li>
              <li className="p-6 text-2xl">
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
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
