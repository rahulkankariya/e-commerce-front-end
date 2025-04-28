import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Dashboard/SideBar/Sidebar';
import ProductGrid from './components/Products/ProductGrid';
import ProductDetails from './components/Products/ProductDetails/ProductDetails'
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Refs for the sidebar and hamburger button
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close sidebar if clicked outside of sidebar or button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && 
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="flex h-screen relative">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed md:static z-50 h-full w-64 bg-gray-900 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 overflow-y-auto p-4 w-full">
          {/* Hamburger Menu (visible only on mobile) */}
          <button
            ref={buttonRef}
            className="md:hidden mb-4 text-gray-800"
            onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle sidebar state
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Routes */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product-grid" element={<ProductGrid />} />
            <Route path="/product-grid" element={<ProductGrid />} />
            <Route path="/product-details" element={<ProductDetails />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
