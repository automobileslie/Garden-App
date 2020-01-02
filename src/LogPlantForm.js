import React from 'react';


export default class LogPlantForm extends React.Component{

   state={
    name: "",
    img: "",
    plant_information: ""
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
            img: this.state.img,
            plant_information: this.state.plant_information

        })

    }


    render(){
    return(
    <div id="log-plant-form">
    <h2 id="log-new-plant-form-heading">Log a New Plant Here</h2>
    <form onSubmit={this.submitForm}>
        <label htmlFor="name" >Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.changeInputField} />
        <label htmlFor="img">Url: </label>
        <input type="text" name="img" value={this.state.img} onChange={this.changeInputField} />
        <label htmlFor="plant_information">Plant Information: </label>
        <input type="text" name="plant_information" value={this.state.plant_information} onChange={this.changeInputField} />
        <input type= "submit" value="Submit" />

    </form>
    </div>


    )}

}