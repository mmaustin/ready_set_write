import React from "react";
import {connect} from 'react-redux'
import  {deleteSentence}  from "../actions/sentenceActions";

const Sentence = (props) => {
  return (
    <li>
      <span>{props.sentence.text}</span>
      <button onClick={() => props.deleteSentence(props.sentence.id)}>DELETE</button>
    </li>
  );
};

export default connect(null, {deleteSentence})(Sentence);