import axios from 'axios';

export default axios.create({
  baseURL: 'https://reax-staging-backend.herokuapp.com/'
});
