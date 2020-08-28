import React from 'react';
import ShowPlants from './ShowPlants'

export default class PlantIndex extends React.Component{

showThePlants= () => {

    console.log(this.props.plants)

    
    return this.props.plants.map(plant => { 
       return <React.Fragment>
        <ShowPlants plant={plant} buttonOnClick={this.props.buttonOnClick} pictureOnClick={this.props.pictureOnClick} deleteOnClick={this.props.deleteOnClick}/>
        </React.Fragment>
    })
}

    render(){
        return (
        <React.Fragment>
        {this.showThePlants()}
        </React.Fragment>

        )
    }
}