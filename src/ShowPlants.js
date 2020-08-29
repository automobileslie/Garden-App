import React from 'react';
// import OnePlant from './OnePlant';
// I am not sure how I want OnePlant to be connected yet, or where the function to show plant information when the image is clicked on should be.


export default class ShowPlants extends React.Component{

   

showThesePlants = () => {
    
    return  <div className = "plant-tile">
        <h2>{this.props.plant.name}</h2>
        <img className= "plant-image" src={this.props.plant.img} alt= {this.props.plant.name} onClick={()=> {this.props.pictureOnClick(this.props.plant)}}/>
        <div className = "div-for-plant-selection-buttons">
        <button className="add-to-garden-button" onClick={() =>{this.props.buttonOnClick(this.props.plant)}}>Add to your garden</button>
        <button className= "delete-from-plant-selection-button" onClick={() =>{this.props.deleteOnClick(this.props.plant)}}>Delete this plant</button>
        </div>
    </div>
    }

    render(){

    return(
        <div className="allPlantList">
    <p>{this.showThesePlants()}</p>
    </div>
    
    )
    }
}



