import React from 'react';

type ListProps = {
  names: string[];
};

const List: React.FC<ListProps> = ({ names }) => {
  return (
    <div className="hidden lg:block sm:hidden md:hidden p-3">
      <ul className="flex gap-10 text-purple-light">
        {names.map((name, index) => (
          <li key={index}><a href="">{name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default List;
