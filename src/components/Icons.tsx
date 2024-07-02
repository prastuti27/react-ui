import React from "react";
import { IconType } from "react-icons";

type IconsProps = {
  icons: IconType[];
};

const Icons = ({ icons }: IconsProps) => {
  return (
    <div className="flex gap-4">
      {icons.map((Icon, index) => (
        <a key={index} href="">
          <Icon className="text-gray-600 text-xl" />
        </a>
      ))}
    </div>
  );
};

export default Icons;
