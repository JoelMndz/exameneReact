import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRouter from "../features/admin/routes/AdminRouter";
import SecurityRouter from "../features/security/routes/SecurityRouter";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<SecurityRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        {/* <Route path="/*" element={<BlogRouter />} /> */}
    </Routes>
  )
}
