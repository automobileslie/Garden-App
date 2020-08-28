import React from 'react';
import YourGarden from './YourGarden';


export default class Garden extends React.Component{












    render () {
        return (
                <div className="your-garden">
                <YourGarden selectedPlants={this.props.selectedPlants} removePlant={this.props.removePlant}/>
                </div> 
        )
    }
}