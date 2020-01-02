import React from 'react';
// import OnePlant from './OnePlant';
// I am not sure how I want OnePlant to be connected yet, or where the function to show plant information when the image is clicked on should be.


export default class ShowPlants extends React.Component{

   

showThesePlants = () => {
    
    return <div>
        <h2>{this.props.plant.name}</h2>
<img src={this.props.plant.img} alt= {this.props.plant.name} className= "plant-image" onClick={()=> {this.props.pictureOnClick(this.props.plant)}}/>
        <button onClick={() =>{this.props.buttonOnClick(this.props.plant)}}>Add to your garden</button>
        <button onClick={() =>{this.props.deleteOnClick(this.props.plant)}}>Delete this plant</button>
    </div>
    }







    render(){

    return(
    <div>
    <p>{this.showThesePlants()}</p>
    </div>
    
    )

    }

}



