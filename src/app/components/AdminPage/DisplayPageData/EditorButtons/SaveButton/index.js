import { Button } from "@mui/material";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import checkForEmptyFields from "@/src/app/utils/checkForEmptyFields";
import ApiService from "@/src/app/services/ApiService";


const SaveButton = ({
  editableData,
  endPoint,
  onSetSaveSuccess,
  onSetAlertClass,
  formData,
  onSetEditableData,
  fieldsToRemove,
  onSetFieldsToRemove,
}) => {
  const handleSubmit = async () => {
    try {
      const hasEmptyFields = checkForEmptyFields(editableData, fieldsToRemove);

      if (hasEmptyFields) {
        alert("Не все поля заполнены!");
        return;
      }
      const response = await ApiService.updatePageData(formData, endPoint);

      onSetEditableData(response);
      onSetSaveSuccess(true);
      onSetAlertClass("alert-enter");
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        onSetSaveSuccess(false);
      }, 4000);
      setTimeout(() => {
        onSetAlertClass("alert-exit");
      }, 2000);
    } catch (error) {
      onSetSaveSuccess(false);
    }
    onSetFieldsToRemove([]);
  };
  return (
    <Button
      sx={{ mb: 15 }}
      onClick={handleSubmit}
      startIcon={<SaveIcon />}
      variant="contained"
      color="primary"
    >
      Сохранить изменения
    </Button>
  );
};

export default SaveButton;
