export const FormLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) => {
  return (
    <label className="font-bold text-slate-800" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
