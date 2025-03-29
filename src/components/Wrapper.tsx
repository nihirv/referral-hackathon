type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="bg-slate-100 h-screen p-4">{children}</div>;
};

export default Wrapper;
