import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '35772467-21ed811caf8158e0babf87439';

const fetchImages = (query, page) => {
  const url = `${BASE_URL}q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=120`;

  return axios
    .get(url)
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};

export { fetchImages };
