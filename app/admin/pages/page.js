"use client";

import withAuth from "@/HOC/withAuth";
import MyPages from "@components/AdminPage/MyPages";

const page = () => {
  return <MyPages />;
};

export default withAuth(page);
