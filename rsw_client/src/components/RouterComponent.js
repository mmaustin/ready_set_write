import React from "react";
import { Switch, Route} from "react-router-dom";
import TimerComponent from './TimerComponent';
import Home from './Home'
import About from './About'

const RouterComponent = () => (
  <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/sentences' component={TimerComponent} />
  </Switch>
);

export default RouterComponent;