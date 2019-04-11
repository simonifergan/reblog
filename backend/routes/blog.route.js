const blogService = require('../services/blog.service');

const BASE_URL = '/api/blog'

module.exports = (app) => {

    app.get(BASE_URL, async (req, res) => {
        const blogs = await blogService.query();
        if (blogs && blogs.length) res.json(blogs);
        else res.status(404).end();

    });

    app.get(`${BASE_URL}/:blogId?`, async (req, res) => {
        const {blogId} = req.params;
        const blog = await blogService.getById(blogId);
        if (blog) res.json(blog);
        else res.status(404).end();
    });

}