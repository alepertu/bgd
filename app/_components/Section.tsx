export default function Section({
  id,
  children,
  customizations,
}: {
  id: string;
  children: React.ReactNode;
  customizations?: string;
}) {
  return (
    <section
      className={`text-center relative overflow-hidden w-full h-lvh px-6 ${customizations}`}
      id={id}>
      {children}
    </section>
  );
}
