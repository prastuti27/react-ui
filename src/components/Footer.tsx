import React from "react";
import List from "./List.tsx";
import Button from "./Button.tsx";
import Brands from "./Brands.tsx";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const icons = [FaLinkedinIn, FaFacebookF, FaYoutube, FaTwitter, FaInstagram];
const names = ["Home", "About", "Contact"];

const Footer = () => {
  return (
    <>
      <footer className="bg-footer p-10 mt-0 sm:mt-0 lg:-mt-20 md:-mt-20 relative z-10">
        <div className="flex flex-col md:flex md:flex-row lg:flex sm:text-center justify-between border-b border-grey pb-4 mb-4 items-center">
          <span>©2023 Yourcompany</span>
          <h1 className="text-purple-default text-lg font-bold">Landing</h1>
          <Button bgColor="bg-purple-dark">Purchase now</Button>
        </div>
        <div className="flex justify-center md:justify-between  w-full">
          <List names={names} />
          <Brands icons={icons} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
