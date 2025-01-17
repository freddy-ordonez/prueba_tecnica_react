import React, { useContext, useMemo, useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/auth/AuthContext";
import { MessagesAlert } from "../../dashboard/components/MessagesAlert";
import { useNavigate } from "react-router-dom";

const state = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const { username, password, status, onInputChange } = useForm(state);
  const { startLogin, startSetAuthenticate } = useContext(AuthContext);

  const [message, setMessage] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const { ok, message } = await startLogin({ username, password });
    const severity = ok ? "success" : "error";
    setMessage({ ...message, open: true, message, severity });

    if (!ok) {
      setTimeout(() => {
        setMessage({ ...message, open: false });
      }, 3000);
    }else{
      setTimeout(() => {
        startSetAuthenticate();
        navigate("/")
      }, 3000);
    }
  };

  return (
    <AuthLayout>
      <MessagesAlert
        open={message.open}
        severity={message.severity}
        message={message.message}
        hideDuration={3000}
        vertical={"top"}
        horizontal={"center"}
      />
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 400,
          p: 3,
          borderRadius: 2,
          backgroundColor: "#FFFFFF",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2, color: "#2B2B2B" }}>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          type="text"
          name="username"
          value={username}
          onChange={onInputChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Contraseña"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#4F4F4F",
            "&:hover": { backgroundColor: "#6F6F6F" },
            color: "#FFFFFF",
          }}
          disabled={status === "cheking"}
        >
          Ingresar
        </Button>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: 2, color: "#6F6F6F" }}
        >
          ¿No tienes una cuenta?{" "}
          <Link
            component={RouterLink}
            to="/auth/register"
            sx={{ color: "#4F4F4F", textDecoration: "none" }}
          >
            Agregar Usuario
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};
