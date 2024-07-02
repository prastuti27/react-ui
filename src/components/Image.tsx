import React from "react";
type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2  w-full  flex justify-center ">
      <img className="object-contain p-8" src={src} alt={alt} />
    </div>
  );
};
export default Image;
