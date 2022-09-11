interface FullSectionProps {
  children: React.ReactNode;
  id?: string;
}

export const FullSection = ({children, id}: FullSectionProps) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center h-screen bg-gray-900 text-gray-100 p-8 sm:p-48"
    >
      {children}
    </section>
  );
};
