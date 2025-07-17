import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function UserRegister() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverNav, setHoverNav] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      alert('Please fill all fields');
      return;
    }

    const res = await fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert('✅ Registration successful');
      setForm({ name: '', email: '', password: '' });
      navigate('/user/login');
    } else {
      alert('❌ Registration failed');
    }
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
          to="/"
          style={{
            ...navLinkStyle,
            color: hoverNav === 'home' ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverNav('home')}
          onMouseLeave={() => setHoverNav(null)}
        >
          Home
        </Link>
        <Link
          to="/user/login"
          style={{
            ...navLinkStyle,
            color: hoverNav === 'login' ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverNav('login')}
          onMouseLeave={() => setHoverNav(null)}
        >
          User Login
        </Link>
      </div>

      {/* ✅ FORM */}
      <div style={{ paddingTop: '50px' }}>
        <h2 style={{ color: 'white' }}>User Registration</h2>

        <div style={formRow}>
          <label style={labelStyle}>Name:</label>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Email:</label>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={inputStyle}
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
          onClick={handleSubmit}
        >
          Register
        </button>

        <br /><br />
        <p>
          Already have an account?{' '}
          <Link to="/user/login" style={{ color: 'lightblue', textDecoration: 'underline' }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

// ✅ Styles
const navLinkStyle = {
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s',
  cursor: 'pointer'
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
  padding: '10px',
  width: '250px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  textAlign: 'center'
};

const btnStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.3s ease'
};
