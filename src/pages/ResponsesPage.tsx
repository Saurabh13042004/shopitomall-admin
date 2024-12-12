import React from 'react';
import { ResponseTable } from '../components/ResponseTable';

export function ResponsesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Form Responses</h1>
      <ResponseTable />
    </div>
  );
}