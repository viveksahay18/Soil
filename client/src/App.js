import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import UserLogin from './pages/User/UserLogin';
import UserRegister from './pages/User/UserRegister';
import UserDashboard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PostSoil from './pages/Admin/PostSoil';
import PostDistributor from './pages/Admin/PostDistributor';
import ViewSoil from './pages/User/ViewSoil';
import ViewDistributor from './pages/User/ViewDistributor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />                             {/* 👈 Home.js route */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/post-soil" element={<PostSoil />} />
        <Route path="/admin/post-distributor" element={<PostDistributor />} />
        <Route path="/user/login" element={<UserLogin />} />

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/view-soil" element={<ViewSoil />} />
        <Route path="/user/view-distributor" element={<ViewDistributor />} />
      </Routes>
    </Router>
  );
}

export default App;
