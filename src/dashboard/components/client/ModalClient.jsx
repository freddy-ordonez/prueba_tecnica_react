import { Box, Button, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { ClientContext } from "../../../context/clients/ClientContext";

export const ModalClient = ({open, onClose, onConfirmDelete}) => {
 
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Confirmación de Eliminación
        </Typography>
        <Typography sx={{ mt: 2 }}>
          ¿Estás seguro de que deseas eliminar este registro?
        </Typography>
        <Box
          sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          <Button onClick={onClose} variant="outlined">
            Cancelar
          </Button>
          <Button
            onClick={onConfirmDelete}
            color="error"
            variant="contained"
          >
            Eliminar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
