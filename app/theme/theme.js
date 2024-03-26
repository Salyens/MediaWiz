"use client";
import { createTheme } from "@mui/material/styles";

import "@fontsource/play/400.css";
import "@fontsource/play/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Play", "Roboto", sans-serif',
  },
  // palette: {
  //   background: {
  //     default: '#1A1A1A' 
  //   },
  //   text: {
  //     primary: 'rgba(255, 255, 255, 1)' 
  //   }
  // }
});

export default theme;
