import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: TButtonProps) => {
  return (
    <div
      className={`${className} px-5 py-3  rounded-lg text-base font-medium cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Button;
