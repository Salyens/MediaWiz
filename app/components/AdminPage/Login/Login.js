"use client";
import { useRouter } from "next/navigation";
import ApiService from "@/app/services/ApiService";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await ApiService.login(data);
      setError("");
      router.push("/admin");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
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
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: isMobile ? 2 : 4,
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
          mx: "auto",
        }}
      >
        {error && (
          <Typography sx={{ color: "error.main", mb: 1 }}>{error}</Typography>
        )}
        <TextField
          id="email-input"
          label="Email"
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          variant="outlined"
          sx={{ mb: 2, width: "100%" }}
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
          sx={{ mb: 2, width: "100%" }}
        />
        <Button
          onClick={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
          variant="contained"
        >
          {isLoading ? <CircularProgress/> : 'Log in'}
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
