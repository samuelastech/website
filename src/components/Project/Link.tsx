import { ElementType } from "react";

interface LinkProps {
  icon?: ElementType;
  href?: string;
}

export const Link = ({ icon: Icon, href = '' }: LinkProps) => {
  return (
    <a href={href} target="_blank">
      <button className="
        relative
        p-3
        text-lg
        rounded-full
        border-2
        overflow-hidden
        transition-colors
        w-full

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
      ">
        {Icon ? <Icon /> : null}
      </button>
    </a>
  );
};
