import AboutUs from "./components/MainPage/AboutUs/AboutUs";
import WhatWeDo from "./components/MainPage/WhatWeDo/WhatWeDo";
import WhereYouFindUs from "./components/MainPage/WhereYouFindUs/WhereYouFindUs";
import Head from "next/head";
import "./globals.css";
import Header from "./components/MainPage/Header/Header";

export const metadata = {
  title: "Home page",
  description: "",
};

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header/>
      {/* <AboutUs />
      <WhatWeDo />
      <WhereYouFindUs /> */}
    </>
  );
}
