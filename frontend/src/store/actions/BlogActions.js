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