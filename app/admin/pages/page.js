"use client";
import MyPages from "@/app/components/AdminPage/MyPages/MyPages";
import React from "react";
import AdminLayout from "../AdminLayout";
import withAuth from "@/HOC/withAuth";

const page = () => {
  return (
    <AdminLayout sx={{ mt: 1 }}>
      <MyPages />
    </AdminLayout>
  );
};

export default withAuth(page);
