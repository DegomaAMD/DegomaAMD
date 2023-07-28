import React from 'react';
import "../new components/Dashboard.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "2020", Sales: 500, },
    { name: "2021", Sales: 300 },
    { name: "2022", Sales: 200 },
    { name: "2023", Sales: 200 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Company Performance</h3>
      <h4>Sales: 2020-2023</h4>
      <div className="Dashboard">
        <BarChart
          width={550}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30, 
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Sales" fill="#ff914d" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;