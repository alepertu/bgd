export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="text-center relative overflow-hidden w-full flex-col place-content-center h-svh px-6 rounded-t-full"
      id={id}>
      {children}
    </section>
  );
}
