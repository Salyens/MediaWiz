import { Box } from "@mui/material";
import React from "react";
import AddButton from "../EditorButtons/AddButton/AddButton";
import DeleteButton from "../EditorButtons/DeleteButton/DeleteButton";

const EditorList = ({
  path,
  data,
  renderData,
  editableData,
  onSetEditableData,
}) => {
  return (
    <Box
      key={path}
      sx={{
        p: 2,
        mb: 1,
        bgcolor: "#e0e0e0",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {data.map((item, index) => (
        <Box key={`${path}[${index}]`} sx={{ width: "100%", mb: 1 }}>
          {renderData(item, `${path}[${index}]`)}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <DeleteButton
              path={path}
              index={index}
              editableData={editableData}
              onSetEditableData={onSetEditableData}
            />
          </Box>
        </Box>
      ))}
      <AddButton
        path={path}
        editableData={editableData}
        onSetEditableData={onSetEditableData}
      />
    </Box>
  );
};

export default EditorList;
