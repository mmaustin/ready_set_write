import React from "react";

const ClearTextButton = ({ clearText }) => (
  <div id='clear-text-button'>
    <button onClick={clearText}>Clear Fields</button>
  </div>
);

export default ClearTextButton;