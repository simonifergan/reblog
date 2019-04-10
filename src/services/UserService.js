const users = [];

function query() {
    return JSON.parse(JSON.stringify(users));
}

function signup(user) {
    user._id = _generateId();
    users.push(user);
    console.log('new user added:', user)
}
export default {
    query,
    signup
};

function _generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };