export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-6 items-center">{children}</section>
  );
};
