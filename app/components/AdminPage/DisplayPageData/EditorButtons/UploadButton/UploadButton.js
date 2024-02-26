import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const UploadButton = ({ path, onSetEditableData }) => {
  // const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setFileName(file.name);
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
      {/* <Typography>sss{fileName}</Typography>
      {fileName && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          Выбранный файл: {fileName}
        </Typography>
      )} */}
    </Box>
  );
};

export default UploadButton;
