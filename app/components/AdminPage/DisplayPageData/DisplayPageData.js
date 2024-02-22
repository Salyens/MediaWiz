import React, { useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import "./style.css";
import EditorHeader from "./EditorHeader/EditorHeader";
import EditorList from "./EditorList/EditorList";
import EditorTextArea from "./EditorTextArea/EditorTextArea";
import SaveButton from "./EditorButtons/SaveButton/SaveButton";
import UploadButton from "./EditorButtons/UploadButton/UploadButton";
import formatLabel from "@/utils/formatLabel";

const DisplayPageData = ({ pageData, endPoint }) => {
  const [editableData, setEditableData] = useState(pageData);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertClass, setAlertClass] = useState("");

  const renderData = (data, path) => {
    if (path === "_id") return null;

    if (typeof data === "object" && !Array.isArray(data) && data !== null) {
      return (
        <EditorHeader
          key={path + Date.now()}
          renderData={renderData}
          formatLabel={formatLabel}
          path={path}
          data={data}
        />
      );
    } else if (Array.isArray(data)) {
      return (
        <EditorList
          key={path + Date.now()}
          path={path}
          data={data}
          renderData={renderData}
          editableData={editableData}
          onSetEditableData={setEditableData}
        />
      );
    } else {
      const isImgUrl = path.endsWith(".imgURL");
      return (
        <Box
          sx={{
            p: 2,
            mb: 1,
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
          }}
          key={path + Date.now()}
        >
          <Typography
            key={path + Date.now()}
            variant="h6"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {formatLabel(path)}
          </Typography>
          {isImgUrl ? (
            <UploadButton key={path + Date.now()} path={path} />
          ) : (
            <EditorTextArea
              key={path + Date.now()}
              path={path}
              data={data}
              editableData={editableData}
              onSetEditableData={setEditableData}
            />
          )}
        </Box>
      );
    }
  };

  return (
    <Box sx={{ p: 2, position: "relative" }}>
      {saveSuccess && showAlert && (
        <Alert severity="success" className={alertClass}>
          Изменения успешно сохранены!
        </Alert>
      )}{" "}
      <Typography
        sx={{ textAlign: "center", mb: 2 }}
        variant="h5"
      >{`Редактирование страницы "${pageData.header}"`}</Typography>
      {Object.entries(editableData).map(([key, value]) =>
        renderData(value, key)
      )}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <SaveButton
          editableData={editableData}
          endPoint={endPoint}
          onSetSaveSuccess={setSaveSuccess}
          onSetShowAlert={setShowAlert}
          onSetAlertClass={setAlertClass}
        />
      </Box>
    </Box>
  );
};

export default DisplayPageData;
