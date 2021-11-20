import React, { Component } from 'react';
import { connect } from "react-redux";
import  {addSentence}  from "../actions/sentenceActions";
import TextArea from './TextArea';
import CountdownComponent from './CountdownComponent';
import CountdownButton from './CountdownButton';
import ClearTextButton from './ClearText';
import TimerInput from './TimerInput';
import SentencesContainer from './SentencesContainer';
import NavBar from './NavBar';
import {sentenceTopics} from './Options'

class TimerComponent extends Component {

  constructor(){
    super();
    this.state = {
      timer: '',
      countdown: '',
      text: '',
      topic: sentenceTopics[Math.floor(Math.random() * sentenceTopics.length)]
    }
  }

  chooseTopic = () => {
    this.setState({topic: sentenceTopics[Math.floor(Math.random() * sentenceTopics.length)]})
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
        <NavBar />
        <div id='timer-container'>
          <TimerInput timerValue={this.state.timer} timerTracker={this.handleChange}/>
          <div className='countdown'>
            <CountdownButton beginCountdown={this.handleClick}/>
            <CountdownComponent countdown={this.state.countdown}/>
          </div>
          <div id='text-area-div'>
            <TextArea text={this.state.text} onchange={this.handleChange} topic={this.state.topic}
            topicFunction={this.chooseTopic}/>
          </div>
          <ClearTextButton clearText={this.clearText}/>
          <div id='sentence-container'>
            <SentencesContainer />
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, {addSentence})(TimerComponent);