interface StackProps {
  children: React.ReactNode;
}

export const Stack = ({children}: StackProps) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
