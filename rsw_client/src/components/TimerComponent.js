import React, { Component } from 'react';
import { connect } from "react-redux";
import  {addSentence}  from "../actions/sentenceActions";
import TextArea from './TextArea';
import CountdownComponent from './CountdownComponent';
import CountdownButton from './CountdownButton';
import ClearTextButton from './ClearText';

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
    this.setState({text: '',
                   timer: '',
    })
  }


  render() {
    return (
      <div>
        
          
            Change Timer Value To Desired Number Of Minutes:
            <input type="text" value={this.state.timer} name="timer" onChange={this.handleChange} />
            {/*<textarea value={this.state.text} name="text" onChange={this.handleChange} />*/}
        <TextArea text={this.state.text} onchange={this.handleChange}/>
        <ClearTextButton clearText={this.clearText}/>
            {/*<button onClick={this.clearText}>Clear Text</button>*/}
          
        
        <CountdownButton beginCountdown={this.handleClick}/>
        {/*<button onClick={this.handleClick}>Click To Begin The Countdown</button>*/}
        {/*this.state.countdown*/}
        <CountdownComponent countdown={this.state.countdown}/>
      </div>
    );
  }
}


export default connect(null, {addSentence})(TimerComponent);