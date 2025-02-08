import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Admin.scss';
import { SidebarDash } from './components/dashboardComponents/SidebarDash/SidebarDash';
import { DashNavbar } from './components/dashboardComponents/dashNavbar/DashNavbar';
import { Dashboard } from './pages/dashboardPage/dashboard/Dashboard';
import { Orders } from './pages/dashboardPage/orders/Orders';
import { Shipments } from './pages/dashboardPage/shipments/Shipments';
import { Tracking } from './pages/dashboardPage/tracking/Tracking';
import { Returns } from './pages/dashboardPage/returns/Returns';
import { Account } from './pages/dashboardPage/settings/account/Account';
import { Plans } from './pages/dashboardPage/settings/plans/Plans';

export const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar when a link is clicked (only on mobile)
  const handleSidebarLinkClick = () => {
    if (window.innerWidth < 1120) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1120) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <DashNavbar onToggleSidebar={toggleSidebar} />
      <div className="admin-container">
        <SidebarDash isSidebarOpen={isSidebarOpen} onLinkClick={handleSidebarLinkClick} />
        <div className={`admin-content ${isSidebarOpen ? '' : 'full-width'}`}>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="shipments" element={<Shipments />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="returns" element={<Returns />} />
            <Route path="account" element={<Account />} />
            <Route path="plans" element={<Plans />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
