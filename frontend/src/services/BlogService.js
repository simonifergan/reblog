import Axios from 'axios';
const axios = Axios.create({withCredentials: true});

const blogs = [
    { id: 'blog1', title: 'My first blog', desc: 'I am a blog preview that contains various posts. Cool eh?' },
    { id: 'blog2', title: 'My second blog', desc: 'I am a blog preview that contains various posts. Cool eh?' },
    { id: 'blog3', title: 'My whatever blog', desc: 'I am a blog preview that contains various posts. Cool eh?' },
];

async function query() {
    const {data} = await axios.get('http://localhost:3003/api/blog')
    return data;
}

async function save(blog) {
    blog._id = _generateId();
    blogs.push(blog);
    console.log('new blog added:', blog)
}
export default {
    query,
    save
};

function _generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};