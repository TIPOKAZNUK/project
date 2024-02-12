import { isEscEvent } from './util.js';

const body = document.body;
const uploadFileInput = document.getElementById('upload-file');
const closeBtn = document.getElementById('upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.getElementById('upload-select-image');

const openUploadPicture = () => {
  console.log('open');
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  body.addEventListener('keydown', onEscPress);
  closeBtn.addEventListener('click', onCloseBtnClick);
};

const closeUploadPicture = () => {
  console.log('close');
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  body.removeEventListener('keydown', onEscPress);
  closeBtn.removeEventListener('click', onCloseBtnClick);
  uploadForm.reset();
};

const onEscPress = (evt) => {
  if (isEscEvent(evt)) {
    closeUploadPicture();
  }
};

const onCloseBtnClick = () => {
  closeUploadPicture();
};

uploadFileInput.addEventListener('change', openUploadPicture);
