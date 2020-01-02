import React from 'react';


export default class PlantClickedOn extends React.Component{
   

plantInfo= () => {
return (
    <div>
        <h2 className="heading" id="featured-plant">Featured Plant</h2>
        <h3>{this.props.pictureClickedOn.name}</h3>
        <img src={this.props.pictureClickedOn.img} alt={this.props.pictureClickedOn.name} className="show-page-picture" onClick={this.props.pictureUnclick}/>
        <p>{this.props.pictureClickedOn.plant_information}</p>
       

    </div>

)}

// This is currently rendering at the bottom of the page, and I can currently add
// more than one plant to the "pictureClickedOn" array. I want to get it so that when a picture is
// clicked on it goes to another route to display it. I will also have plant information stored as an 
// attribute to display on this page. And there will only be one plant in this array at a time.
// Right now, when I try to only have one plant at a time, it errors out.




render () {
    console.log(this.props.pictureClickedOn)
return (

<p>{this.plantInfo()}</p>

)}

}