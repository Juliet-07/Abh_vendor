import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";

const DashboardRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
};

export default DashboardRoute;
