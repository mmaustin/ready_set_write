import React, { Component } from 'react';
import { connect } from "react-redux";
import  {addSentence}  from "../actions/sentenceActions";
import TextArea from './TextArea';
import CountdownComponent from './CountdownComponent';
import CountdownButton from './CountdownButton';
import ClearTextButton from './ClearText';
import TimerInput from './TimerInput';
import SentencesContainer from './SentencesContainer';

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
    setTimeout(() => this.props.addSentence({text: this.state.text}), this.state.timer * 60000);
    this.callClear()
    this.handleCountdown()
  }

  callClear = () => {
    clearInterval(this.intervalID)
  }

  clearText = () => {
    this.setState({
      text: '',
      timer: '',
      countdown: ''
    })
  }


  render() {
    return (
      <div>
        Change Timer Value To Desired Number Of Minutes:
        <TimerInput timerValue={this.state.timer} timerTracker={this.handleChange}/>
        Enter Text:
        <TextArea text={this.state.text} onchange={this.handleChange}/>
        <CountdownButton beginCountdown={this.handleClick}/>
        <CountdownComponent countdown={this.state.countdown}/>
        <ClearTextButton clearText={this.clearText}/>
        <SentencesContainer />
      </div>
    );
  }
}


export default connect(null, {addSentence})(TimerComponent);