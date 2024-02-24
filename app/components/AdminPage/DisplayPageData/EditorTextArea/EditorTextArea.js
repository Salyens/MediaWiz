import { useTheme } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";
import React from "react";

const EditorTextArea = ({ path, data, editableData, onSetEditableData }) => {
  const theme = useTheme();
  const textareaStyles = {
    width: "calc(100% - 24px)",
    minHeight: "50px",
    padding: "12px",
    fontSize: "1rem",
    lineHeight: "1.5",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    "&:focus": {
      outline: "none",
      borderColor: theme.palette.primary.main,
      boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`,
    },
  };

  const handleInputChange = (path, value) => {
    const keys = path.split(".").reduce((acc, key) => {
      if (key.includes("[")) {
        const [arrayKey, arrayIndex] = key.split(/\[(\d+)\]/).filter(Boolean);
        acc.push(arrayKey, parseInt(arrayIndex));
      } else {
        acc.push(key);
      }
      return acc;
    }, []);

    let updatedData = { ...editableData };
    let current = updatedData;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key] || typeof current[key] !== "object") {
        current[key] = typeof keys[i + 1] === "number" ? [] : {};
      }
      current = current[key];
    }

    if (value === "") {
      // Если значение пустое, удалить ключ из объекта
      delete current[keys[keys.length - 1]];
    } else {
      // Иначе, обновить значение
      current[keys[keys.length - 1]] = value;
    }

    onSetEditableData(updatedData);
  };

  return (
    <TextareaAutosize
      style={textareaStyles}
      className="custom-textarea"
      value={data || ""}
      onChange={(e) => handleInputChange(path, e.target.value)}
    />
  );
};

export default EditorTextArea;
