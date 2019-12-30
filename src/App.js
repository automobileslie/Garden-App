import React from 'react';
import './App.css';
import PlantIndex from './PlantIndex';
import YourGarden from './YourGarden';
import LogPlantForm from './LogPlantForm';
import PlantClickedOn from './PlantClickedOn';

// Currently, I do not have anything persisting to the database.

// Other models might be Garden, Gardener(the user), and Comment(for the notes).
// CRUD will be for Garden and Comment. CR will be for Plant (users can create a plant but not delete one).
// If I have a login, I would like to use sessions to track the user's comments and changes to the user's garden.

// I need to figure out how to have separate boxes and columns on the page.

//Figure out how using routes changes the way props are passed up or down, etc. The form and Your Garden tabs on the NavBar do not currently work because of issues related to this.

// Toggle the pictureOnClick function, and make the text appear beneath the picture instead of generating another copy of the picture at the end of the page (use nested routes to do this).

class App extends React.Component{

    constructor(){
      super();
      this.state = {
      plants: [],
      selectedPlants: [],
      pictureClickedOn: []
    }
  }

    componentDidMount= () => {

      fetch("http://localhost:3000/plants")
      .then(r => r.json())
      .then(plantsArray => {
        this.setState({
          plants: plantsArray
        })
      })

    }

    buttonOnClick= (plant) => {
      console.log("aspirational gardening")
      if (!(this.state.selectedPlants.includes(plant.name)))
      this.setState({
        selectedPlants: [...this.state.selectedPlants, plant]
      })
    }
  
  onSubmit = (plant) => {
    console.log(plant)
    this.setState({
      plants: [...this.state.plants, plant]
    })
    // fetch("http://localhost/3000/plants", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     "name": plant.name,
    //     "img": plant.img
    //   })
    // })
    // .then(r => r.json())
    // .then(response => {
    // this.setState({
    //   plants: [...this.state.plants, plant]
    //   })
    // })

    //the post is not working, so I commented it out until I figure out what is wrong with it
    // I wonder if it is an authorization issue with Rails. Or it might be because I did not write my update action in the rails app.
    // Or maybe both of those things

  }

  removePlant= (plant) => {
    console.log("get out of my garden")
    const newPlantArray= this.state.selectedPlants.filter(data => 
      data.name !== plant.name)

    this.setState({
      selectedPlants:newPlantArray
    })
  }

  pictureOnClick= (plant) => {
    
    if (!(this.state.pictureClickedOn.includes(plant.name)))
    this.setState({
      pictureClickedOn: [...this.state.pictureClickedOn, plant]
    })

  }

  render() {
    console.log(this.state.pictureClickedOn)

      return (
    
        <div>
           <h1 className="heading">Plan A Garden</h1>
    <p className="text">Get plant information, log a plant, and start imagining what you would like to grow in your garden</p>
          <LogPlantForm onSubmit={this.onSubmit} />
          <h1>Plant Selection</h1>
          <PlantIndex plants={this.state.plants} selectedPlants={this.state.selectedPlants} buttonOnClick={this.buttonOnClick} pictureOnClick={this.pictureOnClick}/>
          <YourGarden selectedPlants={this.state.selectedPlants} removePlant={this.removePlant}/>
          <PlantClickedOn pictureClickedOn={this.state.pictureClickedOn} />
        </div>
  )}

}
export default App;
