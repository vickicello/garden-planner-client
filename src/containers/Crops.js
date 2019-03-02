import React, {Component} from 'react';
import { connect } from 'react-redux';
import CropCard from '../components/CropCard';
import { getCrops } from '../actions/crops';
import { deleteCrop } from '../actions/crops';
import './Crops.css'

class Crops extends Component {

  componentDidMount() {
    this.props.getCrops()
  }

  render() {
    return(
      <div className="CropsContainer">
        <h1 className="CropsTitle">Crops</h1>
        {this.props.crops.map(crop => <CropCard key={crop.id} crop={crop} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    crops: state.crops
  })
}

export default connect(mapStateToProps, { getCrops, deleteCrop })(Crops);