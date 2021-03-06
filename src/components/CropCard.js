import React from 'react';
import { deleteCrop } from '../actions/crops';
import LikeButton from './LikeButton';

const CropCard = ({ crop }) => (
  <div key={crop.id} className="CropCard">
    <h3>{crop.name} - {crop.variety}</h3>
    <p>Days to Harvest: {crop.days_to_harvest}</p>
    <p>Harvest Window: {crop.harvest}</p>
    <img className="CropImage" src={crop.img_url} alt={crop.variety}></img>
    <p>Notes: {crop.notes}</p>
    <p>Number of Beds: {crop.number_of_beds}</p>
    <p>Sow by: {crop.sow_by}</p>
    <button className="deleteCrop"
      onClick={deleteCrop(crop.id)
      }>
      Delete Crop
    </button>
    <LikeButton />
  </div>
)


export default CropCard;