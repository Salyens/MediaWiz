import { useTheme } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

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
    width: "100%", // Увеличение ширины
    minHeight: "100px", // Увеличение минимальной высоты
    padding: "15px", // Увеличение отступов
    fontSize: "1.1rem", // Увеличение размера шрифта
    fontFamily: "Roboto, sans-serif", // Изменение шрифта
    lineHeight: "1.6", // Увеличение межстрочного интервала
    borderColor:
      localData === "" ? theme.palette.error.main : theme.palette.grey[400],
    borderRadius: "8px", // Закругление углов
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Добавление тени
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    resize: "vertical", // Разрешить изменение размера по вертикали
    transition: "border-color 0.3s, box-shadow 0.3s", // Анимация фокуса
    borderColor: isEmpty ? theme.palette.error.main : theme.palette.grey[300],
    borderWidth: isEmpty ? "2px" : "1px", // Увеличение тол
    "&:focus": {
      outline: "none",
      borderColor: theme.palette.primary.main,
      boxShadow: `0px 0px 12px ${theme.palette.primary.light}`,
    },
    "&::placeholder": {
      color: theme.palette.error.main,
      opacity: 1,
      fontStyle: "italic", // Курсивный стиль для placeholder
    },
  };
  const parsePath = (path) => {
    return path.split(".").reduce((acc, key) => {
      if (key.includes("[")) {
        const [arrayKey, arrayIndex] = key.split(/\[(\d+)\]/).filter(Boolean);
        acc.push(arrayKey, parseInt(arrayIndex));
      } else {
        acc.push(key);
      }
      return acc;
    }, []);
  };

  const updateDataAtPath = (path, value, editableData) => {
    const keys = parsePath(path);
    let updatedData = { ...editableData };
    let current = updatedData;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key] || typeof current[key] !== "object") {
        current[key] = typeof keys[i + 1] === "number" ? [] : {};
      }
      current = current[key];
    }

    current[keys[keys.length - 1]] = value;
    return updatedData;
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
