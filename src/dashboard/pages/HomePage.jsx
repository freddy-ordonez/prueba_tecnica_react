import React from "react";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Box, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <DashboardLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Typography variant="h2" color="primary">
          Bienvenido
        </Typography>
      </Box>
    </DashboardLayout>
  );
};
