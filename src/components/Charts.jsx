import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

export const OrderStatusChart = () => {
  const data = [
    { name: "Delivered", value: 400, color: "#0088FE" },
    { name: "Returns (3)", value: 50, color: "#DFE30F" },
    { name: "Ready to ship (3)", value: 300, color: "#E38E0F" },
    { name: "Shipped", value: 150, color: "#9747FF" },
    { name: "Pending (3)", value: 100, color: "#E3140F" },
    { name: "Processing (30)", value: 300, color: "#7BB8FF" },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          // isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          // outerRadius={80}
          // label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const RevenueChart = () => {
  const data = [
    { name: "Jan", uv: 400, amt: 140 },
    { name: "Feb", uv: 300, amt: 220 },
    { name: "Mar", uv: 200, amt: 220 },
    { name: "Apr", uv: 278, amt: 200 },
    { name: "May", uv: 189, amt: 210 },
    { name: "Jun", uv: 239, amt: 250 },
    { name: "Jul", uv: 349, amt: 210 },
  ];
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#F58634" fill="#F5863414" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const TotalOrdersChart = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 0, amt: 2000 },
    { name: "May", uv: 1890, pv: 0, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#359E52" />
      </BarChart>
    </ResponsiveContainer>
  );
};
