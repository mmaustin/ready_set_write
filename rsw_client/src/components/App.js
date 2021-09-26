import React, { Component } from 'react';
import TimerComponent from './TimerComponent';
import DisplayComponent from './DisplayComponent';

class App extends Component {


  render() {

    return (
      <div>
        <TimerComponent />
        <DisplayComponent />
      </div>
    );
  }
};

export default App;