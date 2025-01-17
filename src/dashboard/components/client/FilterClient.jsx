import { Search } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useContext } from "react";
import { ClientContext } from "../../../context/clients/ClientContext";
import { useForm } from "../../../hooks/useForm";

const state = {
    nombre: "",
    identificacion: "",
  };

export const FilterClient = () => {
  const { formState, nombre, identificacion, onInputChange} =
    useForm(state);
    const {startGetClients} = useContext(ClientContext);

  const onFilterClient = async () => {
    await startGetClients(formState);
  };
  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2}}>
      <TextField
        label="Nombre"
        variant="outlined"
        size="small"
        fullWidth
        name="nombre"
        value={nombre}
        onChange={onInputChange}
      />
      <TextField
        label="Identificación"
        variant="outlined"
        size="small"
        fullWidth
        name="identificacion"
        value={identificacion}
        onChange={onInputChange}
      />
      <IconButton color="primary" sx={{ alignSelf: "center" }} onClick={onFilterClient}>
        <Search />
      </IconButton>
    </Box>
  );
};
