import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PostSoil() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ type: '', location: '', nutrients: '' });
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverNav, setHoverNav] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/post-soil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (err) {
        alert('❌ Server error: Response was not valid JSON.\n' + text);
        return;
      }

      if (res.ok) {
        alert('✅ Soil data submitted successfully!');
        setForm({ type: '', location: '', nutrients: '' });
      } else {
        alert(`❌ Failed to submit soil data: ${data.message || 'Unknown error'}`);
      }
    } catch (err) {
      alert('❌ Network/server error: ' + err.message);
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
          to="/admin/post-soil"
          style={{
            ...navLinkStyle,
            color: hoverNav === 'soil' ? '#90ee90' : 'white'
          }}
          onMouseEnter={() => setHoverNav('soil')}
          onMouseLeave={() => setHoverNav(null)}
        >
          Post Soil Details
        </Link>

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

        
      </div>

      {/* ✅ FORM */}
      <div style={{ paddingTop: '50px' }}>
        <h2 style={{ color: 'white' }}>Post Soil Details</h2>

        <div style={formRow}>
          <label style={labelStyle}>Soil Type:</label>
          <input
            placeholder="Soil Type"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Location:</label>
          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Nutrient Info:</label>
          <input
            placeholder="Nutrient Info"
            value={form.nutrients}
            onChange={(e) => setForm({ ...form, nutrients: e.target.value })}
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

// ✅ Inline Styles
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
