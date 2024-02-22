import { Button } from "@mui/material";
import React from "react";

const AddButton = ({ path, editableData, onSetEditableData }) => {
  const handleAddItem = (path) => {
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
      const newItem = path.includes("quotes")
        ? { name: "", imgURL: "", quote: "" }
        : "";
      current.push(newItem);
    }
    onSetEditableData(updatedData);
  };
  return (
    <Button
      variant="contained"
      onClick={() => handleAddItem(path)}
      sx={{ mb: 2 }}
    >
      Добавить
    </Button>
  );
};

export default AddButton;
