import Header from "./Header/Header";
import ApiService from "@/services/ApiService";
import WeOffer from "./WeOffer/WeOffer";
import { Box } from "@mui/material";

const MainPage = async () => {
  const page = await ApiService.getPageData("main-page");
  const { weOffer } = page.en;

  return (
    <Box>
      <Header page={page} />
      <WeOffer weOffer={weOffer} />
    </Box>
  );
};

export default MainPage;
