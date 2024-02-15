document.addEventListener('DOMContentLoaded', () => {
  const scaleControlSmaller = document.querySelector('.scale__control--smaller');
  const scaleControlBigger = document.querySelector('.scale__control--bigger');
  const scaleControlValue = document.querySelector('.scale__control--value');
  const imgPreview = document.querySelector('.img-upload__preview img');

  let currentScale = 100;

  scaleControlSmaller.addEventListener('click', () => {
    if (currentScale > 25) {
      currentScale -= 25;
      updateScale();
    }
  });

  scaleControlBigger.addEventListener('click', () => {
    if (currentScale < 100) {
      currentScale += 25;
      updateScale();
    }
  });

  scaleControlValue.addEventListener('input', () => {
    const value = parseInt(scaleControlValue.value, 10);
    if (!isNaN(value) && value >= 25 && value <= 100) {
      currentScale = value;
      updateScale();
    }
  });

  function updateScale() {
    const scaleTransform = `scale(${currentScale / 100})`;
    imgPreview.style.transform = scaleTransform;
    scaleControlValue.value = `${currentScale }%`;
  }
});
