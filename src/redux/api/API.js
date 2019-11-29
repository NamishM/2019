import axios from 'axios';
import qs from 'qs';
import {data} from '../../data/mock'

//const userApiURL = '/item';

export function getItemDetailsAPI() {
  /*return axios({
    method: 'get',
    url: userApiURL,
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
  .then((resp) => {
    const data = resp.data;
    const state = resp.data.status;
    return {state, data};
  })
  .catch((error) => {
    const data = error.response;
    return {state: 'error', data};
  });*/
  const state = 'success';
  return {state, data};
}
