import reaxServer from '../../apis/reaxServer';
import { FETCH_STATE_DATA } from '../actionTypes';

export const fetchStateData = () =>  async dispatch => {
  const response = await reaxServer.get('/nj/essex/belleville', {
    params: {
      county: 'essex',
      district: 'belleville'
    }
  })
  dispatch({ type: FETCH_STATE_DATA, payload: response.data });
}
