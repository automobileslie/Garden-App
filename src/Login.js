import React from 'react';

export default class Login extends React.Component{

state={
    username: "",
    password: "",
    toggleSignUp: false,
    message: "",
    errors: []
}

changeInputField = (event) => {
    this.setState({
       [event.target.name]: event.target.value
       })
}

submitTheLogin= (event) => {
    event.preventDefault();
    console.log(this.state.username)
    console.log(this.state.password)
    fetch('http://localhost:3000/login', {
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
        .then(res => res.json())
        .then(data => {   
            console.log(data)       
        if (data.errors){
          this.setState({
            errors: data.errors
          })
        }
        else {
          this.props.setToken(data.token, data.id)
        }
      });
   
        this.setState({
            username: "",
            password: "",
            errors: [],
            message: ""
        })
}

submitTheSignUp = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/users', {
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
        .then(data => {
            if (data.errors){
                this.setState({
                  errors: data.errors
                })
              }
              else {
                  this.setState({
                      message: data.message
                  })
              }
        })

        this.setState({
            username: "",
            password: "",
            errors: [],
            message: ""
        })
}

toggleSignUpAndLogin = () => {
    this.setState({
        toggleSignUp: !this.state.toggleSignUp
    })
}

render(){
    return(
        <div>

        {this.state.errors ?
        <h1>{this.state.errors}</h1>
            :
        <React.Fragment></React.Fragment>
        }

        {this.state.message ?
        <h1>{this.state.message}</h1>
        :
        <React.Fragment></React.Fragment>
        }

            {!this.state.toggleSignUp ?
            <div className="body">
            <h2 className="heading">Log In</h2>
            <form id="login" onSubmit={this.submitTheLogin}>
            <label htmlFor="username"> Username: </label>
            <input type="text" name="username" value = {this.state.username} onChange={this.changeInputField}/>
            <br></br>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value = {this.state.password} onChange={this.changeInputField}/>
            <br></br>
            <input className = "login-and-sign-up-submit" type="submit" value="submit" />
        </form>
        <p className = "toggle-login" onClick = {this.toggleSignUpAndLogin}>Need to create an account?</p>
        </div>

        :

        <div className="body">
                <h2 className="heading" onClick = {this.toggleSignUpAndLogin}>Sign Up</h2>
            <form id="signup" onSubmit={this.submitTheSignUp}>
                <label htmlFor="username"> Username: </label>
                <input type="text" name="username" value = {this.state.username} onChange={this.changeInputField}/>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value = {this.state.password} onChange={this.changeInputField}/>
                <br></br>
                <input className = "login-and-sign-up-submit" type="submit" value="submit" />
            </form>
            <p className = "toggle-login" onClick = {this.toggleSignUpAndLogin}>Already have an account?</p>
            </div>

            }
            
        </div>
    )
}



}