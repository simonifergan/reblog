const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

const blogsCollection = 'blogs';
const postsCollection = 'posts';

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
        const blog = await db.collection(blogsCollection).aggregate([
            {
                $match: { _id: new ObjectId(blogId) },
            },
            {
                $lookup: {
                    from: postsCollection,
                    localField: '_id',
                    foreignField: 'blogId',
                    as: 'posts'
                }
            }
        ]).toArray();
        if (blog && blog.length) return blog[0];
        else return null;
    } catch {
        return null;
    }
}