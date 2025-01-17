import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme";
import { AuthContexProvider } from "./context/auth/AuthContexProvider";
import { ClientContexProvider } from "./context/clients/ClientContexProvider";

export const ClientApp = () => {
  return (
    <AuthContexProvider>
      <ClientContexProvider>
        <AppTheme>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AppTheme>
      </ClientContexProvider>
    </AuthContexProvider>
  );
};
