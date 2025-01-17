import React, { useContext, useState } from "react";
import { ClientContext } from "../../../context/clients/ClientContext";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ModalClient } from "./ModalClient";

export const TableDataClient = () => {
  const { clients, startDeleteClient, setSelectedClient } = useContext(ClientContext);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [idItemDelete, setIdItemDelete] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reinicia a la primera página
  };

  const displayedClients = clients.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const onUpdate = (id)=> {
    setSelectedClient(id);
    navigate('/clientes/mantenimiento')
  }

  const onOpen = (id)=> {
    setOpen(true);
    setIdItemDelete(id);
  }

  const onClose = ()=> {
    setOpen(false);
  }

  const onConfirmDelete = ()=> {
    startDeleteClient(idItemDelete)
    setOpen(false);
}

  return (
    <TableContainer component={Paper} color="main">
      <ModalClient open={open} onClose={onClose} onConfirmDelete={onConfirmDelete}/>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#E0E0E0" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Identificación</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Nombre completo</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedClients?.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.identificacion}</TableCell>
              <TableCell>
                {client.nombre} {client.apellidos}
              </TableCell>
              <TableCell>
                <IconButton color="secondary" onClick={()=> onUpdate(client.id)}>
                  <Edit />
                </IconButton>
                <IconButton color="primary" onClick={()=> onOpen(client.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={clients.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página:"
      />
    </TableContainer>
  );
};
