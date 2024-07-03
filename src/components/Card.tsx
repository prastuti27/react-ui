import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="flex gap-6">
      <div>
        <img src={icon} alt="icon" />
        <h3 className="text-purple-dark font-bold text-start">{title}</h3>
        <p className="text-purple-light text-start">{description}</p>
      </div>
    </div>
  );
};

export default Card;
