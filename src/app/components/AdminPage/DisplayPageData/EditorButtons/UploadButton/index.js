import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const UploadButton = ({ path, onSetEditableData }) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formattedPath = path.replace(/\[(\w+)\]/g, ".$1");
      onSetEditableData(prev => {
        return {...prev, [formattedPath]: file};
      });
      
    }
  };

  return (
    <Box>
      <Button variant="outlined" component="label" sx={{ mt: 1 }}>
        Загрузить файл
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
    </Box>
  );
};

export default UploadButton;
