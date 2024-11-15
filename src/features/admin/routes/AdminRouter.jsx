import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import CatalogoCuentasPage from "../pages/CatalogoCuentasPage";
import PartidasContablesPage from "../pages/PartidasContablesPage";


function AdminRouter() {
  return <Layout>
    <Routes>
      <Route path='/catalogo' element={<CatalogoCuentasPage />} />
      <Route path='/partidas' element={<PartidasContablesPage />} />
      <Route path='/*' element={<Navigate to={"/admin/catalogo"} />} />
    </Routes>
  </Layout>;
}

export default AdminRouter;
