export const Button = ({
  children,
  type,
  onClick,
  disabled,
}: {
  children: string;
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`rounded-lg p-2 border-2 border-slate-800 ${
        disabled
          ? "bg-gray-500"
          : "bg-slate-900 hover:border-green-400 text-white"
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
