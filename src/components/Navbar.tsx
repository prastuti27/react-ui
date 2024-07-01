import React from 'react'
import Button from './Button.tsx'

const Navbar = () => {
  return (

    <div className="flex justify-between items-center fixed w-full z-30 px-10 ">
    <div className=" hidden lg:block sm:hidden md:hidden p-3">
      <ul className="flex gap-10 text-purple-light ">
        <li><a href="">Home</a></li>

        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <h1 className="text-purple-default text-lg font-bold">Landing</h1>
    <Button text="Buy now" bgColor="bg-purple-dark" />
    <i className="ph ph-list lg:hidden"></i>
  </div>

  )
}

export default Navbar