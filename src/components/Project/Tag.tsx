import { ReactNode } from "react";

interface TagProps {
  children?: ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span className={`text-xs font-light whitespace-nowrap bg-blue-700 p-1 rounded-md select-none ${className}`}>
      {children}
    </span>
  );
};
