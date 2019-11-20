import { FETCH_EXPERTS, SET_CURRENT_EXPERT } from '../actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_EXPERTS:
      return {
        ...state,
          list: action.payload,
          ...state.currentExpert
      }
    case SET_CURRENT_EXPERT:
      return {
        ...state,
        currentExpert: action.payload
      }
    default:
      return state;
  }
}
