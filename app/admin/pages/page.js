"use client";
import MyPages from "@/app/components/AdminPage/MyPages/MyPages";
import withAuth from "@/HOC/withAuth";

const page = () => {
  return <MyPages />;
};

export default withAuth(page);
