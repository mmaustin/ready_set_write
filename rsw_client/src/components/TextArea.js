import React from "react";

const TextArea = ({ text, onchange }) => (
  <div>
    <textarea value={text} name="text" onChange={onchange} style={{border: "dotted red"}}/>
  </div>
);

export default TextArea;