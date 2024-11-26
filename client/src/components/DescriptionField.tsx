import { FormLabel } from "./FormLabel";

export const DescriptionField = ({
  description,
  onChange,
  error,
}: {
  description: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
}) => {
  return (
    <div className="flex flex-col justify-between">
      <FormLabel htmlFor="description">Description</FormLabel>
      <textarea
        id="description"
        title="description"
        name="description"
        value={description}
        onChange={onChange}
        className={`border-2 border-zinc-800 rounded-lg p-2 ${
          error && "border-red-500"
        }`}
      />
    </div>
  );
};
