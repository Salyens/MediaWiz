import ApiService from "@/app/services/ApiService";
import { Button } from "@mui/material";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";

const SaveButton = ({
  editableData,
  endPoint,
  onSetSaveSuccess,
  onSetShowAlert,
  onSetAlertClass,
  formData
}) => {
  const handleSubmit = async () => {
    try {
      const response = await ApiService.updatePageData(formData, endPoint);

      onSetSaveSuccess(true);
      onSetShowAlert(true);
      onSetAlertClass("alert-enter");
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        onSetShowAlert(false);
      }, 4000);
      setTimeout(() => {
        onSetAlertClass("alert-exit");
      }, 2000);
    } catch (error) {
      console.log("Update error: ", error);
      onSetSaveSuccess(false);
    }
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
