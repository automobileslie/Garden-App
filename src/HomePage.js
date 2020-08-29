import React from 'react';

export default class HomePage extends React.Component{









render() {
    return(
        <React.Fragment>
        <h1 className="heading">Plan A Garden</h1>
        <p className="text">Get plant information, log a plant, and start imagining what you would like to grow in your garden</p>
        <br></br>
        <div className = "homepage">
        <img id="homepage-image" src={require("./Images/Marigold.jpeg")} alt={"Marigold"} />
        <img id="homepage-image" src={require("./Images/Zinnia.jpeg")} alt={"garden at the end of Voltaire's Candide"} />
        </div>
        </React.Fragment>
    )
}



}