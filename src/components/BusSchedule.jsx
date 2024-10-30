// BusSchedule.js
import React from "react";
import Sidebar from "./Sidebar";

const BusSchedule = () => {
    const scheduleData = [
        { busNumber: "101", upTime: "08:00 AM", downTime: "06:00 PM", location: "Shibbari", driver: "John Doe" },
        { busNumber: "102", upTime: "09:00 AM", downTime: "05:00 PM", location: "Shimultoly", driver: "Jane Doe" },
      ];
    
      return (
        <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <div className="ml-64 p-8 w-full">
            <header className="mb-8 flex justify-between items-center">
              <h1 className="text-4xl font-semibold text-gray-800">Bus Schedule Dashboard</h1>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Add New Schedule
              </button>
            </header>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-6">
              <table className="w-full text-left">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4">Bus Number</th>
                    <th className="p-4">Up Time</th>
                    <th className="p-4">Down Time</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Driver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scheduleData.map((schedule, index) => (
                    <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                      <td className="p-4 text-center font-medium text-gray-700">{schedule.busNumber}</td>
                      <td className="p-4 text-center text-gray-600">{schedule.upTime}</td>
                      <td className="p-4 text-center text-gray-600">{schedule.downTime}</td>
                      <td className="p-4 text-center text-gray-600">{schedule.location}</td>
                      <td className="p-4 text-center text-gray-600">{schedule.driver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };

export default BusSchedule;
