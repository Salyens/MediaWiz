'use client'
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ClientList from "../components/AdminPage/ClientList/ClientList";
import MyPages from "../components/AdminPage/MyPages/MyPages";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Container sx={{ mt: 2 }}>
      {isAdmin ? (
        <ClientList onSetIsAdmin={setIsAdmin} />
      ) : (
        <Typography sx={{ textAlign: "center", mt: 4, color: "error.main" }}>
          You should be logged in as an administrator to view this page.
        </Typography>
      )}

      {/* {activeComponent === "pages" && <MyPages />} */}
    </Container>
  );
};

export default AdminPage;
