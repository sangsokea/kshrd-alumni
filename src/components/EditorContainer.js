import React, { Component } from "react";
import { render } from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class EditorContainer extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  
  render() {
    const { editorState } = this.state;
    return (
      <div className="editor">
        <Editor
          editorStyle={{ border: "1px solid gray", height: "100px" }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar = {{
            options: ['inline', 'list', 'history'],
            inline: {
              inDropdown: false,
              options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],},   
            list: {
              inDropdown: false,
              options: ['unordered', 'ordered'],
            }    
          }}
        />
      </div>
    );
  }
}
