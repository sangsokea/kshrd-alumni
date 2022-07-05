import React, { useState } from "react";
import { render } from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import draftToMarkdown from "draftjs-to-markdown";
import { useDispatch } from "react-redux";
import { fetchEditorComponent } from "../redux/actions/localAction/EditorComponentAction";

const EditorContainer = ({onChange, parentValue}) => {
  const [editorState, seteditorState] = useState(() => EditorState.createEmpty());
  const dispatch = useDispatch()
  
  React.useEffect(()=>{
    let value = editorState.getCurrentContent().getPlainText('\u0001')
   value && onChange(value)
  },[editorState])



  return (
    <div className="editor">
      <Editor
        // onChange={(editorState) => this.onChange(event, editorState)}
        editorStyle={{ border: "1px solid gray", height: "100px" }}
        editorState={editorState}
        
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={seteditorState}
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
};

export default EditorContainer;
