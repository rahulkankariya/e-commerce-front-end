// Dashboard.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';


const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 h-full w-64 bg-gray-900 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 overflow-y-auto p-4 w-full">
        {/* Hamburger Button - visible only on mobile */}
        <button
          className="md:hidden mb-4 text-gray-800"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-[#2b3d5f] mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md">Stat 1</div>
          <div className="bg-white p-6 rounded-xl shadow-md">Stat 2</div>
          <div className="bg-white p-6 rounded-xl shadow-md">Stat 3</div>
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
