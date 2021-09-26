import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSentence } from "../actions/sentenceActions";

class TimerComponent extends Component {

  constructor(){
    super();
    this.state = {
      timer: '',
      countdown: '',
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCountdown = () => {
    this.setState({countdown: this.state.timer * 60})
    this.intervalID = setInterval(() => this.setState(previousState => {
      if (this.state.countdown >= 1) 
      return {
        countdown: previousState.countdown - 1,
      }
    }), 1000)
  }

  handleClick = () => {
    setTimeout(() => this.props.addSentence(this.state.text), this.state.timer * 60000);
    this.callClear()
    this.handleCountdown()
  }

  callClear = () => {
    clearInterval(this.intervalID)
  }

  clearText = () => {
    this.setState({sentence: ''})
  }


  render() {
    return (
      <div className="video">
        <form> {/*onSubmit={this.handleSubmit}>*/}
          <label>
            Change Timer Value To Desired Number Of Minutes:
            <input type="text" value={this.state.timer} name="timer" onChange={this.handleChange} />
            <textarea value={this.state.text} name="text" onChange={this.handleChange} />
            <button onClick={this.clearText}>Clear Text</button>
          </label>
        </form>
        <button onClick={this.handleClick}>Click To Begin The Countdown</button>
        {this.state.countdown}
      </div>
    );
  }
}

/*function mapDispatchToProps(dispatch) {
    return { addSentence: () => dispatch(addSentence()) };
  }*/

export default connect(null, {addSentence})(TimerComponent);