import React, { useEffect } from 'react';
import { useCustomerStore } from '../store/useCustomerStore';
import { Users, Clock } from 'lucide-react';

export function Dashboard() {
  const { customers, fetchCustomers } = useCustomerStore();

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const todayResponses = customers.filter((customer) => {
    const submitDate = new Date(customer.submit_time);
    const today = new Date();
    return submitDate.toDateString() === today.toDateString();
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Users className="w-12 h-12 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Total Responses</h2>
              <p className="text-2xl font-semibold text-gray-900">{customers.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Clock className="w-12 h-12 text-green-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Today's Responses</h2>
              <p className="text-2xl font-semibold text-gray-900">{todayResponses.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
