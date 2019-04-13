import PostService from '../../services/PostService';

export const loadPostById = (postId) => {
    return async (dispatch) => {
        try {
            const post = await PostService.getById(postId);
            dispatch({type: 'SET_POST_TO_DISPLAY', post})
        } catch(err) {
            console.log(err);
        }

    }
}

export const savePost = (post) => {
    return async () => {
        try {
            const newPost = await PostService.save(post);
            console.log(newPost);
        } catch (err) {
            console.log(err);
        }
    }
}

export const clearPostToDisplay = () => {
    return (dispatch) => {
        dispatch({type: 'SET_POST_TO_DISPLAY', post: null })
    }
}