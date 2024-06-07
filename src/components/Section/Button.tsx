import { ElementType, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ElementType;
  text: string;
  className?: string;
}

export const Button = ({ icon: Icon, text, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      
      className={`
        absolute
        bottom-6
        left-6
        flex
        justify-evenly
        items-center
        gap-2
        border-2
        p-4
        w-full
        max-w-80
        z-10
        text-lg
        overflow-hidden
        transition-colors
        font-medium

        hover:text-black
        before:hover:scale-x-100

        before:content-['']
        before:absolute
        before:top-0
        before:left-0
        before:origin-top-left
        before:scale-x-0
        before:-z-10
        before:h-full
        before:w-full
        before:transition-transform
        before:duration-500
        before:bg-white
        ${className}
      `}>
      { Icon ? <Icon /> : null }
      { text }
    </button>
  );
};
