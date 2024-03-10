import { Box, Button, Modal, Typography } from "@mui/material";

const SuccessModal = ({ open, handleClose, onSetStatus }) => {
  const handleSubmit = () => {
    onSetStatus(false);
    handleClose();
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
          Ваша заявка принята
        </Typography>

        <Button onClick={() => handleSubmit()} variant="outlined">
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
