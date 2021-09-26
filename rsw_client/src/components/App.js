import React, { Component } from 'react';
import { connect } from "react-redux";
import TimerComponent from './TimerComponent';

class App extends Component {
  constructor(){
      super();
      this.state = {showWords: "here we go again"}
  }

  handleOnClick = () => {
    this.props.dispatch({
      type: "SHOW_WORDS",
    });
  }

  render() {
      //console.log(this.props.stated)
    return (
      <div>
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.stated}</p>
        <TimerComponent />
      </div>
    );
  }
};

const mapStateToProps = state => ({ stated: state.words })

export default connect(mapStateToProps)(App);