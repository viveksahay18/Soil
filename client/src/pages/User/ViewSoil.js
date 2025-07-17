import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ViewSoil() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [hoverNav, setHoverNav] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/soil')
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        console.error('Failed to fetch soil data:', err);
        alert('❌ Could not load soil data.');
      });
  }, []);

  const filtered = data.filter(soil =>
    soil.type?.toLowerCase().includes(query.toLowerCase())
  );

  const navLinkStyle = (id) => ({
    color: hoverNav === id ? '#90ee90' : 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    cursor: 'pointer'
  });

  const logout = () => {
    navigate('/user/dashboard');
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
          Soil Details
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

      {/* ✅ PAGE CONTENT */}
      <div style={{ paddingTop: '40px' }}>
        <h2 style={{ color: 'white' }}>Soil Details</h2>

        <input
          placeholder="Search by soil type..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            textAlign: 'center'
          }}
        /><br /><br />

        <ul style={{ listStyle: 'none', padding: 0, color: 'white' }}>
          {filtered.map((soil, index) => (
            <li key={index} style={{
              margin: '10px 0',
              backgroundColor: '#006400',
              padding: '10px',
              borderRadius: '6px',
              width: '60%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <strong>Type:</strong> {soil.type} | <strong>Location:</strong> {soil.location} | <strong>Nutrients:</strong> {soil.nutrients}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
