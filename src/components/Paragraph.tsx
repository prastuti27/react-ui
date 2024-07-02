import React from "react";
type ParaProps = {
  text: string;
};
const Paragraph = ({ text }: ParaProps) => {
  return (
    <>
      <p className="text-purple-light">{text}</p>
    </>
  );
};

export default Paragraph;
