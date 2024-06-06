import React from "react";
import AllOrders from "./AllOrders";
import TrackOrders from "./trackOrders.jsx";

const OrdersTab = ({ currentTab }) => {
  return <>{currentTab == "Track orders" ? <TrackOrders /> : <AllOrders />}</>;
};

export default OrdersTab;
