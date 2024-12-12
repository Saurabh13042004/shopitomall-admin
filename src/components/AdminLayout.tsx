import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Users } from 'lucide-react';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link
            to="/admin/responses"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Users className="w-5 h-5 mr-2" />
            Form Responses
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}