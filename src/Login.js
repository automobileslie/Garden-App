import React from 'react';
import App from './App.css';

export default class Login extends React.Component{







render(){
    return(
        <div>
            <h2 className="heading">Log In</h2>
        <form id="login">
            <label htmlFor="username"> Username: </label>
            <input type="text" name="username"/>
            <br></br>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password"/>
            <br></br>
            <input type="submit" value="submit" />
        </form>
        </div>
    )
}



}