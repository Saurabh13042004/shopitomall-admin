import React from 'react';
import { CustomerTable } from '../components/CustomerTable';

export function CustomersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Customer Management</h1>
      <CustomerTable />
    </div>
  );
}