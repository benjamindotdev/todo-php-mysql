import { FormLabel } from "./FormLabel";

export const TimeAndDateField = ({
  time,
  onTimeChange,
  date,
  onDateChange,
  timeError,
  dateError,
}: {
  time: string;
  onTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  timeError: boolean;
  dateError: boolean;
}) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex flex-col justify-between w-full">
        <FormLabel htmlFor="date">Date</FormLabel>
        <input
          type="date"
          title="date"
          id="date"
          name="date"
          value={date}
          onChange={onDateChange}
          className={`border-2 border-zinc-800 rounded-lg p-2 ${
            timeError && "border-red-500"
          }`}
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <FormLabel htmlFor="time">Time</FormLabel>
        <input
          type="time"
          title="time"
          id="time"
          name="time"
          value={time}
          onChange={onTimeChange}
          className={`border-2 border-zinc-800 rounded-lg p-2 ${
            dateError && "border-red-500"
          }`}
        />
      </div>
    </div>
  );
};
