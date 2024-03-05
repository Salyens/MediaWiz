import "./globals.css";

import MainPage from "./components/MainPage/MainPage";
import WeOffer from "./components/MainPage/WeOffer/WeOffer";
import { Box } from "@mui/material";

export const metadata = {
  title: "Home page",
  description: "",
};

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#1A1A1A" }}>
      <MainPage />
    </Box>
  );
}
