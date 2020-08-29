import React from 'react';
import PlantIndex from './PlantIndex';
import LogPlantForm from './LogPlantForm';
import PlantClickedOn from './PlantClickedOn';
import UpdatePlantForm from './UpdatePlantForm';

export default class MainPage extends React.Component{

render(){
    return (
    
    <React.Fragment> 
    <div id="top-of-main-page">
    <h1 className="heading" >Plan A Garden</h1>
    <p className="text">Get plant information, log a plant, and start imagining what you would like to grow in your garden</p>
    <LogPlantForm onSubmit={this.props.onSubmit} />
    <PlantClickedOn pictureClickedOn={this.props.pictureClickedOn} pictureUnclick={this.props.pictureUnclick}/>
    </div>
    <div>
    <UpdatePlantForm pictureClickedOn={this.props.pictureClickedOn} updateSubmit={this.props.updateSubmit}/>
    </div>
    <h1 id="plant-selection-heading">Plant Selection</h1>
    <p className="text">Click on a picture below to get more information about a plant and to have the ability to edit it</p>
    <PlantIndex plants={this.props.plants} selectedPlants={this.props.selectedPlants} buttonOnClick={this.props.buttonOnClick} pictureOnClick={this.props.pictureOnClick} deleteOnClick={this.props.deleteOnClick}/> 
    </React.Fragment>

    )}


}
