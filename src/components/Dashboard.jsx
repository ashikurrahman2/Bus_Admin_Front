import React from 'react';
import Sidebar from './Sidebar'; 

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Card for Bus Count */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Bus Schedule Added</h2>
            <p className="text-4xl text-blue-600 font-bold mt-4">20</p>
          </div>

          {/* Card for Student Count */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Students Added</h2>
            <p className="text-4xl text-green-600 font-bold mt-4">100</p>
          </div>

          {/* Card for Teacher Count */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Teachers Added</h2>
            <p className="text-4xl text-purple-600 font-bold mt-4">10</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
