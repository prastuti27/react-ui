import React from "react";
import Card from "./Card.tsx";
import { imageData } from "../data/ImageData.tsx";
import Typography from "./Typography.tsx";
const Feature = () => {
  return (
    <div
      id="feature "
      className="banners flex p-8 flex-col-reverse lg:flex-row sm:flex-col-reverse md:flex-row "
    >
      <div className="lg:w-1/2 md:w-1/2  w-full  flex flex-col gap-8   justify-center">
        <Typography variant="h2" content="Light, Fast & Powerful" />
        <Typography
          variant="p"
          content=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim."
        />
        <div className="flex flex-row">
          <Card
            title="Title Goes Here"
            icon={imageData.icon}
            description=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
             commodo ligula eget dolor."
          />
          <Card
            title="Title Goes Here"
            icon={imageData.icon}
            description=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
           commodo ligula eget dolor."
          />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2  w-full sm:w-full flex justify-center">
        <img className="object-contain" src={imageData.mobile} alt="mobile" />
      </div>
    </div>
  );
};

export default Feature;
