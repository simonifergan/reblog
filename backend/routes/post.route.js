const postService = require('../services/post.service');

const BASE_URL = '/api/post'

module.exports = (app) => {

    // Get single post by Id
    app.get(`${BASE_URL}/:postId`, async (req, res) => {
        const { postId } = req.params;
        const post = await postService.getById(postId);
        if (post) res.json(post);
        else res.status(404).end();
    });

}