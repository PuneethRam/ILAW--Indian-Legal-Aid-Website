import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Save credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'true'); // Set login flag
    // Redirect to home page
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-colors">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">New user? <Link to="/signup" className="text-blue-500 hover:underline">Signup here</Link></p>
      </div>
    </div>
  );
};

export default Login;