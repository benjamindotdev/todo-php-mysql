import { FormLabel } from "./FormLabel";

export const StatusField = ({
  status,
  onChange,
}: {
  status: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="flex flex-col justify-between">
      <FormLabel htmlFor="status">Status</FormLabel>
      <select
        title="status"
        className={`border-2 border-zinc-800 rounded-lg p-2`}
        value={status}
        onChange={onChange}
      >
        <option value="not_started">Not started</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};
