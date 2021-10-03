import React from "react";

const TimerInput = ({ timerValue, timerTracker }) => (
  <div>
    <label id='minutes-label'>Enter Minutes (e.g. 1 equals 1 minute)</label>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" value={timerValue} name="timer" onChange={timerTracker} style={{border: '1px solid blue'}}/>
  </div>
);

export default TimerInput;