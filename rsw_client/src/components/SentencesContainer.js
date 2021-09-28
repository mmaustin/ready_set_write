import React, { Component } from 'react';
import { connect } from "react-redux";
import Sentences from './Sentences'

import { fetchSentences } from "../actions/sentenceActions";

class SentencesContainer extends Component {
  componentDidMount() {
    this.props.fetchSentences();
  }


  
/*  renderSentences = () => 
    this.props.sentences.map((sentence) => <Sentence key={sentence.id} sentence={sentence} />);
*/
  render(){
    return (
      <div>
        <Sentences sentenceList={this.props.sentences}/>
        {/*this.renderSentences()*/}
      </div>
    );
  }
} 

function mapDispatchToProps(dispatch) {
  return { fetchSentences: () => dispatch(fetchSentences()) };
}

function mapStateToProps(state) {
  return { sentences: state.sentences };
}

export default connect(mapStateToProps, mapDispatchToProps)(SentencesContainer);


