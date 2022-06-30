import React from "react";
import "./static/assets/scss/file-input-field.css";

export const FileInputField = ({name, label, ...props}) =>{
    const fileLabel = label ? label : "File browser example"
  return (
    <label class="file">
        <input 
          id="uploadFile" 
          className="f-input"
          
          
           />
        <div class="fileUpload btn btn--browse">
            <span>Browse</span>
            <input 
              className="upload" 
              type="file" 
              id={"id_"+name} 
              name={name}
              
              onChange={(e)=>{
                console.log(e.target.value)
                document.getElementById("uploadFile").value = e.target.value.replace("C:\\fakepath\\", "");
                // e.target.value = e.target.value.replace("C:\\fakepath\\", "");
              }}
              />
        </div>
    </label>
  );
}