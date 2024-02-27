"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import "../modal.css";
import ApiService from "@/services/ApiService";
import MainModal from "../MainModal/MainModal";
import SuccessModal from "../SuccessModal/SuccessModal";

export default function FeedbackModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status, setStatus] = React.useState(false);

  return (
    <div>
      <Button onClick={handleOpen}>Оставить заявку</Button>
      {!status ? (
        <MainModal
          open={open}
          handleClose={handleClose}
          onSetStatus={setStatus}
        />
      ) : (
        <SuccessModal
          open={open}
          handleClose={handleClose}
          onSetStatus={setStatus}
        />
      )}
    </div>
  );
}
