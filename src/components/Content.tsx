import React from "react";
import Paragraph from "./Paragraph.tsx";
import Heading from "./Heading.tsx";

const Content = ({ text }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 mt-10  w-full  flex flex-col gap-8 justify-center ">
      <Heading text={text} />

      <Paragraph
        text="
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
