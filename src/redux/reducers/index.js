import { combineReducers } from 'redux';

import stateDataReducer from './stateDataReducer';
import marketReducer from './marketReducer';

export default combineReducers({ stateData: stateDataReducer, currentSelectedMarket: marketReducer });
