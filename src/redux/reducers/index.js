import { combineReducers } from 'redux';

import stateDataReducer from './stateDataReducer';
import marketReducer from './marketReducer';
import expertReducer from './expertReducer';

export default combineReducers({
  stateData: stateDataReducer,
  currentSelectedMarket: marketReducer,
  expertsData: expertReducer
});
