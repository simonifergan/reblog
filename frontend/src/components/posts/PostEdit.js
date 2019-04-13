import React, { useState, useEffect, useRef } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import Toolbar from '../editor/Toolbar';


const PostEdit = (props) => {
    const [title, setTitle] = useState('');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [docTitle] = useState(document.title);
    const editorEl = useRef(null);

    const handleTitle = (e) => {
        setTitle(e.target.value);
        document.title = e.target.value;
    }
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

    
    const save = () => {
        const post = {
            blogId: '5cae3735f039efa164fd137d',
            title,
            content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
            createdAt: Date.now(),
        };
        console.log(post);
        props.savePost(post);
    }

    return (
        <section className="page post-edit">
            <input value={title} onChange={handleTitle} placeholder="Type your post's title..." />
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
            <button onClick={save}>Save</button>
        </section>
    )

}



export default PostEdit;