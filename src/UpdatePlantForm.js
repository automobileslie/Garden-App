import React from 'react';

export default class UpdatePlantForm extends React.Component {

    state={
        id: this.props.pictureClickedOn.id,
        name: "",
        img: "",
        plant_information: ""
        }
    
        changeInputField = (event) => {
         this.setState({
            id: this.props.pictureClickedOn.id,
            [event.target.name]: event.target.value
            })
        }
    
        submitIt = (event) => {
            event.preventDefault();
            this.props.updateSubmit({
                id: this.props.pictureClickedOn.id,
                name: this.state.name,
                img: this.state.img,
                plant_information: this.state.plant_information
            })
        }
        
        render(){
            return (
            <div>
                <h3 className="heading" id="editing-plant-form-heading">Form For Editing the Featured Plant</h3>
                <form id="update-plant-form" onSubmit={this.submitIt}>
                <label htmlFor="name" >Name: </label>
                <input className = "form-input-field" type="text" name="name" value={this.state.name} placeholder={this.props.pictureClickedOn.name} onChange={this.changeInputField} />
                <label htmlFor="img">Url: </label>
                <input className = "form-input-field" type="text" name="img" value={this.state.img} placeholder={this.props.pictureClickedOn.img} onChange={this.changeInputField} />
                <label htmlFor="plant_information">Plant Information: </label>
                <input className = "form-input-field" type="text" name="plant_information" value={this.state.plant_information} placeholder={this.props.pictureClickedOn.plant_information} onChange={this.changeInputField} />
                <input className= "submit-button" type= "submit" value="Submit" />
                </form>
            </div>   
    )}
}