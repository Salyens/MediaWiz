"use client";
import { Play, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import '@fontsource/play/400.css';
import '@fontsource/play/700.css';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  typography: {
    fontFamily: '"Play", "Roboto", sans-serif',
  },
});

export default theme;

