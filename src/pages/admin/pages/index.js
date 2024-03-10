"use client";

import withAuth from "@/src/app/HOC/withAuth";
import MyPages from "@/src/app/components/AdminPage/MyPages/MyPages";
import AdminLayout from "@/src/app/layout/AdminLayout";
import React from "react";

const page = () => {
  return (
    <AdminLayout sx={{ mt: 1 }}>
      <MyPages />
    </AdminLayout>
  );
};

export default withAuth(page);
