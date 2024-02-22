import ApiService from "@/app/services/ApiService";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MainModal = ({ open, handleClose, onSetStatus }) => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: null,
    email: "",
  });

  const handleSubmit = async (data) => {
    try {
      const response = await ApiService.createFeedback(data);
      onSetStatus(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <Typography
          variant="h6"
          sx={{
            p: 1,
          }}
        >
          Заказать обратный звонок
        </Typography>
        <TextField
          onChange={(e) =>
            setForm((prevData) => {
              return {
                ...prevData,
                name: e.target.value,
              };
            })
          }
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          sx={{
            marginBottom: 2,
            width: "80%",
          }}
        />
        <TextField
          onChange={(e) =>
            setForm((prevData) => {
              return {
                ...prevData,
                phoneNumber: e.target.value,
              };
            })
          }
          id="outlined-basic"
          label="Телефон"
          variant="outlined"
          type="number"
          sx={{
            marginBottom: 2,
            width: "80%",
          }}
        />
        <TextField
          onChange={(e) =>
            setForm((prevData) => {
              return {
                ...prevData,
                email: e.target.value,
              };
            })
          }
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{
            marginBottom: 2,
            width: "80%",
          }}
        />
        <Button onClick={() => handleSubmit(form)} variant="outlined">
          Отправить
        </Button>
      </Box>
    </Modal>
  );
};

export default MainModal;
