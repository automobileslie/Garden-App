import React from 'react';
import { render } from '@testing-library/react';

export default class UpdatePlantForm extends React.Component {

    state={
        name: "",
        img: "",
        plant_information: "",
        id: this.props.pictureClickedOn.id
        }
    
        changeInputField = (event) => {
         this.setState({
            [event.target.name]: event.target.value,
            id: this.props.pictureClickedOn.id
            })
        }
    
        submitIt = (event) => {
            event.preventDefault();
            this.props.updateSubmit({
                name: this.state.name,
                img: this.state.img,
                plant_information: this.state.plant_information,
                id: this.props.pictureClickedOn.id
    
            })
    
        }





render(){
    return (
        <div>
    <h3 className="heading" id="editing-plant-form-heading">Form For Editing a Plant</h3>
        <form id="update-plant-form" onSubmit={this.submitIt}>
        <label htmlFor="name" >Name: </label>
        <input type="text" name="name" value={this.state.name} placeholder={this.props.pictureClickedOn.name} onChange={this.changeInputField} />
        <label htmlFor="img">Url: </label>
        <input type="text" name="img" value={this.state.img} placeholder={this.props.pictureClickedOn.img} onChange={this.changeInputField} />
        <label htmlFor="plant_information">Plant Information: </label>
        <input type="text" name="plant_information" value={this.state.plant_information} placeholder={this.props.pictureClickedOn.plant_information} onChange={this.changeInputField} />
        <input type= "submit" value="Submit" />
        </form>
        </div>
        
        
    )
}
}