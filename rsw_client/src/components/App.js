import React, { Component } from 'react';
import { connect } from "react-redux";

export default class App extends Component {
  constructor(){
      super();
      this.state = {showWords: "here we go again"}
  }

  render() {
      //const phrase = this.props.somewWords
    return (
      <div >
        {this.state.showWords}
      </div>
    );
  }
};

const mapStateToProps = state => ({ somewWords: state.words })


connect(mapStateToProps)(App);