import React, { Component } from 'react';
import { connect } from "react-redux";
import Sentence from './Sentence'

import { fetchSentences } from "../actions/sentenceActions";

class SentencesContainer extends Component {
  componentDidMount() {
    this.props.fetchSentences();
  }

  //const sentences = this.props.sentences.map((sent) => (
  //  <li key={sent.id}>{sent.text}</li>
//));

  
    renderSentences = () =>
    this.props.sentences.map((sentence) => <Sentence key={sentence.id} sentence={sentence} />);
      //console.log(this.props.sentences)
      //const s = this.props.sentences.text
    //const sentences = this.props.sentences.map((sent) => (
          //<li key={sent.id}>{sent.text}</li>
      //));
  render(){
    return (
      <div>
        {/*<button onClick={(event) => this.handleOnClick(event)}>Click Me and Pray!</button>*/}
        {this.renderSentences()}
      </div>
    );
  }
} 

function mapDispatchToProps(dispatch) {
  return { fetchSentences: () => dispatch(fetchSentences()) };
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (text) => dispatch({ type: "DELETE_TODO", sentence: text }),
  };
}
*/

function mapStateToProps(state) {
  return { sentences: state.sentences };
}

export default connect(mapStateToProps, mapDispatchToProps)(SentencesContainer);


