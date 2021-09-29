import React, {Component} from "react";
import { NavLink } from "react-router-dom";

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

class NavBar extends Component {
    render(){
        return (
            <div>
                <NavLink
                    to="/"
                    exact
                    style={link}>
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    exact
                    style={link}>
                    About
                </NavLink>
                <NavLink
                    to="/sentences"
                    exact
                    style={link}>
                    Create Sentences
                </NavLink>
            </div>
        )
    }
}

export default NavBar;