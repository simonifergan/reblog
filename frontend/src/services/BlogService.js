import Axios from 'axios';
const axios = Axios.create({ withCredentials: true });

// How blogs should look like:
// const blogs = [
//     { id: 'blog1', title: 'My first blog', desc: 'I am a blog preview that contains various posts. Cool eh?' },
//     { id: 'blog2', title: 'My second blog', desc: 'I am a blog preview that contains various posts. Cool eh?' },
//     { id: 'blog3', title: 'My whatever blog', desc: 'I am a blog preview that contains various posts. Cool eh?' },
// ];

const BLOG_API = (process.env.NODE_ENV !== 'development')
    ? '/api/blog'
    : '//localhost:3003/api/blog';

async function query() {
    const { data } = await axios.get(BLOG_API)
    return data;
}

async function getById(id) {
    const {data} = await axios.get(`${BLOG_API}/${id}`);
    return data;
}

async function save(blog) {
    return
}
export default {
    query,
    getById,
    save
};