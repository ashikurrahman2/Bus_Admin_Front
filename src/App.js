import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BusSchedule from "./components/BusSchedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the default route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Changed route for Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/schedule" element={<BusSchedule />} />
      </Routes>
    </Router>
  );
}

export default App;
