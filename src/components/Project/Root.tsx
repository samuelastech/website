import { ReactNode } from "react";

interface RootProps {
  children?: ReactNode;
  id?: string;
}

export const Root = ({ children, id }: RootProps) => {
  return (
    <div id={id} className="flex items-center justify-between gap-4 sm:gap-6 border-y border-[rgba(255,255,255,0.5)] py-4">
      {children}
    </div>
  );
};
