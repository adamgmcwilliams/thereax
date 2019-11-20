import { FETCH_EXPERTS } from '../actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_EXPERTS:
      return action.payload;
    default:
      return state;
  }
}
