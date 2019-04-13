import React from 'react';

const Toolbar = ({ editorState, RichUtils, stateChange }) => {
    const onInlineStyle = (style) => {
        stateChange(RichUtils.toggleInlineStyle(editorState, style))
    }

    const onBlockType = (e) => {
        stateChange(RichUtils.toggleBlockType(editorState, e.target.value));
    }
    return (
        <section className="post-edit-toolbar">
            <select onChange={onBlockType}>
                <option value="" label="Normal text"></option>
                <option value="header-one" label="h1"></option>
                <option value="header-two" label="h2"></option>
                <option value="header-three" label="h3"></option>
            </select>

            <button onClick={() => onInlineStyle('BOLD')}>B</button>
            <button onClick={() => onInlineStyle('ITALIC')}>I</button>
            <button onClick={() => onInlineStyle('UNDERLINE')}>U</button>
        </section>
    )
}

export default Toolbar;