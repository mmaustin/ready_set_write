import React, { Component } from 'react';

class TimerComponent extends Component {

  constructor(){
    super();
    this.state = {
      timer: '',
      countdown: '',
      words: "More bounce to the ounce!"
    }
  }

  handleChange = (event) => {
    this.setState({
      timer: event.target.value
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
    setTimeout(() => console.log(this.state.words), this.state.timer * 60000);
    this.callClear()
    this.handleCountdown()
  }

  callClear = () => {
    clearInterval(this.intervalID)
  }


  render() {
    return (
      <div className="video">
        <form> {/*onSubmit={this.handleSubmit}>*/}
          <label>
            Change Timer Value To Desired Number Of Minutes:
            <input type="text" value={this.state.timer} name="timer" onChange={this.handleChange} />
          </label>
        </form>
        <button onClick={this.handleClick}>Click To Begin The Countdown</button>
        {this.state.countdown}
      </div>
    );
  }
}

export default TimerComponent;