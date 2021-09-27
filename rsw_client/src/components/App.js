import React, { Component } from 'react';
import TimerComponent from './TimerComponent';
import SentencesContainer from './SentencesContainer';

class App extends Component {


  render() {

    return (
      <div>
        <TimerComponent />
        <SentencesContainer />
      </div>
    );
  }
};

export default App;