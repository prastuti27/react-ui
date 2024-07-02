import React from "react";
import Rectangle from "../assets/images/Rectangle.png";
import Button from "./Button.tsx";
import Heading from "./Heading.tsx";

const Section = () => {
  return (
    <section id="pricing">
      <div className="relative flex justify-center items-center text-center">
        <div className="mt-16  w-full relative ">
          <img
            src={Rectangle}
            alt="rectangle"
            className="w-full hidden  md:block "
          />
          <div className="relative  lg:absolute md:absolute md:mb-10 inset-0 flex flex-col justify-center items-center">
            <Heading text="A Price To Suit Everyone" />
            <p className="text-purple-light p-5 text-center max-w-lg mx-auto mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h1 className="text-purple-dark text-5xl font-bold mt-4">$40</h1>
            <span className="text-purple-light mb-5">UI Design Kit</span>
            <p className="text-purple-light text-center max-w-lg mx-auto mt-4">
              See, One price. Simple.
            </p>
            <Button text="Purchase Now" bgColor="bg-purple-dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
