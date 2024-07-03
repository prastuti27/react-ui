import React from "react";
import List from "./List.tsx";
import Button from "./Button.tsx";
const names = ["Home", "About", "Contact"];
const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed w-full z-30 px-10  ">
      <List names={names} />
      <h1 className="text-purple-default text-lg font-bold">Landing</h1>
      <Button bgColor="bg-purple-dark">Buy now</Button>
      <i className="ph ph-list lg:hidden"></i>
    </div>
  );
};

export default Navbar;
