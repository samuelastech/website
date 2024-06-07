interface ParagragphProps {
  children?: React.ReactNode;
}

export const Paragragph = ({ children }: ParagragphProps) => {
  return (
    <p className="text-zinc-300 text-lg text-left sm:hyphens-auto sm:text-justify">
      {children}
    </p>
  )
};