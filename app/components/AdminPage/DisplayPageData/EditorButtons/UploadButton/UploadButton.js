import { Button } from "@mui/material";
import React from "react";

const UploadButton = () => {

  return (
    <Button variant="outlined" component="label" sx={{ mt: 1 }}>
      Загрузить файл
      <input
        type="file"
        hidden
        // onChange={(e) => handleFileChange(path, e.target.files[0])}
      />
    </Button>
  );
};

export default UploadButton;
