import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DigitalCourtroom from './components/DigitalCourtroom';
import LawyerDashboard from './components/LawyerDashboard';
import UserDashboard from './components/UserDashboard';
import Login from './components/Login';
import Signup from './components/SignUp';
import DetailedAnalysis from './components/DetailedAnalysis';

function App() {
  const [activeTab, setActiveTab] = useState('courtroom');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
          isLoggedIn ? (
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
              <main className="flex-1 ml-64">
                {activeTab === 'courtroom' && <DigitalCourtroom />}
                {activeTab === 'lawyer' && <LawyerDashboard />}
                {activeTab === 'user' && <UserDashboard />}
              </main>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/detailed-analysis/:docId" element={<DetailedAnalysis />} />
        <Route path="/" element={
          isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;