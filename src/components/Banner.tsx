import React from "react";
import Button from "./Button.tsx";
import { imageData } from "../data/ImageData.tsx";
import Typography from "./Typography.tsx";

const Banner = () => {
  return (
    <div id="about" className="relative flex mx-8  ">
      <div className="h-auto mt-10 lg:h-screen md:h-screen  flex flex-col justify-center items-center z-30 gap-8 w-full lg:w-1/2 sm:w-full  md:w-1/2 ">
        <Typography
          variant="h1"
          content="Introduce Your Product Quickly & Effectively"
        />
        <Typography
          className="text-purple-light"
          variant="p"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim."
        />

        <div className="flex gap-4 my-3 w-full">
          <Button bgColor="bg-purple-dark">Purchase UI Kit </Button>
          <Button bgColor="bg-purple-dark">Learn more</Button>
        </div>
      </div>
      <div className="wrapper absolute right-0 -mr-20 md:mr-0  hidden  md:block  ">
        <img className="h-dvh" src={imageData.designer} alt="" />
      </div>
    </div>
  );
};

export default Banner;
