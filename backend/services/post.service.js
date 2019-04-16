const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;

const postsCollection = 'posts';
const usersCollection = 'users';

module.exports = {
    query,
    getById,
    save,
    remove
}

async function query() {
    try {
        const db = await mongoService.connect();
        const posts = await db.collection(postsCollection)
            .aggregate([
                {
                    $lookup:
                    {
                        from: usersCollection,
                        localField: 'userId',
                        foreignField: '_id',
                        as: 'user'
                    }
                },
                {
                    $project: {
                        user: {
                            password: 0,
                        }
                    }
                },
                {
                    $unwind: '$user',
                },
                {
                    $sort: { createdAt: -1 }
                },
            ])
            .toArray();
        return posts;
    } catch (err) {
        return null
    }
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
        const { insertedId } = await db.collection(postsCollection).insertOne(post);
        post._id = insertedId;
        post.blogId = blogId;
        return post;
    } catch (err) {
        return null;
    }
}

async function remove(id) {
    const db = await mongoService.connect()
    await db.collection(postsCollection).deleteOne({ _id: new ObjectId(id) });
}