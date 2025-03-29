type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 p-3 rounded-lg text-white font-bold">
      {children}
    </button>
  );
};

export default Button;
