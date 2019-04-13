const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

const blogsCollection = 'blogs';
const postsCollection = 'posts';

module.exports = {
    getById,
    save
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

async function save(post) {
    try {
        const blogId = post.blogId;
        post.blogId = new ObjectId(blogId);
        const db = await mongoService.connect();
        const {insertedId} = await db.collection(postsCollection).insertOne(post);
        post._id = insertedId;
        post.blogId = blogId;
        return post;
    } catch (err) {
        return null;
    }
}