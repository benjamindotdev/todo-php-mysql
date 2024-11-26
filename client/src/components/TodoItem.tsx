import type { Todo } from "../../global.d.ts";
import { Pencil, Delete } from "lucide-react";
import { Link } from "react-router-dom";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const {
    id,
    title,
    description,
    due_date,
    due_time,
    status,
    created_at,
    updated_at,
  } = todo;
  return (
    <article className="flex flex-col gap-4 p-6 border-2 rounded-xl border-slate-200 shadow-md">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl">{title}</h2>
        <div className="flex flex-row gap-2">
          <Link
            to={`/${id}/edit`}
            className="flex flex-row gap-2 border-2 p-4 rounded-md"
          >
            Edit <Pencil />
          </Link>
          <Link
            to={`/${id}/delete`}
            className="flex flex-row gap-2 border-2 p-4 rounded-md"
          >
            Delete <Delete />
          </Link>
        </div>
      </div>
      <p className="">{description}</p>

      <div className="flex flex-row justify-between gap-6">
        <p>Status: {status}</p>
        <p>
          Due: {due_date} @ {due_time}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <p>Created: {created_at}</p>
        <p>Updated: {updated_at}</p>
      </div>
    </article>
  );
};
