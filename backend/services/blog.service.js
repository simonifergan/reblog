const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

const blogsCollection = 'blogs';

module.exports = {
    query,
    getById
}

async function query() {
    const db = await mongoService.connect();
    const blogs = await db.collection(blogsCollection).find({}).toArray();
    return blogs;
}

async function getById(blogId) {
    try {
        const db = await mongoService.connect();
        const blog = await db.collection(blogsCollection).findOne({_id: new ObjectId(blogId)});
        if (blog) return blog;
        else return null;
    } catch {
        return null;
    }
}