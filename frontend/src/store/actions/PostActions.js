import PostService from '../../services/PostService';

export const loadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await PostService.query();
            dispatch({ type: 'LOAD_POSTS', posts })
        } catch (err) {
            // Do nothing for now
        }
    }
}

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
            return newPost;
        } catch (err) {
            return false;
        }
    }
}

export const removePost = (postId) => {
    return async (dispatch) => {
        const res = await PostService.remove(postId);
        if (res) {
            dispatch({type: 'REMOVE_POST', postId});
            return true;
        }
    }
}

export const clearPostToDisplay = () => {
    return (dispatch) => {
        dispatch({type: 'SET_POST_TO_DISPLAY', post: null })
    }
}