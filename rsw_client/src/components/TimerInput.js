import React from "react";

const TimerInput = ({ timerValue, timerTracker }) => (
  <div>
    <input type="text" value={timerValue} name="timer" onChange={timerTracker}/>
  </div>
);

export default TimerInput;