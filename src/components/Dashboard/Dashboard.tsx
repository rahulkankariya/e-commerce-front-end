import React, { useState } from "react";
import Sidebar from "../Dashboard/SideBar/Sidebar";
import { Menu } from "lucide-react";
import StatCard from "./StatsCards";
import CustomerChart from "./Charts/CustomerCharts";
import SalesChart from "./Charts/SalesChart";
import OrderChart from "./Charts/OrderChart";
import TabFilter from './Tabs/Tabs'
import { Box, Tab, Tabs, Paper } from "@mui/material";
import {
  AttachMoney,
  CreditCard,
  InsertEmoticon,
  Store,
} from "@mui/icons-material";

const iconStyle = (bg: string) => ({
  background: bg,
  color: "white",
  width: "50px",
  height: "50px",
  padding: "10px",
  borderRadius: "10%",
  fontSize: "30px",
  borderColor: bg,
});

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chartTabIndex, setChartTabIndex] = useState(0);

  return (
    <div className="flex h-screen relative">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed md:static z-50 h-full w-64 bg-gray-900 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 bg-gray-100 overflow-y-auto p-4 w-full">
        <button
          className="md:hidden mb-4 text-gray-800"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-[#2b3d5f] mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-3">
          <StatCard
            title="Revenue"
            value={18295}
            icon={<AttachMoney style={iconStyle("green")} />}
            color="#D1E7DD"
            fontColor="#0A3622"
          />
          <StatCard
            title="Expense"
            value={11024}
            icon={<CreditCard style={iconStyle("#DC3545")} />}
            color="#F8D7DA"
            fontColor="#86151C"
          />
          <StatCard
            title="Happy Clients"
            value={8546}
            icon={<InsertEmoticon style={iconStyle("#FFC107")} />}
            color="#FFF3CD"
            fontColor="#664D03"
          />
          <StatCard
            title="New Store Open"
            value={1234}
            icon={<Store style={iconStyle("#FFC107")} />}
            color="#FFF3CD"
            fontColor="#664D03"
          />
        </div>

        <div className="mt-16 mb-3 bg-white drop-shadow-md rounded-xl">
          <Tabs value={chartTabIndex} onChange={(_, v) => setChartTabIndex(v)}>
            <Tab label="Customers" />
            <Tab label="Sales" />
            <Tab label="Orders" />
          </Tabs>

          <Box sx={{ flexGrow: 1, p: 4, overflow: "auto" }}>
            <Paper elevation={3} sx={{ p: 4, mx: "auto" }}>
              {chartTabIndex === 0 && <CustomerChart />}
              {chartTabIndex === 1 && <SalesChart />}
              {chartTabIndex === 2 && <OrderChart />}
            </Paper>
          </Box>
        </div>
        <div className="mt-1">

        <TabFilter/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
