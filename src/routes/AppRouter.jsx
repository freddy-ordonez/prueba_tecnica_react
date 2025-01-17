import React, { useContext } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";

import { DashboardRouter } from "../dashboard/routes/DashboardRouter";
import { AuthContext } from "../context/auth/AuthContext";


export const AppRouter = () => {
  const { status } = useContext(AuthContext);
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<DashboardRouter />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
