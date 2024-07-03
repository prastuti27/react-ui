import React from "react";

import Image from "../components/Image.tsx";
import Card from "../components/Card.tsx";
import { imageData } from "../data/ImageData.tsx";

const About = () => {
  return (
    <>
      <div className="p-12">
        <div className="flex flex-col  md:flex-row">
          <div className="h-auto  lg:h-screen md:h-screen flex flex-col justify-center  gap-8 w-full lg:w-1/2 sm:w-full md:w-1/2">
            <h1 className="text-purple-dark text-4xl font-semibold">
              Design & Build Your Own Landing Pages
            </h1>
            <p className="text-purple-light text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <Card
              title=" Title Goes Here"
              description=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor."
              icon={imageData.icon}
            />
            <Card
              title=" Title Goes Here"
              description=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor."
              icon={imageData.icon}
            />
          </div>

          <div className="flex justify-center ">
            <Image src={imageData.phone} alt="phone" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
