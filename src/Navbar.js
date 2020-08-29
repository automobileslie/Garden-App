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


            {!this.props.userToken ?

          <NavLink 
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'orange'
          }}>Log In/Sign Up</NavLink>
          :
          <NavLink 
          onClick = {this.props.logOut}
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'orange'
          }}>Sign Out</NavLink>
        }

          <NavLink
            to="/plants"
            exact
            style={link}
            activeStyle={{
              background: 'orange'
            }}
          >Plant Selection</NavLink>
          <NavLink
            to="/garden"
            exact
            style={link}
            activeStyle={{
              background: 'orange',
            }}
          >Your Garden</NavLink>
          </div>
      )
    }
  }
   