type ButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  theme?: "primary" | "secondary" | "success" | "danger";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  size = "md",
  theme = "primary",
  className,
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const themeClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const buttonClass = `rounded-full font-bold transition-all duration-300 ${
    sizeClasses[size as keyof typeof sizeClasses] || ""
  } ${themeClasses[theme as keyof typeof themeClasses] || ""} ${
    className || ""
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
