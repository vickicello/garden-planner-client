const initialState = {
  name: '', 
  variety: '', 
  harvest: '', 
  days_to_harvest: 0,
  number_of_beds: 0,
  notes: '',
  img_url: '', 
  sow_by: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.cropFormData;

    case 'RESET_CROP_FORM':
      return initialState;

    default: 
      return state;
  }
} 