import { ReactNode } from "react";

interface TitleProps {
  children?: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="text-xl sm:text-2xl text-left font-medium">
      {children}
    </h2>
  );
};
