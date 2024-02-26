import React, { useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import "./style.css";
import EditorHeader from "./EditorHeader/EditorHeader";
import EditorList from "./EditorList/EditorList";
import EditorTextArea from "./EditorTextArea/EditorTextArea";
import SaveButton from "./EditorButtons/SaveButton/SaveButton";
import UploadButton from "./EditorButtons/UploadButton/UploadButton";
import formatLabel from "@/utils/formatLabel";
import createFormData from "@/utils/createFormData";

const DisplayPageData = ({ pageData, endPoint }) => {
  const [editableData, setEditableData] = useState(pageData);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [alertClass, setAlertClass] = useState("");
  const [fieldsToRemove, setFieldsToRemove] = useState([]);

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
      >{`Редактирование страницы`}</Typography>
      {Object.entries(editableData).map(([key, value]) =>
        renderData(value, key)
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          position: "fixed", // Замените 'absolute' на 'fixed'
          bottom: "0", // Выравнивание по нижней части экрана
          left: "50%", // Центрирование кнопки по горизонтали
          transform: "translateX(-50%)", // Сдвиг влево на половину её ширины для точного центрирования
          width: "100%", // Максимальная ширина
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
