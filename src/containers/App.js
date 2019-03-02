import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Crops from './Crops';
import CropForm from './CropForm';
import Home from '../components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/crops' component={Crops}/>
            <Route exact path='/crops/new' component={CropForm}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
