import {
  createStore, 
  applyMiddleware,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';

// applyMiddleware allows us to make async calls to backend
// redux thunk allows us to juggle async calls to backend - ex:
// if we haven't received the api data yet, thunk will pause other 
// async actions until it is loaded.

import crops from './reducers/crops';
import cropFormData from './reducers/cropFormData';

const reducers = combineReducers({
  crops,
  cropFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);