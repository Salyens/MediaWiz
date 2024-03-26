"use client";

import * as React from "react";
import "../modal.css";

import MainModal from "../MainModal";
import SuccessModal from "../SuccessModal";
import ClientSubmit from "../../Buttons";

export default function FeedbackModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status, setStatus] = React.useState(false);

  return (
    <div>
      <ClientSubmit onClick={handleOpen} />
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
