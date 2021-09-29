import React from "react";
import { Switch, Route} from "react-router-dom";
//import SentencesContainer from './SentencesContainer';
import TimerComponent from './TimerComponent';

const Router = () => (
  <Switch>
      <Route exact path='/sentences' component={TimerComponent} />
  </Switch>
);

export default Router;