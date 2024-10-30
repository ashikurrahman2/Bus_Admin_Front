// components/Signup.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // এখানে সাইনআপ লজিক যুক্ত করুন
    navigate("/login"); // সাইনআপ সফল হলে লগইন পেজে রিডিরেক্ট
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
