import axios from 'axios';

// const BASE_URL = 'https://api.pexels.com/v1/';
// const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 12,
// };

export const fetchPhotosByQuery = async (query, page = 1) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};
