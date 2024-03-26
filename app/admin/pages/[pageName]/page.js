"use client";

import withAuth from "@/HOC/withAuth";
import DisplayPageData from "@components/AdminPage/DisplayPageData";

const Page = ({ params }) => {
  return <DisplayPageData endPoint={params.pageName} />;
};

export default withAuth(Page);
