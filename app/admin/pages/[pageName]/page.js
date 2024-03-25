"use client";
import DisplayPageData from "@/app/components/AdminPage/DisplayPageData/page";
import withAuth from "@/HOC/withAuth";

const Page = ({ params }) => {
  return <DisplayPageData endPoint={params.pageName} />;
};

export default withAuth(Page);
