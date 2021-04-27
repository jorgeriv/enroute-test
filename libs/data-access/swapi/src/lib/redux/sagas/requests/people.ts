import axios from 'axios';

const apiUrl = 'https://swapi.dev/api/people/';

export function requestGetPeople(query = {}) {
  return axios.request({
    method: 'get',
    url: apiUrl,
    params: new URLSearchParams(query),
  });
}
