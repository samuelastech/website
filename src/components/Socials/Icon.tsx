import { ElementType, useRef, useState } from "react";

interface IconProps {
  icon?: ElementType;
  href?: string;
  text?: string;
  textOnCopy?: string;
  contentToCopy?: string;
}

export const Icon = ({ icon: Icon, href, text = '', contentToCopy = '', textOnCopy = 'Copiado' }: IconProps) => {
  const balloonRef = useRef<HTMLSpanElement>(null);

  const copyContent = () => {
    if (balloonRef.current) {
      navigator.clipboard.writeText(contentToCopy);
      balloonRef.current.textContent = textOnCopy;
      setTimeout(() => {
        if (balloonRef.current) {
          balloonRef.current.textContent = text;
        }
      }, 3000);
    }
  };

  return (
    <a
      className="icon-wrapper cursor-pointer flex flex-col justify-center items-center relative"
      onClick={contentToCopy || textOnCopy ? copyContent : () => {}}
      href={href}
      target="_blank">
      <span className="
        bg-white
        text-black
        p-3
        rounded-3xl
        absolute
        top-0
        
        opacity-0
        pointer-events-none
        transition-all
        ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        duration-300
        tooltip
        text-nowrap
        font-medium

        before:content-['']
        before:absolute
        before:-bottom-1
        before:left-1/2
        before:-translate-x-1/2
        before:rotate-45
        before:w-3
        before:h-3
        before:bg-white
      " ref={balloonRef}>{text}</span>
      <div className="w-14 h-14 rounded-full text-3xl bg-white flex items-center justify-center text-black">
        { Icon ? <Icon /> : null }
      </div>
    </a>
  );
};
