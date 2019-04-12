// Services
import BlogService from '../../services/BlogService'

export const loadBlogs = () => {
    return async (dispatch) => {
        try {
            const blogs = await BlogService.query();
            dispatch({ type: 'LOAD_BLOGS', blogs })
        } catch (err) {
            dispatch({type: 'LOAD_BLOGS', blogs: []})
        }
    }
}

export const loadBlogById = (blogId) => {
    return async (dispatch) => {
        try {
            const blog = await BlogService.getById(blogId);
            dispatch({type: 'SET_BLOG_TO_DISPLAY', blog})
        } catch(err) {
            console.log(err);
        }

    }
}

export const clearBlogToDisplay = () => {
    return (dispatch) => {
        dispatch({type: 'SET_BLOG_TO_DISPLAY', blog: null })
    }
}