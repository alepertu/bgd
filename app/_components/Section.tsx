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
      className={` text-center relative flex flex-col overflow-hidden w-full h-lvh md:h-auto px-6${
        customizations ? " " + customizations : ""
      }`}
      id={id}
    >
      <div className="absolute inset-0 -z-20 bg-[#f5f5f5]" />
      {children}
    </section>
  );
}
