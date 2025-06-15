import axios from 'axios';

const API_KEY = '50828766-d4c68cffebe8589d5ede8282a';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    per_page: 9,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(BASE_URL, { params }).then(response => response.data);
}
