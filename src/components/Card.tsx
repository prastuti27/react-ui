import React from "react";
import Icon from "../assets/images/Icon.png";

const Card = () => {
  return (
    <>
      <div className="flex gap-6">
        <div>
          <img src={Icon} alt="icon" />
          <h3 className="text-purple-dark font-bold text-start">
            Title Goes Here
          </h3>
          <p className="text-purple-light text-start">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div>
          <img src={Icon} alt="icon" />
          <h3 className="text-purple-dark font-bold text-start">
            Title Goes Here
          </h3>
          <p className="text-purple-light text-start">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
