import React from 'react';
import ShowPlants from './ShowPlants'

export default class PlantIndex extends React.Component{

showThePlants= () => {

    console.log(this.props.plants)

    
    return this.props.plants.map(plant => { 
       return <div>
        <ShowPlants plant={plant} buttonOnClick={this.props.buttonOnClick} pictureOnClick={this.props.pictureOnClick} deleteOnClick={this.props.deleteOnClick}/>
        
        </div>
    })
}



    render(){
        return (
        <div>
        {this.showThePlants()}
        </div>

        )
    }




}