// Import necessary modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  //  Login Logic
    console.log("User logged in with email:", email);
    navigate('/dashboard'); 
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Sending reset password email to:", email);
    setEmail("");
    setShowForgotPassword(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">
          {showForgotPassword ? "Forgot Password!" : "Admin Login"}
        </h1>
        {showForgotPassword ? (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label className="block text-gray-700">Enter your Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Send
            </button>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => setShowForgotPassword(false)}
            >
              Back to Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Login
            </button>
            <p className="mt-4 text-center">
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </p>
            <p className="mt-2 text-center">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => navigate('/signup')} 
              >
                Create an Account
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
