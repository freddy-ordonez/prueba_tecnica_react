import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Box,
  Typography,
  Grid2,
  IconButton,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DashboardLayout } from "../layout/DashboardLayout";
import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "../../hooks/useForm";
import { ClientContext } from "../../context/clients/ClientContext";
import { AuthContext } from "../../context/auth/AuthContext";
import { MessagesAlert } from "../components/MessagesAlert";
import { useNavigate } from "react-router-dom";

const state = {
  nombre: "",
  apellidos: "",
  identificacion: "",
  telefonoCelular: "",
  otroTelefono: "",
  direccion: "",
  fNacimiento: null,
  fAfiliacion: null,
  sexo: "",
  imagen: "",
  resenaPersonal: "",
  interesFK: "",
};
export const ClientMaintenance = () => {
  const { selectedClient, startUpdateClient, startAddClient, listInterest } =
    useContext(ClientContext);
  const { userid } = useContext(AuthContext);

  const { onInputChange, formState, onImageChange, onDateChange } = useForm(
    selectedClient ?? state
  );

  const [message, setMessage] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { resenaPersonal, telefonoCelular, ...client } = formState;

    const formattedData = {
      ...client,
      fNacimiento: formState.fNacimiento
        ? formState.fNacimiento.format("YYYY-MM-DD")
        : null,
      fAfiliacion: formState.fAfiliacion
        ? formState.fAfiliacion.format("YYYY-MM-DD")
        : null,
      usuarioId: userid,
      resennaPersonal: formState.resenaPersonal,
      celular: telefonoCelular,
    };

    if (selectedClient) {
      const { ok, message } = await startUpdateClient(formattedData);
      const severity = ok ? "success" : "danger";
      setMessage({ open: true, message, severity });
      setTimeout(() => {
        navigate(-1);
      }, 2000);
      return;
    }

    const { ok, message } = await startAddClient({
      ...formState,
      usuarioId: userid,
    });
    const severity = ok ? "success" : "danger";
    setMessage({ open: true, message, severity });
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MessagesAlert
          open={message.open}
          severity={message.severity}
          hideDuration={3000}
          message={message.message}
          vertical={"top"}
          horizontal={"center"}
        />
        <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
          {/* Contenedor del título y el icono de usuario */}
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 size={{ xs: 12, lg: 8 }}>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  sx={{ position: "relative", display: "inline-block", mr: 2 }}
                >
                  <IconButton
                    component="label"
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#e0e0e0",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    {formState.imagen ? (
                      <img
                        src={formState.imagen}
                        alt="Vista previa"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <PersonIcon sx={{ fontSize: 30, color: "#757575" }} />
                    )}
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      name="imagen"
                      onChange={onImageChange}
                    />
                  </IconButton>
                </Box>
                Mantenimiento de clientes
              </Typography>
            </Grid2>
          </Grid2>

          {/* Formulario */}
          <Grid2 container spacing={2} sx={{ marginTop: 2 }}>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 20,
                  },
                }}
                required
                fullWidth
                label="Identificación"
                name="identificacion"
                value={formState.identificacion}
                onChange={onInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 50,
                  },
                }}
                required
                fullWidth
                label="Nombre"
                name="nombre"
                value={formState.nombre}
                onChange={onInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 100,
                  },
                }}
                fullWidth
                label="Apellidos"
                name="apellidos"
                value={formState.apellidos}
                onChange={onInputChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Género *</InputLabel>
                <Select
                  name="sexo"
                  value={formState.sexo}
                  onChange={onInputChange}
                  label="Género"
                  required
                >
                  <MenuItem value="M">Masculino</MenuItem>
                  <MenuItem value="F">Femenino</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Fecha de nacimiento"
                value={formState.fNacimiento}
                onChange={(newValue) => onDateChange("fNacimiento", newValue)}
                format="YYYY-MM-DD" // Formato de la fecha
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Fecha de afiliación"
                value={formState.fAfiliacion}
                onChange={(newValue) => onDateChange("fAfiliacion", newValue)}
                format="YYYY-MM-DD" // Formato de la fecha
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 20,
                  },
                }}
                fullWidth
                label="Teléfono Celular"
                name="telefonoCelular"
                value={formState.telefonoCelular}
                onChange={onInputChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 20,
                  },
                }}
                fullWidth
                label="Teléfono Otro"
                name="otroTelefono"
                value={formState.otroTelefono}
                onChange={onInputChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Interés</InputLabel>
                <Select
                  name="interesFK"
                  value={formState.interesFK}
                  onChange={onInputChange}
                  label="Interés"
                  required
                >
                  {listInterest.map((interest) => (
                    <MenuItem key={interest.id} value={interest.id}>
                      {interest.descripcion}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 200,
                  },
                }}
                fullWidth
                label="Dirección"
                name="direccion"
                value={formState.direccion}
                onChange={onInputChange}
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                slotProps={{
                  htmlInput: {
                    maxLength: 200,
                  },
                }}
                fullWidth
                label="Reseña"
                name="resenaPersonal"
                multiline
                rows={3}
                value={formState.resenaPersonal}
                onChange={onInputChange}
                required
              />
            </Grid2>
          </Grid2>

          {/* Botones */}
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Guardar
            </Button>
            <Button variant="outlined" color="secondary" onClick={()=> navigate('/clientes')}>
              Regresar
            </Button>
          </Box>
        </Box>
      </LocalizationProvider>
    </DashboardLayout>
  );
};
