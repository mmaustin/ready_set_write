import React from "react";

const TextArea = ({ text, onchange }) => (
  <div>
    <label id='text-label' style={{fontSize: '20px'}}>Enter Text: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <textarea value={text} name="text" onChange={onchange}/>
  </div>
);

export default TextArea;