import { ReactNode } from "react";

interface DescriptionProps {
  children?: ReactNode;
}

export const Description = ({ children }: DescriptionProps) => {
  return (
    <p className="text-[rgba(255,255,255,0.6)] text-sm sm:text-base text-justify hyphens-auto font-light">
      {children}
    </p>
  );
};
