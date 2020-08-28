import React from 'react';
// import OnePlant from './OnePlant';
// I am not sure how I want OnePlant to be connected yet, or where the function to show plant information when the image is clicked on should be.


export default class ShowPlants extends React.Component{

   

showThesePlants = () => {
    
    return <React.Fragment>
        <h2>{this.props.plant.name}</h2>
<img src={this.props.plant.img} alt= {this.props.plant.name} className= "plant-image" onClick={()=> {this.props.pictureOnClick(this.props.plant)}}/>
        <button id="add-to-garden-button" onClick={() =>{this.props.buttonOnClick(this.props.plant)}}>Add to your garden</button>
        <button id= "delete-from-plant-selection-button" onClick={() =>{this.props.deleteOnClick(this.props.plant)}}>Delete this plant</button>
    </React.Fragment>
    }

    render(){

    return(
    <React.Fragment>
    <p>{this.showThesePlants()}</p>
    </React.Fragment>
    
    )
    }
}



