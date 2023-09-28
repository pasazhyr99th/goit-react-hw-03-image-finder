import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35772467-21ed811caf8158e0babf87439';
const PER_PAGE = 12;

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};