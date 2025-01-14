import SimpleLightbox from 'simplelightbox';
import { fetchImages } from './js/pixabay-api';
import { renderError, renderGallery } from './js/render-functions';

const searchFormElement = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');
const galleryContainer = document.querySelector('.gallery');

const simpleLightboxInstance = new SimpleLightbox('.gallery a.gallery-link', {
  captionDelay: 250,
  overlayOpacity: 0.8,
});

const searchHandler = (event) => {
  event.preventDefault();
  loaderElement.classList.remove('hidden');
  renderGallery(galleryContainer, []);

  fetchImages(event.target.elements['search'].value)
    .then(images => {
      if(!images.length) {
        renderError('Sorry, there are no images matching your search query. Please try again!')
      } else {
        renderGallery(galleryContainer, images);
        simpleLightboxInstance.refresh();
      }
    })
    .catch(() => {
      renderError('Sorry, something went wrong. Please try again later!');
    })
    .finally(() => {
      searchFormElement.reset();
      loaderElement.classList.add('hidden')
    });
}

searchFormElement.addEventListener('submit', searchHandler);