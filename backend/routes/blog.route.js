const blogService = require('../services/blog.service');

const BASE_URL = '/api/blog'

module.exports = (app) => {

    app.get(BASE_URL, async (req, res) => {
        const blogs = await blogService.query();
        if (blogs && blogs.length) res.json(blogs);
        else res.status(404).end();
        
    });

}