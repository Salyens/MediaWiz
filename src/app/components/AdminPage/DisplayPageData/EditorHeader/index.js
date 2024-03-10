import formatLabel from "@/src/app/utils/formatLabel";
import { Box, Typography } from "@mui/material";
import React from "react";

const EditorHeader = ({ renderData, path, data, fieldsToRemove }) => {
  const formattedPath = path.replace(/\[(\w+)\]/g, ".$1");
  const isMarked = fieldsToRemove.includes(formattedPath);

  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: isMarked ? "red" : "background.paper",
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
