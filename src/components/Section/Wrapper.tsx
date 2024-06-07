interface WrapperProps {
  children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="max-w-[768px] space-y-3">{children}</div>
};
