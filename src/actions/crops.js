import { resetCropForm } from './cropForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setCrops = crops => {
  return {
    type: 'GET_CROPS_SUCCESS',
    crops
  }
}

const addCrop = crop => {
  return {
    type: 'CREATE_CROP_SUCCESS',
    crop
  }
} 

// ** Async Actions **
export const getCrops = () => {
  return dispatch => {
    return fetch(`${API_URL}/crops`)
      .then(response => response.json())
      .then(crops => dispatch(setCrops(crops)))
      .catch(error => console.log(error));
  }
}

export const createCrop = crop => {
  return dispatch => {
    return fetch(`${API_URL}/crops`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ crop: crop })
    })
      .then(response => response.json())
      .then(crop => {
        dispatch(addCrop(crop))
        dispatch(resetCropForm())
      })
      .catch(error => console.log(error))
  }
}
