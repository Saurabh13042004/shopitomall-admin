import React, { useEffect } from 'react';
import { useCustomerStore } from '../store/useCustomerStore';
import { formatDate } from '../utils/dateUtils';
import { Mail } from 'lucide-react';

export function ResponseTable() {
  const { customers, fetchCustomers } = useCustomerStore();

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{customer.email}</div>
                <div>{customer.phone}</div>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">{customer.country}</td> */}
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(customer.submit_time)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEmail(customer.email)}
                  className="p-2 text-indigo-600 hover:text-indigo-900"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
