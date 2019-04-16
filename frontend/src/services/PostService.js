import {getThumbnail} from './UtilService';

import Axios from 'axios';
const axios = Axios.create({ withCredentials: true });

const POST_API = (process.env.NODE_ENV !== 'development')
    ? '/api/post'
    : '//localhost:3003/api/post';


async function query() {
    const { data } = await axios.get(POST_API)
    return data;
}

async function getById(id) {
    const {data} = await axios.get(`${POST_API}/${id}`);
    return data;
}

async function save(post) {
    post.thumbnail = getThumbnail();
    const {data} = await axios.post(POST_API, post)
    return data;
}

async function remove(id) {
    const res = await axios.delete(`${POST_API}/${id}`);
    if (res.status === 200) return true;
    else return false;
}

export default {
    query,
    getById,
    save,
    remove,
};

