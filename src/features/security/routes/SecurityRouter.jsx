import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../../components/Layout";


function SecurityRouter() {
  return <Layout>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to={"/login"} />} />
    </Routes>
  </Layout>;
}

export default SecurityRouter;
