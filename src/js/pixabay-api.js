export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42494915-f1925227b1d4f602df08c38a4';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};