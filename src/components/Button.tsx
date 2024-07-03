import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
};

const Button = ({ children, bgColor }: ButtonProps) => {
  return (
    <div>
      <button
        className={`text-white hidden p-2 w-40 border-1 border-purple-dark lg:block ${bgColor}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
