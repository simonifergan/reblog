import Axios from 'axios';
const axios = Axios.create({ withCredentials: true });

function query() {
    return [];
}

async function signup(user) {
    try {
        const {data} = await axios.post('http://localhost:3003/api/signup', user);
        return data;
    } catch(err) {
        throw err;
    }
}

async function auth(credentials) {
    try {
        const {data} = await axios.post('http://localhost:3003/api/login', credentials);
        return data;
    } catch(err) {
        throw err;
    }
}



export default {
    query,
    signup,
    auth
};

