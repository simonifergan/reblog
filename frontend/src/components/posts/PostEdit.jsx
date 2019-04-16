import React, { useState, useEffect, useRef } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import Toolbar from '../editor/Toolbar';

import './PostEdit.scss';
import './PostContainer.scss';

const PostEdit = (props) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [docTitle] = useState(document.title);
    const editorEl = useRef(null);
    

    const handleTitle = (e) => setTitle(e.target.value);
    const handleSubtitle = (e) => setSubtitle(e.target.value);


    const handleChange = (editorState) => setEditorState(editorState);

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        setEditorState(newState);

    }

    useEffect(() => {
        if (title) document.title = docTitle + ' - ' + title;

        return () => {
            document.title = docTitle
        };
    }, [title])


    const save = (e) => {
        e.preventDefault();
        const post = {
            userId: props.user._id,
            title,
            subtitle,
            content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
            createdAt: Date.now(),
        };
        props.savePost(post);
    }

    return (
        <form onSubmit={save} className="page post-edit">
            <div className="post-intro">
                <input className="title" value={title} onChange={handleTitle} placeholder="Type your post's title..." />
                <input className="subtitle" value={subtitle} onChange={handleSubtitle} placeholder="Type your post's subtitle..." />
            </div>
            <Toolbar editorState={editorState} editorEl={editorEl} RichUtils={RichUtils} stateChange={handleChange} />
            <div className="post-container">
                <Editor
                    ref={editorEl}
                    editorState={editorState}
                    onChange={handleChange}
                    handleKeyCommand={handleKeyCommand}
                    placeholder="Share your story..."
                />
            </div>
            <button title="Share your post" className="btn btn-save-post" type="submit">Share</button>
        </form>
    )

}



export default PostEdit;