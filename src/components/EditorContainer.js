import React, { Component } from "react";
import { render } from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import draftToMarkdown from "draftjs-to-markdown";

export default class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onDescriptionChange = (event, editorState) => {
    console.log(event.target.value);
  };

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
    console.log(
      editorState &&
        draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    );

    return (
      <div className="editor">
        <Editor
          // onChange={(editorState) => this.onChange(event, editorState)}
          editorStyle={{ border: "1px solid gray", height: "100px" }}
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ["inline", "list", "history"],
            inline: {
              inDropdown: false,
              options: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "superscript",
                "subscript",
              ],
            },
            list: {
              inDropdown: false,
              options: ["unordered", "ordered"],
            },
          }}
        />
        {/* <textarea
          disabled
          value={
            editorState &&
            draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
          }
        /> */}
      </div>
    );
  }
}
