import { Button } from "@mui/material";
import React from "react";

const DeleteButton = ({
  path,
  index,
  editableData,
  onSetEditableData,
  onSetFieldsToRemove,
  setMarkedForDeletion 
}) => {
  const handleMarkForDeletion = (path, index) => {
    const fullPath = `${path}.${index}`;
    onSetFieldsToRemove((prev) => [...prev, fullPath]);
    setMarkedForDeletion((prev) => ({...prev, [fullPath]: true}));
  };

  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={() => handleMarkForDeletion(path, index)}
      sx={{ mb: 1 }}
    >
      Удалить
    </Button>
  );
};


export default DeleteButton;
