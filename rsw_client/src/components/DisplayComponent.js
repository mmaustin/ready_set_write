import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchSentences } from "../actions/sentenceActions";

class DisplayComponent extends Component {
  componentDidMount() {
    this.props.fetchSentences();
  }

  //const sentences = this.props.sentences.map((sent) => (
  //  <li key={sent.id}>{sent.text}</li>
//));

  render() {
      console.log(this.props.sentences)
      //const s = this.props.sentences.text
    const sentences = this.props.sentences.map((sent) => (
          <li key={sent.id}>{sent.text}</li>
      ));

    return (
      <div>
        {/*<button onClick={(event) => this.handleOnClick(event)}>Click Me and Pray!</button>*/}
        {sentences}
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);

/*class DisplayComponent extends Component{
    render(){
        return (
            <div>
                {this.props.stated}
            </div>
        )
    }
}

const mapStateToProps = state => ({ stated: state.sentences })

export default connect(mapStateToProps)(DisplayComponent);*/
