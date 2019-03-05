export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CROPS_SUCCESS':
      return action.crops;

    case 'CREATE_CROP_SUCCESS':
      return state.concat(action.crop);

    case 'DELETE_CROP_SUCCESS':
      const newCrops = state.crops.filter(crop => crop !== action.payload)
      return {
        ...state,
        crops: newCrops
      };

    default: 
      return state;
  }
}