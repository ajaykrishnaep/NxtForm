import React from "react";
const Button = props => {
  return (
    <div>
      <button onClick={props.buttonAction}>{props.name}</button>
    </div>
  );
};

export default Button;
