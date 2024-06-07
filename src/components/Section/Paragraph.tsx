interface ParagragphProps {
  children?: React.ReactNode;
}

export const Paragragph = ({ children }: ParagragphProps) => {
  return (
    <p className="text-zinc-300 text-lg hyphens-auto text-justify">
      {children}
    </p>
  )
};