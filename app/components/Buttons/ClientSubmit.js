import { Button, Grid } from "@mui/material";
import React from "react";

const ClientSubmit = ({ onClick }) => {
  return (
    <Button
      sx={{
        p: 2.5,
        mt: 8,
        display: "flex",
        width: "55%",
        background: "linear-gradient(180deg, #F65CCB 0%, #A05CF6 100%)",
        borderRadius: "12px",
        fontSize: 24,
        fontWeight: 700,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: "0.01em",
        lineHeight: "28px",
        textTransform: "none",
        "&:hover": {
          background: "linear-gradient(180deg, #FF39C7 0%, #770CFF 100%)",
          boxShadow:
            "0px 4px 20px 0px rgba(255, 57, 199, 0.7), 0px 4px 4px 0px rgba(255, 57, 199, 0.25)",
        },
      }}
      onClick={() => onClick()}
    >
      Оставить заявку
    </Button>
  );
};

export default ClientSubmit;
