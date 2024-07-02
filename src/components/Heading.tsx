import React from "react";
type HeadingProps = {
  text: string;
};
const Heading = ({ text }: HeadingProps) => {
  return (
    <>
      <h2 className="text-purple-dark mt-10 md:text-start text-2xl sm:text-3xl lg:text-4xl font-semibold">
        {text}
      </h2>
    </>
  );
};

export default Heading;
