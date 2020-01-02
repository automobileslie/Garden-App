import React from 'react';

export default class HomePage extends React.Component{









render() {
    return(
        <div>
        <br></br>
        <h1 className="heading">Plan A Garden</h1>
        <p className="text">Get plant information, log a plant, and start imagining what you would like to grow in your garden</p>
        <br></br>
        {/* <img id="another-homepage-image" src={"http://placekitten.com/g/200/300"} alt={""} /> */}
        <img id="homepage-image" src={"https://magicallyreal.files.wordpress.com/2016/12/cultivate.jpg?w=300&h=225"} alt={"garden at the end of Voltaire's Candide"} />
        </div>
    )
}



}