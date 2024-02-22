"use client";
import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import ClientList from "../components/AdminPage/ClientList/ClientList";
import MyPages from "../components/AdminPage/MyPages/MyPages";

const AdminPage = () => {
  const [token, setToken] = useState(null);
  const [activeComponent, setActiveComponent] = useState("clients"); // Новое состояние для активного компонента

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const showClients = () => {
    setActiveComponent("clients");
  };

  const showPages = () => {
    setActiveComponent("pages");
  };

  if (token) {
    return (
      <Container sx={{ mt: 2 }}>
        <Button variant="text" onClick={showClients}>
          Мои заявки
        </Button>
        <Button variant="text" onClick={showPages}>
          Редактировать информацию
        </Button>
        {activeComponent === "clients" && <ClientList />}
        {activeComponent === "pages" && <MyPages />}
      </Container>
    );
  } else {
    return <p>У вас нет прав для доступа к этой странице.</p>;
  }
};

export default AdminPage;
