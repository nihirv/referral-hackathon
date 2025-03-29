type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({ children, variant, fullWidth, onClick }: ButtonProps) => {
  const bgCol =
    variant === "primary"
      ? "bg-blue-500 text-white"
      : "border border-slate-300";

  const fw = fullWidth ? "w-full" : "";
  return (
    <button
      className={`${bgCol} ${fw} p-3 rounded-lg font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
