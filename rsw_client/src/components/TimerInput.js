import React from "react";

const TimerInput = ({ timerValue, timerTracker }) => (
  <div>
    <label id='minutes-label'>Enter Time:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" value={timerValue} name="timer" onChange={timerTracker} style={{border: '1px solid black'}}/>
  </div>
);

export default TimerInput;