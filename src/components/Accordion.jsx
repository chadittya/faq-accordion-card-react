import React, { useState } from "react";
import arrowOpen from "../assets/images/icon-arrow-down.svg";

export default function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleArrow = () => {
    if (isActive) {
      return <img src={arrowOpen} alt="arrow open" className="rotate-180" />;
    }
    return <img src={arrowOpen} alt="arrow open" />;
  };

  const handleStyleTitleOpened = () => {
    if (isActive) {
      return (
        <div className="font-bold text-c-veryDarkDesaturatedBlue">
          {props.title}
        </div>
      );
    }
    return (
      <div className=" text-c-veryDarkDesaturatedBlue hover:text-c-softRed hover:cursor-pointer">
        {props.title}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="accordion">
        <div className="acccordion-item">
          <div
            className="accordion-title flex flex-row justify-between mt-6"
            onClick={handleClick}
          >
            {handleStyleTitleOpened()}
            <div>{handleArrow()}</div>
          </div>
          {isActive && <div className="accordion-content">{props.content}</div>}
        </div>
      </div>
    </React.Fragment>
  );
}
