import React from "react";
type ParaProps = {
  text: string;
};
const Paragraph = ({ text }: ParaProps) => {
  return (
    <>
      <p className="md:text-start text-purple-light p-3">{text}</p>
    </>
  );
};

export default Paragraph;
