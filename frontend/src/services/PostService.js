import Axios from 'axios';
const axios = Axios.create({ withCredentials: true });

const POST_API = (process.env.NODE_ENV !== 'development')
    ? '/api/post'
    : '//localhost:3003/api/post';


function query() {
    return [];
}

async function getById(id) {
    const {data} = await axios.get(`${POST_API}/${id}`);
    return data;
}

async function save(post) {
    const {data} = await axios.post(POST_API, post)
    return data;
}

export default {
    query,
    getById,
    save,
};

