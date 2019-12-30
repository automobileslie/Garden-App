import React from 'react';


export default class YourGarden extends React.Component{

    displayGarden= () => {
        

    return this.props.selectedPlants.map(plant => {
        console.log(plant.name)
        return <div>
            <h2>{plant.name}</h2>
            <img src={plant.img} alt={plant.name} className="plant-image" />
            <button onClick={()=> {this.props.removePlant(plant)}}>Remove from garden</button>
            <p>Notes:</p>
            <form>
            <textarea id="comment-box" name="name" wrap="hard"/>
            <br></br>
            <input type="submit" value="Submit" />
            </form>
        </div>
    })
}

// I am not sure where or how the notes should persist. I want them to be attached to a plant in
// "Your Garden", but it might be easier to make the comments available to all and have them stored with the 
// instance of the plant (when a note is submitted, it would be added to an array of notes that are an attribute of the plant).



render(){
    return(

    <div className="garden-display">
        <h1>Your Garden</h1>
        <div>{this.displayGarden()}</div>
    </div>

    )
}



}