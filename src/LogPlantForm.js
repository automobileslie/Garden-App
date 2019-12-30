import React from 'react';


export default class LogPlantForm extends React.Component{

   state={
    name: "",
    img: ""
    }

    changeInputField = (event) => {
     this.setState({
        [event.target.name]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            img: this.state.img

        })

    }


    render(){
    return(
    <div id="log-plant-form">
    <h2>Log a New Plant Here</h2>
    <form onSubmit={this.submitForm}>
        <input type="text" name="name" value={this.state.name} onChange={this.changeInputField} />
        <input type="text" name="img" value={this.state.img} onChange={this.changeInputField} />
        <input type= "submit" value="Submit" />

    </form>
    </div>


    )}

}