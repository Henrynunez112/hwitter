import React from "react";
import "../Css/Card.css"

const Card = (props) => {
  return <div className="backModal">
    <div className="displayModal">
    {props.children}
    </div>
    </div>;
};

export default Card;
