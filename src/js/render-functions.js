import iziToast from 'izitoast';

const getGalleryItemTemplate = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
  return `<li class="gallery-item">
    <a class="gallery-link" href=${largeImageURL}>
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
      <ul class="gallery-item-info">
        <li>
          <p>Likes</p>
          <p>${likes}</p>
        </li>
        <li>
          <p>Views</p>
          <p>${views}</p>
        </li>
        <li>
          <p>Comments</p>
          <p>${comments}</p>
        </li>
        <li>
          <p>Downloads</p>
          <p>${downloads}</p>
        </li>
      </ul>
    </a>
  </li>`;
}

export const renderGallery = (container, images) => {
  container.innerHTML = images
    .map((image) => {
      return getGalleryItemTemplate(image)
    })
    .join("");
}

export const renderError = (message) => {
  iziToast.error({
    message,
    position: 'topRight',
  });
}