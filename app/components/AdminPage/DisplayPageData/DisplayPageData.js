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
  const [fieldsToRemove, setFieldsToRemove] = useState([]);
  const [markedForDeletion, setMarkedForDeletion] = useState({});

  const convertDataToJSON = (data) => {
    const jsonData = {};

    const processData = (obj, path = []) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (value instanceof File) {
        } else if (value && typeof value === "object") {
          processData(value, path.concat(key));
        } else {
          jsonData[path.concat(key).join(".")] = value;
        }
      });
    };

    processData(data);
    return JSON.stringify(jsonData);
  };

  const addFilesToFormData = (formData, data, path = []) => {
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(path.concat(key).join("."), value, value.name);
      } else if (value && typeof value === "object") {
        addFilesToFormData(formData, value, path.concat(key));
      }
    });
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append("doc", convertDataToJSON(editableData));

    // Добавляем файлы в formData
    addFilesToFormData(formData, editableData);

    // Добавляем информацию о полях для удаления
    if (fieldsToRemove.length > 0) {
      formData.append("fieldsToRemove", JSON.stringify(fieldsToRemove));
    }

    return formData;
  };

  const formData = createFormData();

  const renderData = (data, path) => {
    const isMarkedForDeletion = markedForDeletion[path];
    if (path === "_id") return null;

    if (typeof data === "object" && !Array.isArray(data) && data !== null) {
      return (
        <EditorHeader
          key={path}
          renderData={renderData}
          path={path}
          data={data}
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
          setMarkedForDeletion={setMarkedForDeletion }
        />
      );
    } else {
      const isImgUrl = path.endsWith(".imgURL");
      return (
        <Box
          sx={{
            p: 2,
            mb: 1,
            bgcolor: isMarkedForDeletion ? "red" : "background.paper", // Изменение цвета фона, если элемент отмечен для удаления
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
              editableData={editableData}
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
          formData={formData}
        />
      </Box>
    </Box>
  );
};

export default DisplayPageData;
