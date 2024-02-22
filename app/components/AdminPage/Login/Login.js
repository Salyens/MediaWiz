"use client";
import { useRouter } from "next/navigation";
import ApiService from "@/app/services/ApiService";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter(); 

  const handleSubmit = async () => {
    try {
      const response = await ApiService.login(data);
      router.push("/admin");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <TextField
          id="email-input"
          label="Email"
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          variant="outlined"
          style={{ marginBottom: "10px" }}
        />
        <TextField
          id="password-input"
          label="Password"
          value={data.password}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
          variant="outlined"
          type="password"
        />
        <Button onClick={handleSubmit} sx={{ mt: 1 }} variant="outlined">
          Log in
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
