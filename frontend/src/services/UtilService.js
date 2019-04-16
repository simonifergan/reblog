const postThumbnails = [
    'https://res.cloudinary.com/dcv2jyqvl/image/upload/v1554975779/blog1.jpg',
    'https://res.cloudinary.com/dcv2jyqvl/image/upload/v1554975781/blog2.jpg',
    'https://res.cloudinary.com/dcv2jyqvl/image/upload/v1554975780/blog3.jpg',
]

export const getThumbnail = () => postThumbnails[getRandomIntInclusive(0, postThumbnails.length)]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}