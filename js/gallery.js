// gallery.js
import { similarPhoto } from './data.js';
import { openBigPicture } from './big_picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const renderPicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  pictureElement.addEventListener('click', () => {
    openBigPicture(photo);
  });

  return pictureElement;
};

const renderGallery = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const picture = renderPicture(photo);
    fragment.appendChild(picture);
  });

  picturesContainer.appendChild(fragment);
};

renderGallery(similarPhoto);
