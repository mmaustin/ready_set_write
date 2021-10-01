import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import sentencesReducer from "./reducers/sentencesReducer";
import App from "./components/App"
import './components/index.css';


const store = createStore(sentencesReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>  
      <App />
    </Router>  
  </Provider>,
  document.getElementById("root")
);