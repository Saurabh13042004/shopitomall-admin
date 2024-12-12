import React from 'react';
import { useCustomerStore } from '../store/useCustomerStore';
import { Mail, MessageCircle } from 'lucide-react';

export function CustomerTable() {
  const { customers, updateCustomerStatus } = useCustomerStore();

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {customer.fullName}
                </div>
                <div className="text-sm text-gray-500">{customer.country}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{customer.email}</div>
                <div className="text-sm text-gray-500">
                  {customer.phoneNumber}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={customer.status}
                  onChange={(e) =>
                    updateCustomerStatus(
                      customer.id,
                      e.target.value as typeof customer.status
                    )
                  }
                  className="text-sm rounded-full px-3 py-1 font-semibold"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="resolved">Resolved</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleEmail(customer.email)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  <Mail className="w-5 h-5" />
                </button>
                <button className="text-indigo-600 hover:text-indigo-900">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}