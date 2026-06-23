type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        inline-flex items-center gap-2
        rounded-lg
        bg-gradient-to-r from-indigo-500 to-violet-500
        px-5 py-3
        text-sm font-bold tracking-wide text-white
        shadow-lg shadow-indigo-500/30
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-indigo-500/40
        disabled:cursor-not-allowed
        disabled:opacity-50
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;
