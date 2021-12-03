import React, { Component } from 'react';
import { connect } from "react-redux";
import Sentences from './Sentences'

//import { fetchSentences } from "../actions/sentenceActions";
import { fetchSentences } from "../actions/sentenceActions";

class SentencesContainer extends Component {
  componentDidMount() {
    this.props.fetchSentences();
  }


  render(){
    return (
      <div>
        <Sentences sentenceList={this.props.sentences}/>
      </div>
    );
  }
} 


function mapStateToProps(state) {
  return { sentences: state.sentences };
}

export default connect(mapStateToProps, {fetchSentences})(SentencesContainer);


