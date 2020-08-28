import React from 'react';


export default class PlantClickedOn extends React.Component{
   
plantInfo= () => {
return (
    <div>
        <h2 className="heading" id="featured-plant">Featured Plant</h2>
        <h3>{this.props.pictureClickedOn.name}</h3>
        <img src={this.props.pictureClickedOn.img} alt={this.props.pictureClickedOn.name} className="show-page-picture" onClick={this.props.pictureUnclick}/>
        <p>{this.props.pictureClickedOn.plant_information}</p>
       

    </div>
)}

render () {
    return (
        <React.Fragment>{this.plantInfo()}</React.Fragment>
)}

}