const users = [];

function query() {
    return JSON.parse(JSON.stringify(users));
}

function signup(user) {
    users.push(user);
}
export default {
    query,
    signup
};