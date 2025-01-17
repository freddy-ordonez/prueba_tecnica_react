import { Box, Divider, Toolbar, Typography } from "@mui/material";

import { DashboardLayout } from "../layout/DashboardLayout";
import { FilterClient } from "../components/client/FilterClient";
import { ButtonConsultClient } from "../components/client/ButtonConsultClient";
import { TableDataClient } from "../components/client/TableDataClient";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../context/clients/ClientContext";

export const ConsultClientPage = () => {
  const { startGetClients, startGetInterest } = useContext(ClientContext);

  useEffect(() => {
    startGetClients({
      nombre: "",
      identificacion: "",
    });
    startGetInterest();
  }, []);

  return (
    <DashboardLayout>
      <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Toolbar />
 
        <Typography variant="h6" gutterBottom>
          Consulta de clientes
        </Typography>

        <FilterClient />

        <Divider sx={{my: 3}}/>
        
        <ButtonConsultClient />

        <Divider sx={{ my: 3 }} />

        <TableDataClient />
      </Box>
    </DashboardLayout>
  );
};
