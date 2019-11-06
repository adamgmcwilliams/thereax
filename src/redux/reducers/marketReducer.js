import { SET_CURRENT_MARKET } from '../actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case SET_CURRENT_MARKET:
      return {
        ...state,
        currentSelectedMarket: action.payload
      }
    default:
      return state;
  }
}
