import React from 'react';
import './App.css';
import PlantIndex from './PlantIndex';
import YourGarden from './YourGarden';
import LogPlantForm from './LogPlantForm';
import PlantClickedOn from './PlantClickedOn';
import UpdatePlantForm from './UpdatePlantForm';


// Other models might be Garden, Gardener(the user), and Comment(for the notes).
// CRUD will ideally be for Garden and Comment, but right now I am building it for the Plant model; the update method is updating plants but not selectedPlants (I have to work on the logic of that function)
// If I have a login, I would like to use sessions to track the user's comments and changes to the user's garden.

// I need to figure out how to have separate boxes and columns on the page.

//Figure out how using routes changes the way props are passed up or down, etc. The form and Your Garden tabs on the NavBar do not currently work because of issues related to this.

// When I click on a picture, I want to make the text appear beneath the picture instead of generating another copy of the picture at the end of the page (use nested routes and NavLink(?) to do this).

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
          plants: plantsArray,
        })
      })
    }

    buttonOnClick= (plant) => {
      console.log("aspirational gardening");
      
     if (!(this.state.selectedPlants.includes(plant))) {
      
      this.setState({
        selectedPlants: [...this.state.selectedPlants, plant]
      })
      
    }
  }

    deleteOnClick= (plant) => {
      
      const plant_id= plant.id
      
      fetch(`http://localhost:3000/plants/${plant_id}`, {
        method: "DELETE"
      })
      .then(r => r.json())
      .then((newArray) => {

      console.log(newArray);
      this.setState({
        plants: newArray,
        pictureClickedOn: [],
        selectedPlants: []
      })
    })
  }
  
  onSubmit = (plant) => {
  
    const plantName= plant.name
    const plantImg= plant.img
    const plantInformation= plant.plant_information

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      "Accept": 'application/json'   
      },
        body: JSON.stringify({
          
            name: plantName,
            img: plantImg,
            plant_information: plantInformation 
        })
    })
    .then(r => r.json())
    .then((newPlant) => {
      this.setState({
        plants: [...this.state.plants, newPlant]
      })
    })

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
    
    if (!(this.state.pictureClickedOn.id===plant.id))
    this.setState({
      pictureClickedOn: plant
    })

  }
  pictureUnclick= () => {
    this.setState({
      pictureClickedOn: []
    })
  }

  updateSubmit= (plant) => {
    console.log(plant)
    const theUpdatedName= plant.name
    const theUpdatedImg= plant.img
    const theUpdatedPlantInformation= plant.plant_information

    const thePlants= this.state.selectedPlants.filter(the_plant => the_plant.id !== plant.id)
    console.log(thePlants)

    fetch(`http://localhost:3000/plants/${this.state.pictureClickedOn.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
      "Accept": 'application/json'   
      },
        body: JSON.stringify({
          
            name: theUpdatedName,
            img: theUpdatedImg,
            plant_information: theUpdatedPlantInformation 
        })
    })
    .then(r => r.json())
    .then((updatedPlants) => {

      this.setState({
        plants: updatedPlants,
        selectedPlants: [...thePlants, plant],
        pictureClickedOn: plant

      })

    })

  }

  render() {

      return (
        <div>
        <div id="top-of-main-page">
           <h1 className="heading" className="text">Plan A Garden</h1>
    <p className="text">Get plant information, log a plant, and start imagining what you would like to grow in your garden</p>
          <LogPlantForm onSubmit={this.onSubmit} />
          <PlantClickedOn pictureClickedOn={this.state.pictureClickedOn} pictureUnclick={this.pictureUnclick}/>
          </div>
          <div>
          <UpdatePlantForm pictureClickedOn={this.state.pictureClickedOn} updateSubmit={this.updateSubmit}/>
        </div>
    <main className="main-div">
          <div className="allPlantList">
          <h1>Plant Selection</h1>
          <p>Click on a picture below to get more information about a plant </p>
          <p>and to have the ability to edit it</p>
        
          <PlantIndex plants={this.state.plants} selectedPlants={this.state.selectedPlants} buttonOnClick={this.buttonOnClick} pictureOnClick={this.pictureOnClick} deleteOnClick={this.deleteOnClick}/>
          
        </div>

        <div className="your-garden">
        <YourGarden selectedPlants={this.state.selectedPlants} removePlant={this.removePlant}/>
        </div>
        </main>
        </div>
  )}

}
export default App;
