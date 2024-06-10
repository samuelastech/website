import { ReactNode } from "react";

interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="inline-flex gap-4">
      {children}
    </div>
  );
};
