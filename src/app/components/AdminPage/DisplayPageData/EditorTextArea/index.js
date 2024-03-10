import { useTheme } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import updateDataAtPath from "@/src/app/utils/updateDataAtPath";

const GlobalStyles = createGlobalStyle`
  .custom-textarea::placeholder {
    color: red;
    opacity: 1;
    fontStyle: italic;
  }
`;

const EditorTextArea = ({ path, data, editableData, onSetEditableData }) => {
  const theme = useTheme();
  const [localData, setLocalData] = useState(data || "");

  useEffect(() => {
    setLocalData(data || "");
  }, [data]);

  const isEmpty = localData === "";

  const textareaStyles = {
    width: "100%", 
    minHeight: "100px", 
    padding: "15px", 
    fontSize: "1.1rem", 
    fontFamily: "Roboto, sans-serif", 
    lineHeight: "1.6", 
    borderColor:
      localData === "" ? theme.palette.error.main : theme.palette.grey[400],
    borderRadius: "8px", 
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    resize: "vertical", 
    transition: "border-color 0.3s, box-shadow 0.3s", 
    borderColor: isEmpty ? theme.palette.error.main : theme.palette.grey[300],
    borderWidth: isEmpty ? "2px" : "1px", 
    "&:focus": {
      outline: "none",
      borderColor: theme.palette.primary.main,
      boxShadow: `0px 0px 12px ${theme.palette.primary.light}`,
    },
    "&::placeholder": {
      color: theme.palette.error.main,
      opacity: 1,
      fontStyle: "italic",
    },
  };

  return (
    <>
      <GlobalStyles />
      <TextareaAutosize
        style={textareaStyles}
        className="custom-textarea"
        value={localData}
        placeholder="Это поле не может быть пустым"
        onChange={(e) => setLocalData(e.target.value)}
        onBlur={() =>
          onSetEditableData(updateDataAtPath(path, localData, editableData))
        }
      />
    </>
  );
};

export default EditorTextArea;
