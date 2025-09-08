import React from "react";

const Card = (props) => {
  return (
    <div className={`bg-white p-5 rounded-md ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
