import React from 'react';
import './Toolbar.scss';

const Toolbar = ({ editorState, RichUtils, stateChange,  }) => {
 
    const onInlineStyle = (style) => {
        stateChange(RichUtils.toggleInlineStyle(editorState, style))
    }

    const onBlockType = (e) => {
        stateChange(RichUtils.toggleBlockType(editorState, e.target.value));
    }
    return (
        <section className="editor-toolbar" >
            <select onChange={onBlockType}>
                <option value="" label="Normal text"></option>
                <option value="header-one" label="h1"></option>
                <option value="header-two" label="h2"></option>
                <option value="header-three" label="h3"></option>
            </select>
            <button className="btn btn-bold" onClick={() => onInlineStyle('BOLD')}>Bold</button>
            <button className="btn btn-italic" onClick={() => onInlineStyle('ITALIC')}>Italic</button>
            <button className="btn btn-underline" onClick={() => onInlineStyle('UNDERLINE')}>Underline</button>
        </section>
    )
}

export default Toolbar;