const mongoService = require('./mongo.service');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcryptjs');

module.exports = {
    query,
    login,
    loginWithFacebook,
    signup,
    updateSubscriber,
    findSubscriber,
    remove
}

const usersCollection = 'users';
const subscribersCollection = 'subscribers';

function query(userIds) {
    let mongoQuery = {}
    if (userIds) {
        userIds = userIds.map(userId => new ObjectId(userId))
        mongoQuery = { _id: { $in: userIds } }
    }
    return mongoService.connect()
        .then(db => db.collection(usersCollection)
            .find(mongoQuery)
            .sort()
            .toArray()
        );
}

async function login(credentials) {
    console.log(credentials);
    const db = await mongoService.connect()
    const user = await db.collection(usersCollection).findOne({ email: credentials.email })
    if (!user) return null;
    const isAuth = await bcrypt.compare(credentials.password, user.password)
    if (isAuth) {
        delete user.password;
        // await updateSubscriber(user._id, credentials.pushSub);
        return user;
    } else return null;
}

async function findSubscriber(userId) {
    const db = await mongoService.connect();
    const subscriber = await db.collection(subscribersCollection).findOne({ userId: new ObjectId(userId) });
    return subscriber;
}

async function updateSubscriber(userId, pushSub) {
    console.log('GOT TO UPDATESUBSCRIBER WITH:');
    console.log('USERID:', userId);
    console.log('pushSub:', pushSub);
    const subscriber = await findSubscriber(userId);
    if (subscriber) {
        console.log('subscriber exists:', subscriber);
        subscriber.pushSub = pushSub;
        subscriber.userId = new ObjectId(subscriber.userId);
        const db = await mongoService.connect();
        await db.collection(subscribersCollection).updateOne({ _id: subscriber._id }, { $set: subscriber });
    } else {
        let newSubscriber = {
            userId: new ObjectId(userId),
            pushSub
        };
        console.log('subscriber doesnt exist, new:', newSubscriber);
        const db = await mongoService.connect();
        await db.collection(subscribersCollection).insertOne(newSubscriber);
    }
}

async function loginWithFacebook(user) {
    try {
        const { pushSub } = user;
        const db = await mongoService.connect();
        const userInDB = await db.collection(usersCollection).findOne({ email: user.email });
        if (!userInDB) {
            if (pushSub) delete user.pushSub;
            const { insertedId } = await db.collection(usersCollection).insertOne(user);
            user._id = insertedId;
            updateSubscriber(insertedId, pushSub);
            console.log('facebookuser registered:', user);
            return user;
        } else {
            if (userInDB.facebookId === user.facebookId) {
                updateSubscriber(userInDB._id, pushSub);
                return userInDB;
            }
            else throw new Error('User already exists, please log in using your Username and Password');
        }
    } catch (err) {
        throw err;
    }

}

async function signup(user) {
    const db = await mongoService.connect();
    const userInDB = await db.collection(usersCollection).findOne({ email: user.email })
    if (!userInDB) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = hashedPassword;
            const { insertedId } = await db.collection(usersCollection).insertOne(user);
            user._id = insertedId;
            delete user.password;
            return user;
        } catch {
            throw (401);
        }
    } else throw (409);
}

function remove(id) {
    const _id = new ObjectId(id);
    return mongoService.connect()
        .then(db => db.collection(usersCollection).remove({ _id }));
}