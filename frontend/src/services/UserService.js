import Axios from 'axios';
const axios = Axios.create({ withCredentials: true });

const API = (process.env.NODE_ENV !== 'development')
    ? '/api'
    : '//localhost:3003/api';


function query() {
    return [];
}

async function signup(user) {
    try {
        const { data } = await axios.post(`${API}/signup`, user);
        return data;
    } catch (err) {
        throw err;
    }
}

async function auth(credentials) {
    try {
        const { data } = await axios.post(`${API}/login`, credentials);
        return data;
    } catch (err) {
        throw err;
    }
}

async function logout() {
    try {
        const res = await axios.post(`${API}/logout`)
        if (res.status === 200) return true;
    } catch (err) {
        return false;
    }
}

async function getById(id) {
    try {
        const {data} = await axios.get(`${API}/user/${id}`)
        return data;
    } catch (err) {
        throw err;
    }
}


export default {
    query,
    signup,
    auth,
    logout,
    getById
};

