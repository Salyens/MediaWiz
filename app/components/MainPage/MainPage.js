import Header from "./Header/Header";
import ApiService from "@/services/ApiService";
import WeOffer from "./WeOffer/WeOffer";

const MainPage = async () => {
  const page = await ApiService.getPageData("main-page");
  const { weOffer } = page.en;

  return (
    <>
      <Header page={page} />
      <WeOffer weOffer={weOffer} />
    </>
  );
};

export default MainPage;
