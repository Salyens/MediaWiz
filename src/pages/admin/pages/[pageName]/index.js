"use client";

import withAuth from "@/src/app/HOC/withAuth";
import DisplayPageData from "@/src/app/components/AdminPage/DisplayPageData";
import AdminLayout from "@/src/app/layout/AdminLayout";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const endPoint = router.query["pageName"];
  return (
    <AdminLayout>
      <DisplayPageData endPoint={endPoint} />
    </AdminLayout>
  );
};

export default withAuth(Page);
