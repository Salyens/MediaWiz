'use client'


import withAuth from "@/src/app/HOC/withAuth";
import ClientList from "@/src/app/components/AdminPage/ClientList";
import AdminLayout from "@/src/app/layout/AdminLayout";


const AdminPage = () => {
  return (
    <AdminLayout>
      <ClientList />
    </AdminLayout>
  );
};

export default withAuth(AdminPage);
