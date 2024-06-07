import { ElementType, HTMLAttributes, ReactNode } from "react";

interface RootProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  type?: ElementType;
}

export const Root = ({ type: Type = 'section', children, className, ...props }: RootProps) => {
  return (
    <Type {...props} className={`
      snap-start
      w-full
      min-h-screen

      flex
      flex-col
      items-center
      justify-center
      
      relative
      text-center
      p-6
      
      ${className}
    `}>
      {children}
    </Type>
  );
};
