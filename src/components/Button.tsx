import React from "react";

type ButtonProps={
    text: string;
    bgColor:string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <div>
      <button className={` text-white hidden lg:block ${bgColor}`}>
       {text}
      </button>
    </div>
  );
};

export default Button;
