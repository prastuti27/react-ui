import React from "react";
import Card from "./Card.tsx";
import Mobile from "../assets/images/mobile.png";
const Feature = () => {
  return (
    <div
      id="feature "
      className=" banners flex p-8 flex-col-reverse lg:flex-row sm:flex-col-reverse md:flex-row "
    >
      <div className="lg:w-1/2 md:w-1/2  w-full  flex flex-col gap-8   justify-center">
        <h2 className="text-purple-dark mt-10 text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Light, Fast & Powerful
        </h2>
        <p className="text-purple-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <Card />
      </div>
      <div className="lg:w-1/2 md:w-1/2  w-full sm:w-full flex justify-center">
        <img className="object-contain" src={Mobile} alt="mobile" />
      </div>
    </div>
  );
};

export default Feature;
