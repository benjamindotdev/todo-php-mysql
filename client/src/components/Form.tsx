import { Button } from "./Button";
import { DescriptionField } from "./DescriptionField";
import { StatusField } from "./StatusField";
import { TimeAndDateField } from "./TimeAndDateField";
import { TitleField } from "./TitleField";

export const Form = ({
  title,
  description,
  time,
  date,
  status,
  titleError,
  descriptionError,
  timeError,
  dateError,
  error,
  success,
  handleTitleChange,
  handleDescriptionChange,
  handleTimeChange,
  handleDateChange,
  handleStatusChange,
  handleSubmit,
}: {
  title: string;
  description: string;
  time: string;
  date: string;
  status: string;
  titleError: boolean;
  descriptionError: boolean;
  timeError: boolean;
  dateError: boolean;
  error: string;
  success: boolean;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <form className="flex flex-col gap-4 w-1/2" onSubmit={handleSubmit}>
      <TitleField
        title={title}
        onChange={handleTitleChange}
        error={titleError}
      />
      <DescriptionField
        description={description}
        onChange={handleDescriptionChange}
        error={descriptionError}
      />
      <TimeAndDateField
        time={time}
        onTimeChange={handleTimeChange}
        date={date}
        onDateChange={handleDateChange}
        timeError={timeError}
        dateError={dateError}
      />
      <StatusField status={status} onChange={handleStatusChange} />
      <Button
        type="submit"
        disabled={title && description && time && date ? false : true}
      >
        Submit
      </Button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Submit successful!</p>}
    </form>
  );
};
