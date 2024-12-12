import { create } from 'zustand';

export const useCustomerStore = create((set) => ({
  customers: [],
  fetchCustomers: async () => {
    try {
      const response = await fetch('https://shopitomall-server.onrender.com/users');
      const data = await response.json();
      const sortedData = data.users.sort((a, b) => b.id - a.id); // Sort users by id in descending order
      set({ customers: sortedData });
    } catch (error) {
      console.error('Failed to fetch customers:', error);
    }
  },
}));
