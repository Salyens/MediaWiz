import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const DeleteButton = ({ path, index, onSetFieldsToRemove, fieldsToRemove }) => {
  const deletionPath = `${path}.${index}`;
  const [isMarked, setIsMarked] = useState(fieldsToRemove.includes(deletionPath));

  useEffect(() => {

    setIsMarked(fieldsToRemove.includes(deletionPath));
  }, [fieldsToRemove, deletionPath]);

  const handleMarkForDeletion = () => {
    onSetFieldsToRemove((prev) => {
      if (!prev.includes(deletionPath)) {
        return [...prev, deletionPath];
      }
      return prev;
    });
  };

  const handleCancelDeletion = () => {
    onSetFieldsToRemove((prev) => prev.filter((item) => item !== deletionPath));
  };

  return (
    <>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={handleMarkForDeletion}
        sx={{ mb: 1 }}
      >
        Удалить
      </Button>
      {isMarked && (
        <Button
          variant="contained"
          size="small"
          onClick={handleCancelDeletion}
          sx={{ mb: 1, ml: 1 }}
        >
          Отменить удаление
        </Button>
      )}
    </>
  );
};

export default DeleteButton;
