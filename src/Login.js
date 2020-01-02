import React from 'react';
// import App from './App.css';

export default class Login extends React.Component{

state={
    username: "",
    password: ""
}
// Should it be password or password_digest?

changeInputField = (event) => {
    this.setState({
       [event.target.name]: event.target.value
       })
   }


   submitTheLogin= () => {
    fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }, 
    body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
        })
    })
    .then(r => r.json())
    .then(console.log)
}

    




render(){
    return(
        <div>
            <h2 className="heading">Log In</h2>
        <form id="login" onSubmit={this.submitTheLogin}>
            <label htmlFor="username"> Username: </label>
            <input type="text" name="username" onChange={this.changeInputField}/>
            <br></br>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" onChange={this.changeInputField}/>
            <br></br>
            <input type="submit" value="submit" />
        </form>
        </div>
    )
}



}