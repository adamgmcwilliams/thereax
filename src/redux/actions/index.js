import reaxServer from '../../apis/reaxServer';
import { FETCH_STATE_DATA, SET_CURRENT_MARKET, FETCH_EXPERTS } from '../actionTypes';

export const fetchStateData = () =>  async dispatch => {
  const response = await reaxServer.get('/nj/essex/belleville', {
    params: {
      county: 'essex',
      district: 'belleville'
    }
  })
  dispatch({ type: FETCH_STATE_DATA, payload: response.data });
}

export const setCurrentMarket = (marketName) => async dispatch => {
  dispatch({ type: SET_CURRENT_MARKET, payload: marketName})
}

export const fetchExperts = () =>  async dispatch => {
  const response = await reaxServer.get('./experts');
  dispatch({ type: FETCH_EXPERTS, payload: response.data });
}
