// rface - es7+ plugin to create new componet

import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onCloseAlert: () => void;
}
const Alert = ({ children, onCloseAlert }: AlertProps) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseAlert}
      ></button>
    </div>
  );
};

export default Alert;
