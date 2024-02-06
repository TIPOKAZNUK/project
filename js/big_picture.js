import { isEscEvent } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const body = document.querySelector('body');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');

const commentTemplate = document.querySelector('#comment-template').content.querySelector('.social__comment');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscPress);
  closeBtn.removeEventListener('click', onCloseBtnClick);
};

const onEscPress = (evt) => {
  if (isEscEvent(evt)) {
    closeBigPicture();
  }
};

const onCloseBtnClick = () => {
  closeBigPicture();
};

const createCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);

  const commentImg = commentElement.querySelector('.social__picture');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentImg.width = 35;
  commentImg.height = 35;

  const commentText = commentElement.querySelector('.social__text');
  commentText.textContent = comment.message;

  return commentElement;
};

const openBigPicture = (photo) => {
  bigPictureImg.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  socialComments.innerHTML = ''; // or use socialComments.innerHTML = '';

  photo.comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    socialComments.appendChild(commentElement);
  });

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscPress);
  closeBtn.addEventListener('click', onCloseBtnClick);
};

export { openBigPicture, closeBigPicture };
