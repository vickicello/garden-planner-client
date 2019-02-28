import React, {Component} from 'react';
import CropCard from '../components/CropCard';
import CropForm from './CropForm';
import './Crops.css'

class Crops extends Component {

  render() {
    return(
      <div className="CropsContainer">
      <h1>Crops</h1>
      {this.props.crops.map(crop => <CropCard key={crop.id} crop={crop} />)}
      <CropForm />
    </div>
    )
  }

}

export default Crops;