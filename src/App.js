import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from './containers/home';
import ResponsiveModal from './containers/responsive-modal';
import ModalRouter from './components/modal-router'
import ModalContent from "./components/modal-content";


// TODO lazy load seems not necessary!

import classes from './App.css'

class App extends Component {
    render () {
        return (
            <div>
                <div>




                </div>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/entry1" exact component={ResponsiveModal} />
                    <Route path="/entry4" exact component={ModalRouter} />
                    <Route path="/entry3" component={ModalContent} />
                </div>
                <ModalRouter/>
            </div>
        );
    }
}

export default App;