import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Photo from './Photo';

class Main extends Component {

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li> <Link to="">Home</Link> </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/photo">Photo</Link></li>
                       
                    </ul>
                </nav>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/photo" component={Photo}/>
               

            </div>
        );
    }
}

export default Main;