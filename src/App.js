import React from 'react';
import './App.css';
import Navbar from './Navbar'
import HomePage from './HomePage';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import YourGarden from './YourGarden';

class App extends React.Component{
      state = {
      plants: [],
      selectedPlants: [],
      pictureClickedOn: [],
      userToken: null,
      userId: null,
      username: ""
    }

    componentDidMount= () => {
      fetch("http://localhost:3000/plants")
      .then(r => r.json())
      .then(plantsArray => {
        this.setState({
          plants: plantsArray,
          userToken: localStorage.token,
          userId: localStorage.id,
          username: localStorage.username,
        })
      })
    }

    setToken = (token, id) => {
      localStorage.setItem("token", token)
      localStorage.setItem("id", id)
    fetch(`http://localhost:3000/users/${id}`, {
    headers: {
      "Authorization": token
    }
      })
    .then(r => r.json())
    .then(user => {
      this.setState({
        username: user.username,
        userToken: token,
        userId: id,
        })
        let the_username= user.username
        localStorage.setItem("username", the_username)
      })
    }

    buttonOnClick= (plant) => {    
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

  logOut = () => {
    this.setState({
      userId: null,
      userToken: null,
      username: "",
    })
    localStorage.clear()
  }

  render() {
      return (
        <React.Fragment>
          <Router>
          <Navbar logOut = {this.logOut} userToken = {this.state.userToken} plants={this.state.plants}/> 
          <Switch>
          <Route exact path="/" render={(renderProps) => <HomePage {...renderProps}/>} />
          <Route exact path="/plants" render={(renderProps) => <MainPage {...renderProps} plants={this.state.plants} selectedPlants={this.state.selectedPlants} pictureClickedOn={this.state.pictureClickedOn} buttonOnClick={this.buttonOnClick} pictureOnClick={this.pictureOnClick} deleteOnClick={this.deleteOnClick} removePlant={this.removePlant} onSubmit={this.onSubmit} pictureUnclick={this.pictureUnclick} updateSubmit={this.updateSubmit}/>} />
          <Route exact path="/login" render={(renderProps) => <Login {...renderProps} setToken = {this.setToken}/>} />
          <Route exact path="/garden" render={(renderProps) => <YourGarden {...renderProps} removePlant={this.removePlant} selectedPlants={this.state.selectedPlants}/>} />
  
          </Switch>
        </Router>
        </React.Fragment>
  )}
}
export default App;
