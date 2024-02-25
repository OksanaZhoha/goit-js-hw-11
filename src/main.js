import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BASE_URL, options } from './pixabay-api.js';
import { renderGallery } from './render-functions.js';

const searchInputEl = document.querySelector('input[name="searchQuery"');
const searchFormEl = document.getElementById('search-form');

let totalHits = 0;

async function handleSubmit(e) {
  e.preventDefault();
  options.params.q = searchInputEl.value.trim();
  if (options.params.q === '') {
    return;
  }
  options.params.page = 1;
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = '';

  try {
    const response = await axios.get(BASE_URL, options);
    totalHits = response.data.totalHits;

    const { hits } = response.data;

    if (hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      Notify.success(`Hooray! We found ${totalHits} images.`);
      renderGallery(hits, totalHits);
    }
    searchInputEl.value = '';
  } catch (err) {
    Notify.failure(err);
  }
}

searchFormEl.addEventListener('submit', handleSubmit);

async function loadMore() {
  options.params.page += 1;
  try {
    const response = await axios.get(BASE_URL, options);
    const hits = response.data.hits;
    renderGallery(hits, totalHits);
  } catch (err) {
    Notify.failure(err);
  }
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    loadMore();
  }
}

window.addEventListener('scroll', handleScroll);
