import  {getRandomArrayElement, getRandomNumber} from './util.js';

const commentsText = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
    'Арсен',
    'Денис',
    'Костя',
    'Маша',
    'Вика'
];

const createComments = () => {
    return {
        id: getRandomNumber(1, 100),
        avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
        message: getRandomArrayElement(commentsText),
        name: getRandomArrayElement(names),
    }
};

const createPhoto = () => {
    return {
        id: getRandomNumber(1, 25),
        url: `photos/${getRandomNumber(1, 25)}.jpg`,
        description: 'Описание',
        likes: getRandomNumber(15, 200),
        comments: createComments()
    }
};

const similarPhoto = Array.from({length: 25}, createPhoto);
console.log(similarPhoto);
