import { Chip, Typography } from "@mui/material";
import React from "react";
import "./whatwedo.css";

const WhatWeDo = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", m: 2 }}>
        Чем мы занимаемся
      </Typography>
      <div className="container">
        <Chip
          label={
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "normal",
                textAlign: "center",
              }}
            >
              Создание, ведение групп и страниц
            </Typography>
          }
          variant="outlined"
          sx={{ width: 150, height: 150, mr: 1 }}
        />
        <Chip
          label={
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "normal",
                textAlign: "center",
              }}
            >
              Продвижение соц.сетей
            </Typography>
          }
          variant="outlined"
          sx={{ width: 150, height: 150, mr: 1 }}
        />
        <Chip
          label={
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "normal",
                textAlign: "center",
              }}
            >
              Разработка сайтов
            </Typography>
          }
          variant="outlined"
          sx={{ width: 150, height: 150, mr: 1 }}
        />
        <Chip
          label={
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "normal",
                textAlign: "center",
              }}
            >
              Продвижение сайтов
            </Typography>
          }
          variant="outlined"
          sx={{ width: 150, height: 150, mr: 1 }}
        />
        <Chip
          label={
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "normal",
                textAlign: "center",
              }}
            >
              Создание, ведение групп и страниц
            </Typography>
          }
          variant="outlined"
          sx={{ width: 150, height: 150, mr: 1 }}
        />
      </div>
    </>
  );
};

export default WhatWeDo;
