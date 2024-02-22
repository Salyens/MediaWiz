import { Button } from "@mui/material";
import React from "react";

const DeleteButton = ({ path, index, editableData, onSetEditableData }) => {
  const handleRemoveItem = (path, index) => {
    const keys = path.split(".");
    let updatedData = { ...editableData };
    let current = updatedData;

    keys.forEach((key) => {
      if (key.includes("[")) {
        const arrayKey = key.split(/\[\d+\]/)[0];
        current = current[arrayKey];
      } else {
        current = current[key];
      }
    });

    if (Array.isArray(current)) {
      current.splice(index, 1);
    }
    onSetEditableData(updatedData);
  };
  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={() => handleRemoveItem(path, index)}
      sx={{ mb: 1 }}
    >
      Удалить
    </Button>
  );
};

export default DeleteButton;
