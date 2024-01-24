const checkStringLength = (string, length) => string.length <= length;

const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length -1)];
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {getRandomArrayElement, getRandomNumber};