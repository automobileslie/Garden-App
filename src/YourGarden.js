import React from 'react';


export default class YourGarden extends React.Component{

    displayGarden= () => {
        

    return this.props.selectedPlants.map(plant => {
        return <div className = "your-garden">
            <h2>{plant.name}</h2>
            <img src={plant.img} alt={plant.name} className="plant-image" />
            <button className = "remove-from-garden-button" onClick={()=> {this.props.removePlant(plant)}}>Remove from garden</button>
            <p>Notes:</p>
            <form>
            <textarea id="comment-box" name="name" wrap="hard"/>
            <br></br>
            <input className= "submit-button" type="submit" value="Submit Notes" />
            </form>
        </div>
    })
}

render(){
    return(
    <div className="garden-display">
        <h1 className = "heading">Your Garden</h1>
        <div>{this.displayGarden()}</div>
    </div>
    )
}



}