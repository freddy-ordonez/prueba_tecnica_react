import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { MessagesAlert } from "../../dashboard/components/MessagesAlert";
import { Link as RouterLink } from "react-router-dom";

const state = {
  username: "",
  email: "",
  password: "",
};

export const RegisterPage = () => {
  const { username, email, password, onInputChange, formState, onResetForm } =
    useForm(state);
  const { startCreateUser } = useContext(AuthContext);

  const [message, setMessage] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const regex = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*d)).{9,20}$/;

    const isValidPassword = regex.test(password);
    if (isValidPassword) {
      const { ok, message } = await startCreateUser(formState);

      const severity = ok ? "success" : "error";
      setMessage({ ...message, open: true, message, severity });

      if (ok) {
        setTimeout(() => {
          navigate(-1);
        }, 3000);
      }
    } else {
      const severity = "error";
      const messagePassword = "La contraseña debe ser mayor a 8 y menor o igual a 20 caracteres 1 minuscula y 1 mayuscula";
      setMessage({ ...message, open: true, message: messagePassword, severity });
    }

    setTimeout(() => {
      setMessage({ ...message, open: false });
    }, 3000);
  };

  return (
    <AuthLayout>
      <MessagesAlert
        open={message.open}
        severity={message.severity}
        hideDuration={3000}
        vertical={"top"}
        horizontal={"center"}
        message={message.message}
      />
      <Box
        component="form"
        onSubmit={handleRegister}
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
          Registro
        </Typography>
        <TextField
          label="Nombre Usuario"
          type="text"
          name="username"
          value={username}
          onChange={onInputChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Direccion de correo"
          type="email"
          name="email"
          value={email}
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
        >
          Registrarme
        </Button>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: 2, color: "#6F6F6F" }}
        >
          ¿Ya tienes una cuenta?{" "}
          <Link
            component={RouterLink}
            to="/auth/login"
            sx={{ color: "#4F4F4F", textDecoration: "none" }}
          >
            Iniciar Sesión
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};
