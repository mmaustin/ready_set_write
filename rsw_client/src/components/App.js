import React, { Component } from 'react';
import { connect } from "react-redux";

export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {showWords: "here we go again"}
  }

  render() {
    return (
      <div >
        {this.state.showWords}
      </div>
    );
  }
};

function mapStateToProps(state) {
    return { 
        someWords: state.words
    };
  }


connect(mapStateToProps)(App);