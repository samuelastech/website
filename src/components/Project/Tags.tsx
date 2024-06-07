import { ReactNode } from "react";

interface TagsProps {
  children?: ReactNode;
}

export const Tags = ({ children }: TagsProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {children}
    </div>
  );
};
