import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './components/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { ResponsesPage } from './pages/ResponsesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="responses" element={<ResponsesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;