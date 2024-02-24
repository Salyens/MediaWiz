import { Button } from "@mui/material";
import React from "react";

const UploadButton = ({ path, editableData, onSetEditableData }) => {
  const handleFileChange = (path, file) => {
    // Преобразование path из формата с квадратными скобками в формат с точками
    const formattedPath = path.replace(/\[(\w+)\]/g, ".$1");

    // Обновляем editableData с новым файлом
    onSetEditableData({
      ...editableData,
      [formattedPath]: file, // используем обновленный формат path
    });
  };

  return (
    <Button variant="outlined" component="label" sx={{ mt: 1 }}>
      Загрузить файл
      <input
        type="file"
        hidden
        onChange={(e) => handleFileChange(path, e.target.files[0])}
      />
    </Button>
  );
};

export default UploadButton;
