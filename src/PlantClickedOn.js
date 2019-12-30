import React from 'react';

export default class PlantClickedOn extends React.Component{

plantInfo= () => {
return this.props.pictureClickedOn.map(plant =>
    <div>
        <h2>{plant.name}</h2>
        <img src={plant.img} alt={plant.name} className="show-page-picture"/>
        <p>Plant Information: {plant.plant_information}</p>

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