import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [hoverBtn, setHoverBtn] = useState(null);
  const [hoverNav, setHoverNav] = useState(null);

  const buttonStyle = (id) => ({
    backgroundColor: hoverBtn === id ? '#006400' : 'white',
    color: hoverBtn === id ? 'white' : 'green',
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  });

  const navLinkStyle = (id) => ({
    color: hoverNav === id ? '#90ee90' : 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    cursor: 'pointer'
  });

  // ✅ Logout redirects to home page
  const logout = () => {
    alert('🚪 Logged out');
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: 'green', minHeight: '100vh', textAlign: 'center' }}>
      
      {/* ✅ NAVBAR */}
      <div style={{
        backgroundColor: 'darkgreen',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px'
      }}>
        <Link
          to="/admin/post-soil"
          style={navLinkStyle('soil')}
          onMouseEnter={() => setHoverNav('soil')}
          onMouseLeave={() => setHoverNav(null)}
        >
          Post Soil Details
        </Link>
        <Link
          to="/admin/post-distributor"
          style={navLinkStyle('dist')}
          onMouseEnter={() => setHoverNav('dist')}
          onMouseLeave={() => setHoverNav(null)}
        >
          Post Distributor Details
        </Link>
        <span
          style={navLinkStyle('logout')}
          onClick={logout}
          onMouseEnter={() => setHoverNav('logout')}
          onMouseLeave={() => setHoverNav(null)}
        >
          Logout
        </span>
      </div>

      {/* ✅ DASHBOARD CONTENT */}
      <div style={{ paddingTop: '60px' }}>
        <h2 style={{ color: 'white' }}>Welcome to Admin Dashboard</h2>

        <button
          style={buttonStyle('soil')}
          onClick={() => navigate('/admin/post-soil')}
          onMouseEnter={() => setHoverBtn('soil')}
          onMouseLeave={() => setHoverBtn(null)}
        >
          Post Soil Details
        </button>
        <br />

        <button
          style={buttonStyle('dist')}
          onClick={() => navigate('/admin/post-distributor')}
          onMouseEnter={() => setHoverBtn('dist')}
          onMouseLeave={() => setHoverBtn(null)}
        >
          Post Distributor Details
        </button>
      </div>
    </div>
  );
}
