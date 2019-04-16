const postService = require('../services/post.service');

const BASE_URL = '/api/post'

module.exports = (app) => {

    // Get all posts
    app.get(BASE_URL, async (req, res) => {
        const posts = await postService.query();
        if (posts) res.json(posts);
        else res.status(404).end();
    });

    // Get single post by Id
    app.get(`${BASE_URL}/:postId`, async (req, res) => {
        const { postId } = req.params;
        const post = await postService.getById(postId);
        if (post) res.json(post);
        else res.status(404).end();
    });

    app.post(BASE_URL, async (req, res) => {
        const newPost = req.body;
        const post = await postService.save(newPost);
        if (post) res.json(post);
        else res.status(500).end();
    });

    app.delete(`${BASE_URL}/:postId`, async (req, res) => {
        const { postId } = req.params;
        try {
            await postService.remove(postId);
            res.status(200).end();
        } catch (err) {
            res.status(404).end();
        }
    });

}