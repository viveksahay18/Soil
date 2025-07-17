import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function PostDistributor() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverNav, setHoverNav] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/post-distributor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, contact })
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        alert('❌ Server returned invalid response.');
        return;
      }

      if (res.ok) {
        alert('✅ Distributor data submitted successfully!');
        setName('');
        setLocation('');
        setContact('');
      } else {
        alert(`❌ Failed to submit distributor data: ${data.message || 'Unknown error'}`);
      }
    } catch (err) {
      alert('❌ Network/server error: ' + err.message);
    }
  };

  return (
    <div style={{ backgroundColor: 'green', minHeight: '100vh', textAlign: 'center' }}>

      {/* ✅ NAVBAR WITHOUT LOGOUT */}
      <div style={{
        backgroundColor: 'darkgreen',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px'
      }}>
        <span
          style={{
            ...navLinkStyle,
            color: hoverNav === 'dashboard' ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverNav('dashboard')}
          onMouseLeave={() => setHoverNav(null)}
          onClick={() => navigate('/admin/dashboard')}
        >
          Dashboard
        </span>
        <Link
          to="/admin/post-distributor"
          style={{
            ...navLinkStyle,
            color: hoverNav === 'post' ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverNav('post')}
          onMouseLeave={() => setHoverNav(null)}
        >
          Post Distributor Details
        </Link>
      </div>

      {/* ✅ FORM */}
      <div style={{ paddingTop: '50px' }}>
        <h2 style={{ color: 'white' }}>Post Distributor Details</h2>

        <div style={formRow}>
          <label style={labelStyle}>Name:</label>
          <input
            placeholder="Distributor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Location:</label>
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Contact Info:</label>
          <input
            placeholder="Contact Info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
          Submit
        </button>
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
  width: '120px',
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
