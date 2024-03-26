"use client";
import React, { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import "./style.css";
import EditorHeader from "./EditorHeader";
import EditorList from "./EditorList";
import EditorTextArea from "./EditorTextArea";
import SaveButton from "./EditorButtons/SaveButton";
import UploadButton from "./EditorButtons/UploadButton";
import formatLabel from "@/utils/formatLabel";
import createFormData from "@/utils/createFormData";
import ApiService from "@/services/ApiService";

const DisplayPageData = ({ endPoint }) => {
  const [editableData, setEditableData] = useState([]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [alertClass, setAlertClass] = useState("");
  const [fieldsToRemove, setFieldsToRemove] = useState([]);

  const handleGetData = async (param) => {
    try {
      const response = await ApiService.getPageData(param);
      setEditableData(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    handleGetData(endPoint);
  }, []);

  const formData = createFormData(editableData, fieldsToRemove);

  const renderData = (data, path) => {
    if (path === "_id") return null;
    if (typeof data === "object" && !Array.isArray(data) && data !== null) {
      return (
        <EditorHeader
          key={path}
          renderData={renderData}
          path={path}
          data={data}
          fieldsToRemove={fieldsToRemove}
        />
      );
    } else if (Array.isArray(data)) {
      return (
        <EditorList
          onSetFieldsToRemove={setFieldsToRemove}
          key={path}
          path={path}
          data={data}
          renderData={renderData}
          editableData={editableData}
          onSetEditableData={setEditableData}
          fieldsToRemove={fieldsToRemove}
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
            <UploadButton
              key={path}
              path={path}
              onSetEditableData={setEditableData}
            />
          ) : (
            <EditorTextArea
              key={path}
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
      {saveSuccess && (
        <Alert severity="success" className={alertClass}>
          Изменения успешно сохранены!
        </Alert>
      )}{" "}
      <Typography
        sx={{ textAlign: "center", mb: 2 }}
        variant="h5"
      >{`Редактирование страницы "${endPoint}"`}</Typography>
      {Object.entries(editableData).map(([key, value]) =>
        renderData(value, key)
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <SaveButton
          editableData={editableData}
          endPoint={endPoint}
          onSetSaveSuccess={setSaveSuccess}
          onSetAlertClass={setAlertClass}
          formData={formData}
          onSetEditableData={setEditableData}
          fieldsToRemove={fieldsToRemove}
          onSetFieldsToRemove={setFieldsToRemove}
        />
      </Box>
    </Box>
  );
};

export default DisplayPageData;
