"use client";
import ClientList from "../components/AdminPage/ClientList/page";
import withAuth from "@/HOC/withAuth";

const AdminPage = () => {
  return <ClientList />;
};

export default withAuth(AdminPage);
