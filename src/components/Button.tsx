import React from "react";

type ButtonProps={
    text: string;
    bgColor:string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <div>
      <button className={` text-white hidden p-2 border-b-1 border-purple-dark lg:block ${bgColor}`}>
       {text}
      </button>
    </div>
  );
};

export default Button;
