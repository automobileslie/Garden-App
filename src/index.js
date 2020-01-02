import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import LogPlantForm from './LogPlantForm';
import HomePage from './HomePage';
import Navbar from './Navbar';
import YourGarden from './YourGarden';
import Login from './Login';
import Signup from './Signup';
import * as serviceWorker from './serviceWorker';



ReactDOM.render((
<Router>
    <div>
    <Navbar /> 
    <Route exact path="/" component={HomePage} />
    <Route exact path="/plants" component={App} />
    <Route exact path="/your_garden" component={YourGarden} />
    <Route exact path="/form" component={LogPlantForm} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />    
    </div>
</Router>),
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


