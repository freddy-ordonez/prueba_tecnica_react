import { ErrorOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { DashboardLayout } from "../layout/DashboardLayout";

export const NotFoundPage = () => {
  return (
    <DashboardLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <ErrorOutline style={{ fontSize: 100, color: "#f44336" }} />
        <Typography variant="h4" color="textSecondary" gutterBottom>
          404 Oops...
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Page Not Found!
        </Typography>
      </Box>
    </DashboardLayout>
  );
};
