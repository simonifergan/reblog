const posts = [];

function query() {
    return JSON.parse(JSON.stringify(posts));
}

function save(post) {
    post._id = _generateId();
    posts.push(post);
    console.log('new post added:', post)
}
export default {
    query,
    save
};

function _generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };