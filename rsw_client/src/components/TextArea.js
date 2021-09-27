import React from "react";

const TextArea = ({ text, onchange }) => (
  <div>
    <textarea value={text} name="text" onChange={onchange} />
  </div>
);

export default TextArea;