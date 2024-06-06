import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";
import Profile from "./pages/profile";
import Notifications from "./pages/notifications";
import Settings from "./pages/settings";
import AllOrders from "./pages/Orders/allOrders";
import TrackOrders from "./pages/Orders/trackOrders";
import OrderDetails from "./pages/Orders/orderDetails";

const DashboardRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/trackOrders" element={<TrackOrders />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
      </Layout>
    </>
  );
};

export default DashboardRoute;
