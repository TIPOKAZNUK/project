const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__hashtags',
  errorTextParent: 'img-upload__hashtags',
  errorTextClass: 'img-upload__form__error-text',
});

const hashtagField = document.querySelector('.text__hashtags');

const validateTags = (value) => {
  const tags = value.split(' ');

  if (tags.length > 5) {
    return false;
  }

  const tagSet = new Set();

  for (const tag of tags) {
    if (tag.length > 1 && tag.length <= 20 && tag[0] === '#') {
      const lowercaseTag = tag.toLowerCase();
      if (tagSet.has(lowercaseTag)) {
        return false;
      }

      const tagContent = tag.slice(1);
      if (/^[a-zA-Z0-9]+$/.test(tagContent)) {
        tagSet.add(lowercaseTag);
      } else {
        return false;
        console.log('false');
      }
    } else {
      return false;
      console.log('false');
    }
  }
  console.log('true');
  return true;
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
