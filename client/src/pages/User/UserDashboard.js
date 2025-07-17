import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserDashboard() {
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

  const logout = () => {
    alert('🚪 Logged out');
    navigate('/user/login');
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
          to="/user/view-soil"
          style={navLinkStyle('soil')}
          onMouseEnter={() => setHoverNav('soil')}
          onMouseLeave={() => setHoverNav(null)}
        >
          View Soil Details
        </Link>
        <Link
          to="/user/view-distributor"
          style={navLinkStyle('dist')}
          onMouseEnter={() => setHoverNav('dist')}
          onMouseLeave={() => setHoverNav(null)}
        >
          View Distributor Details
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
        <h2 style={{ color: 'white' }}>Welcome to User Dashboard</h2>

        <button
          style={buttonStyle('soil')}
          onClick={() => navigate('/user/view-soil')}
          onMouseEnter={() => setHoverBtn('soil')}
          onMouseLeave={() => setHoverBtn(null)}
        >
          View Soil Details
        </button>
        <br />

        <button
          style={buttonStyle('dist')}
          onClick={() => navigate('/user/view-distributor')}
          onMouseEnter={() => setHoverBtn('dist')}
          onMouseLeave={() => setHoverBtn(null)}
        >
          View Distributor Details
        </button>
      </div>
    </div>
  );
}
