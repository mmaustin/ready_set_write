import React from "react";

const TextArea = ({ text, onchange, topic, topicFunction }) => (
  <div>
    <p>{topic}</p><button onClick={topicFunction}>Choose Topic</button>
    <label id='text-label' style={{fontSize: '20px'}}>Enter Text: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <textarea value={text} name="text" onChange={onchange}/>
  </div>
);

export default TextArea;