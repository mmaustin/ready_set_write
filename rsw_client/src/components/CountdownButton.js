import React from "react";

const CountdownButton = ({ beginCountdown }) => (
  <div>
    <button onClick={beginCountdown}>Click To Begin The Countdown</button>
  </div>
);

export default CountdownButton;