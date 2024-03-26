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

      if (current.length > 0) {
        if (typeof current[0] === "object") {

          const newItem = Object.keys(current[0]).reduce((obj, key) => {
            obj[key] = ""; 
            return obj;
          }, {});
          current.push(newItem);
        } else if (typeof current[0] === "string") {
          current.push("");
        }
      } else {
        current.push("");
      }
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
