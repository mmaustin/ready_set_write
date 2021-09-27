import React from "react";
import {connect} from 'react-redux'

const Sentence = (props) => {
  return (
    <li>
      <span>{props.sentence.text}</span>
      <button onClick={() => props.delete(props.sentence.id)}>DELETE</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
      delete: (id) => dispatch({ type: "DELETE_SENTENCE", payload: id }),
    };
  }

export default connect(null, mapDispatchToProps)(Sentence);