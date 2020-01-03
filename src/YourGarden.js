import React from 'react';


export default class YourGarden extends React.Component{

    displayGarden= () => {
        

    return this.props.selectedPlants.map(plant => {
        console.log(plant.name)
        return <div>
            <h2>{plant.name}</h2>
            <img src={plant.img} alt={plant.name} className="plant-image" />
            <button id="remove-from-garden-button" onClick={()=> {this.props.removePlant(plant)}}>Remove from garden</button>
            <p>Notes:</p>
            <form>
            <textarea id="comment-box" name="name" wrap="hard"/>
            <br></br>
            <input className= "submit-button" type="submit" value="Submit" />
            </form>
        </div>
    })
}

// The notes textbox does not currently do anything. I would need to have another class
// and build out functions to make this work.

render(){
    
    return(

    <div className="garden-display">
        <h1>Your Garden</h1>
        <div>{this.displayGarden()}</div>
    </div>

    )
}



}