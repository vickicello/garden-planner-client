import React, { Component } from 'react';
import Crops from './Crops';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      crops: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/crops`)
      .then(response => response.json())
      .then(crops => this.setState({ crops }))
  }

  render() {
    return (
      <div className="App">
        <Crops crops={this.state.crops} />
      </div>
    );
  }
}

export default App;
