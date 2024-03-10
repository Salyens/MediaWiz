import ApiService from "../../services/ApiService";
import Header from "./Header";
import WeOffer from "./WeOffer";

const MainPage =  async () => {
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
