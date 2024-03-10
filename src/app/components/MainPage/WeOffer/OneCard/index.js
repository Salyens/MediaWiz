import { Box, Typography } from "@mui/material";
import React from "react";

const OneCard = ({ header, description }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        height: 352,
        bgcolor: "black",
        mb: 8,
        transition: "0.4s ease",
        "&:hover": {
          boxShadow: "0px 4px 20px 0px #FF00B8",
          transition: "0.4s ease",
          "& .circle-on-hover": {
            borderColor: "#FF00B8",
            boxShadow: "0px 0px 8px 3px #FF00B8",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          display: "flex",
          p: 2,
          pt: 7,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontSize: 36,
            position: "relative",
            pl: 1,
            "&:before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              backgroundColor: "rgba(233, 58, 237, 1)",
              boxShadow: `
              0px 2px 5px rgba(124, 58, 237, 1),
              0px 2px 20px rgba(124, 58, 237, 0.5),
              0px 2px 50px rgba(124, 58, 237, 1),
              0px 2px 150px rgba(124, 58, 237, 1)
              `,
            },
          }}
        >

          {header}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: 24,
            fontFamily: "Roboto",
            color: "rgba(156, 163, 175, 1)",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "black",
        }}
      >
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="circle-on-hover"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              border: "1px solid rgba(252, 104, 255, 0.37)",
              borderRadius: "100%",
              mr: 4,
            }}
          >
            <img src="/arrow.png" alt="arrow" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OneCard;
