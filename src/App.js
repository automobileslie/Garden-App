import React from 'react';
import './App.css';
import Navbar from './Navbar'
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage'



// Other models to build out include Garden, User, and Comment(for the notes). The latter two exist in Rails but do not function, because I have to work on authorization. The last one does not exist yet.
//Figure out how using routes changes the way props are passed up or down, etc. Add the login and signup to the Navbar.

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

      const theUpdatedGarden= this.state.selectedPlants.filter(the_clicked_plant => the_clicked_plant.id !== plant.id);

      const theUpdatedFeaturedPlant= this.state.pictureClickedOn === plant ? [] : this.state.pictureClickedOn;

      fetch(`http://localhost:3000/plants/${plant_id}`, {
        method: "DELETE"
      })
      .then(r => r.json())
      .then((newArray) => {

      console.log(newArray);
      this.setState({
        plants: newArray,
        pictureClickedOn: theUpdatedFeaturedPlant,
        selectedPlants: theUpdatedGarden
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

    const gardenPlants= this.state.selectedPlants.map(plant => {
      return plant.id
    })

    const gardenUpdate=  gardenPlants.includes(plant.id) ? [...thePlants, plant] : this.state.selectedPlants 

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
        selectedPlants: gardenUpdate,
        pictureClickedOn: plant

      })

    })

  }

  changeToCats= () => {
    const toCats= this.state.plants.map(plant => {
       return {name: plant.name, img: "http://placekitten.com/200/300", plant_information: plant.plant_information, id: plant.id}
     })

     const gardenCats= this.state.selectedPlants.map(plant => {
      return {name: plant.name, img: "http://placekitten.com/200/300", plant_information: plant.plant_information, id: plant.id}
    })

        this.setState({
          plants: toCats,
          selectedPlants: gardenCats,
          pictureClickedOn: {name: this.state.pictureClickedOn.name, img: "http://placekitten.com/200/300", plant_information: this.state.pictureClickedOn.plant_information, id: this.state.pictureClickedOn.id}

        })
  
  }

  render() {

      return (
        <div >
          
        <div >
          <Router>
          <Navbar plants={this.state.plants} changeToCats={this.changeToCats}/> 
          <Switch>
          <Route exact path="/" render={(renderProps) => <HomePage {...renderProps}/>} />
          <Route exact path="/plants" render={(renderProps) => <MainPage {...renderProps} plants={this.state.plants} selectedPlants={this.state.selectedPlants} pictureClickedOn={this.state.pictureClickedOn} buttonOnClick={this.buttonOnClick} pictureOnClick={this.pictureOnClick} deleteOnClick={this.deleteOnClick} removePlant={this.removePlant} onSubmit={this.onSubmit} pictureUnclick={this.pictureUnclick} updateSubmit={this.updateSubmit}/>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />    
          </Switch>
        </Router>
        </div>
        </div>

  )}

}
export default App;
