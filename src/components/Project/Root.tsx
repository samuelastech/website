import { ReactNode } from "react";

interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex items-center gap-4 sm:gap-6 border-y border-[rgba(255,255,255,0.5)] py-4">
      {children}
    </div>
  );
};
