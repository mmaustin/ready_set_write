import React from "react";
import {connect} from 'react-redux'
import  {deleteSentence}  from "../actions/sentenceActions";


const Sentence = (props) => {
  console.log(props.sentence.text)
  return (
    <li>
      <span style={{fontSize: '20px', fontWeight: 'bold'}}>{props.sentence.text}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>UPDATE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => props.deleteSentence(props.sentence.id)}>DELETE</button>
    </li>
  );
};

export default connect(null, {deleteSentence})(Sentence);