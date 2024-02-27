'use client'
import DisplayPageData from "@/app/components/AdminPage/DisplayPageData/DisplayPageData";
import AdminLayout from "../../AdminLayout";
import withAuth from "@/HOC/withAuth";

const Page = ({ params }) => {
  return (
    <AdminLayout>
      <DisplayPageData endPoint={params.pageName} />
    </AdminLayout>
  );
};

export default withAuth(Page);
