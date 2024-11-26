import { FormLabel } from "./FormLabel";

export const TitleField = ({
  title,
  onChange,
  error,
}: {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}) => {
  return (
    <div className="flex flex-col justify-between">
      <FormLabel htmlFor="title">Title</FormLabel>
      <input
        type="text"
        title="title"
        id="title"
        name="title"
        value={title}
        onChange={onChange}
        className={`border-2 border-zinc-800 rounded-lg p-2 ${
          error && "border-red-500"
        }`}
      />
    </div>
  );
};
