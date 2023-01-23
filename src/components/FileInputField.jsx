import React from "react";
import "./static/assets/scss/file-input-field.css";
import styled from "styled-components";

export const FileInputField = ({name, label, requireds, titles, accepts, ...props}) =>{
    const fileLabel = label ? label : "Browse File"
  return (
    <div className={name}>
      <h5 className="top_form">{titles}</h5>
      <div className="field">
        <Labels className="file">
            <input 
              id="uploadFile" 
              className="f-input"
              />
            <div className="fileUpload btn--browse">
                <span>{fileLabel}</span>
                <input 
                  className="upload" 
                  type="file" 
                  id={"id_"+name} 
                  name={name}
                  required={requireds ? requireds : false}
                  accept={accepts}
                  
                  onChange={(e)=>{
                    console.log(e.target.value)
                    document.getElementById("uploadFile").value = e.target.value.replace("C:\\fakepath\\", "");
                    // e.target.value = e.target.value.replace("C:\\fakepath\\", "");
                  }}
                  />
            </div>
        </Labels>
      </div>
    </div>
  );
}

const Labels = styled.label`
  max-height: 200px;
  overflow: auto;
  background-color: #f4f4f4;
  border-radius: 5px;
`;