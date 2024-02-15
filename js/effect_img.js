document.addEventListener('DOMContentLoaded', () => {
  const effectsRadioButtons = document.querySelectorAll('.effects__radio');
  const imgPreview = document.querySelector('.img-upload__preview img');

  effectsRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
      const selectedEffect = document.querySelector('.effects__radio:checked').value;
      updateImageEffect(selectedEffect);
    });
  });

  function updateImageEffect(effect) {
    // Удаляем все классы, начинающиеся с "effects__preview--"
    imgPreview.classList.remove(...Array.from(imgPreview.classList).filter((c) => c.startsWith('effects__preview--')));

    // Если выбран эффект, добавляем соответствующий класс
    if (effect !== 'none') {
      const effectClass = `effects__preview--${effect}`;
      imgPreview.classList.add(effectClass);
    }
  }
});
