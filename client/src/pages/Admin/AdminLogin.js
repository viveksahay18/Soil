import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAdmin, setHoverAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert('✅ Admin logged in successfully');
      navigate('/admin/dashboard');
    } else {
      alert('❌ Invalid admin credentials');
    }
  };

  return (
    <div style={{ backgroundColor: 'green', minHeight: '100vh', textAlign: 'center', paddingTop: '20px' }}>
      
      {/* ✅ NAVBAR */}
      <div style={{
        backgroundColor: 'darkgreen',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px'
      }}>
        <Link
          to="/"
          style={{
            ...navLinkStyle,
            color: hoverHome ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}
        >
          Home
        </Link>
        <Link
          to="/admin"
          style={{
            ...navLinkStyle,
            color: hoverAdmin ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverAdmin(true)}
          onMouseLeave={() => setHoverAdmin(false)}
        >
          Admin Login
        </Link>
      </div>

      {/* ✅ FORM */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ color: 'white' }}>Admin Login</h2>

        <div style={formRow}>
          <label style={labelStyle}>Username:</label>
          <input
            style={inputStyle}
            placeholder="Enter username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Password:</label>
          <input
            style={inputStyle}
            type="password"
            placeholder="Enter password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <br />
        <button
          style={{
            ...btnStyle,
            backgroundColor: hoverBtn ? '#006400' : 'white',
            color: hoverBtn ? 'white' : 'green'
          }}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

// ✅ STYLES
const navLinkStyle = {
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s'
};

const formRow = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '15px'
};

const labelStyle = {
  width: '100px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'right'
};

const inputStyle = {
  padding: '8px',
  width: '200px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const btnStyle = {
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.3s ease'
};
