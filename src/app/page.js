import MainPage from "./components/MainPage";
import ApiService from "./services/ApiService";

export const metadata = {
  title: "Home page",
  description: "",
};

export default function Home() {
  // const page = await ApiService.getPageData("main-page");

  return (
    <>
      <MainPage />
    </>
  );
}
