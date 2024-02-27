'use client'
import AdminLayout from "./AdminLayout";
import ClientList from "../components/AdminPage/ClientList/ClientList";
import withAuth from "@/HOC/withAuth";

const AdminPage = () => {
  return (
    <AdminLayout>
      <ClientList />
    </AdminLayout>
  );
};

export default withAuth(AdminPage);
