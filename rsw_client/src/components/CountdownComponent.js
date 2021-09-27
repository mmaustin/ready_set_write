import React from "react";

const CountdownComponent = ({ countdown }) => (
  <div style={{border: "dotted blue", height: "50px"}}>
    <p>{countdown}</p>
  </div>
);

export default CountdownComponent;