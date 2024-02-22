import AboutUs from "./components/MainPage/AboutUs/AboutUs";
import WhatWeDo from "./components/MainPage/WhatWeDo/WhatWeDo";
import WhereYouFindUs from "./components/MainPage/WhereYouFindUs/WhereYouFindUs";

export const metadata = {
  title: "Home page",
  description: "",
};

export default function Home() {

  return (
    <>

      <AboutUs />
      <WhatWeDo />
      <WhereYouFindUs />
    </>
  );
}
