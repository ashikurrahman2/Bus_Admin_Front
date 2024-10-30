import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage (if applicable)
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="w-64 h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white fixed shadow-lg">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">Admin Panel</h2>
      <nav className="p-4">
        <ul>
          <li className="p-2 my-2 rounded hover:bg-orange-500 transition-colors duration-200">
            <Link to="/dashboard" className="block">Dashboard</Link>
          </li>
          <li className="p-2 my-2 rounded hover:bg-orange-500 transition-colors duration-200">
            <Link to="/schedule" className="block">Bus Schedule</Link>
          </li>
          <li className="p-2 my-2 rounded hover:bg-orange-500 transition-colors duration-200">
            <Link to="/teacher" className="block">Teachers</Link>
          </li>
          <li className="p-2 my-2 rounded hover:bg-orange-500 transition-colors duration-200">
            <Link to="/student" className="block">Students</Link>
          </li>

          <li className="p-2 my-2 rounded hover:bg-red-500 transition-colors duration-200">
            <button onClick={handleLogout} className="block w-full text-left">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
