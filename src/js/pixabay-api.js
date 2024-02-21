import axios from 'axios';

export class PixabayAPI {
  #API_KEY = '42494915-f1925227b1d4f602df08c38a4';
  #BASE_URL = 'https://pixabay.com/api/';

  baseSearchParams = {
    key: this.#API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchHits() {
    const searchParams = new URLSearchParams({
      ...this.baseSearchParams,
      q: this.query,
      page: this.page,
    });

    const response = await axios.get(`${this.#BASE_URL}?${searchParams}`);
    return response;
  }

  restPage() {
    this.page = 1;
  }
}
