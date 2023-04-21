import { ReactNode } from "react";

// exercise
interface ButtonProps {
  type?: "priamry" | "secondary" | "success" | "danger";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ type = "danger", children, onClick }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
