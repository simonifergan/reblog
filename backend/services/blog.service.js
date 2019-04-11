const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

const blogsCollection = 'blogs';

module.exports = {
    query
}

async function query() {
    const db = await mongoService.connect();
    const blogs = await db.collection(blogsCollection).find({}).toArray();
    return blogs;
}