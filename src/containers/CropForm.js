import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCropFormData } from '../actions/cropForm';
import { createCrop } from '../actions/crops';
  class CropForm extends Component {

    handleOnChange = event => {
      const { name, value } = event.target;
      const currentCropFormData = Object.assign({}, this.props.cropFormData, {
        [name]: value
      })
      this.props.updateCropFormData(currentCropFormData)
    }
  
    handleOnSubmit = event => {
      event.preventDefault()
      this.props.createCrop(this.props.cropFormData)
    }

    render() {

      const { 
        name, 
        variety, 
        harvest, 
        days_to_harvest,
        number_of_beds,
        notes,
        img_url, 
        sow_by 
      } = this.props.cropFormData;

      return(
        <div className="CropForm">
          Add a New Crop:
          <form onSubmit={this.handleOnSubmit}>
          <div className="CropFormInput">
            <label htmlFor="name">Name: </label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="variety">Variety: </label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="variety"
              value={variety}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="harvest">Harvest Timeframe: </label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="harvest"
              value={harvest}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="days_to_harvest">Days to Harvest: </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="days_to_harvest"
              value={days_to_harvest}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="number_of_beds">Number of Beds: </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="number_of_beds"
              value={number_of_beds}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="notes">Notes: </label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="notes"
              value={notes}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="img_url">Image URL: </label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>
          <div className="CropFormInput">
            <label htmlFor="sow_by">Sow By: </label>
            <input 
              type="date"
              onChange={this.handleOnChange}
              name="sow_by"
              value={sow_by}
            />
          </div>

          <button type="submit">Add Crop</button>
          </form>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      cropFormData: state.cropFormData
    }
  }

export default connect(mapStateToProps, { 
  updateCropFormData,
  createCrop
})(CropForm);