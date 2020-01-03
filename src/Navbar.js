import React from 'react';
import {NavLink} from 'react-router-dom';


const link = {
    width: "100%",
    padding: '1em',
    margin: '0em 0em 0em',
    background: 'yellow',
    textDecoration: 'none',
    color: 'black',
  }

  export default class Navbar extends React.Component {

    render() {
      return (
        <div>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              background: 'orange',
            }}
          >Home</NavLink>
          <NavLink 
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'orange',
          }}> Sign Up</NavLink>
          <NavLink 
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'orange'
          }}>Log In</NavLink>
          <NavLink
            to="/plants"
            exact
            style={link}
            activeStyle={{
              background: 'orange'
            }}
          >Plant Selection</NavLink>
          <button className="change-to-cats-button" onClick={this.props.changeToCats}>Turn Plants into Cats</button>
        </div>
      )
    }
  }
   