const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

const blogsCollection = 'blogs';
const postsCollection = 'posts';

module.exports = {
    getById,
}

async function getById(postId) {
    try {
        const db = await mongoService.connect();
        const post = await db.collection(postsCollection).findOne({ _id: new ObjectId(postId) })
        return post;
    } catch (err) {
        return null;
    }
}