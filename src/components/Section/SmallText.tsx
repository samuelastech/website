interface SamellTextProps {
  children?: React.ReactNode;
}

export const SmallText = ({ children }: SamellTextProps) => {
  return (
    <small className="text-xs sm:text-base block font-mono font-light tracking-widest uppercase">
      {children}
    </small>
  );
};