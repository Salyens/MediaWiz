import formatLabel from "@/utils/formatLabel";
import { Box, Typography } from "@mui/material";
import React from "react";

const EditorHeader = ({ renderData, path, data }) => {
  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        {formatLabel(path)}
      </Typography>
      {Object.entries(data).map(([key, value]) =>
        renderData(value, `${path ? path + "." : ""}${key}`)
      )}
    </Box>
  );
};

export default EditorHeader;
