import React from 'react';

export default class PlantClickedOn extends React.Component{
    state={
        name: "",
        img: "",
        plant_information: "",
        }
    
        changeInputField = (event) => {
         this.setState({
            [event.target.name]: event.target.value
            })
        }
    
        submitIt = (event) => {
            event.preventDefault();
            this.props.updateSubmit({
                name: this.state.name,
                img: this.state.img,
                plant_information: this.state.plant_information,
    
            })
    
        }

plantInfo= () => {
return (
    <div>
        <h2 className="heading" id="featured-plant">Featured Plant: </h2>
        <h3>{this.props.pictureClickedOn.name}</h3>
        <img src={this.props.pictureClickedOn.img} alt={this.props.pictureClickedOn.name} className="show-page-picture" onClick={this.props.pictureUnclick}/>
        <p>{this.props.pictureClickedOn.plant_information}</p>
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
       

    </div>)

}

// This is currently rendering at the bottom of the page, and I can currently add
// more than one plant to the "pictureClickedOn" array. I want to get it so that when a picture is
// clicked on it goes to another route to display it. I will also have plant information stored as an 
// attribute to display on this page. And there will only be one plant in this array at a time.
// Right now, when I try to only have one plant at a time, it errors out.




render () {
return (

<p>{this.plantInfo()}</p>

)}

}