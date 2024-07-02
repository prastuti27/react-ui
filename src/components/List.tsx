import React from "react";
import { Link } from "react-router-dom";

type ListProps = {
  names: string[];
};

const List = ({ names }: ListProps) => {
  return (
    <div className="hidden lg:block sm:hidden md:hidden p-3">
      <ul className="flex gap-10 text-purple-light">
        {names.map((name, index) => (
          <li key={index}>
            <Link to={`./pages/${name}.tsx`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
