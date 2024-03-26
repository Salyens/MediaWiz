"use client";

import withAuth from "@/HOC/withAuth";
import ClientList from "@components/AdminPage/ClientList";

const AdminPage = () => {
  return <ClientList />;
};

export default withAuth(AdminPage);
