import React from "react";
import Typography from "./Typography.tsx";

const Content = ({ text }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 mt-10 w-full flex flex-col gap-8 justify-center">
      <Typography variant="h2" content={text} />

      <Typography
        variant="p"
        content="
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim."
      />
    </div>
  );
};

export default Content;
