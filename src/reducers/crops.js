export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CROPS_SUCCESS':
      return action.crops;

    case 'CREATE_CROP_SUCCESS':
      return state.concat(action.crop);

    case 'DELETE_CROP_SUCCESS':
      return {crops: state.crops.filter(crop => crop.id !== action.payload)};

    default: 
      return state;
  }
}