import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { Admin } from '../Admin';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Allow Admin to handle sub-routes */}
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
