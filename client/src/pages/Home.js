import React, { useState } from 'react';

export default function Home() {
  const [hoverButton, setHoverButton] = useState(null);
  const [hoverLink, setHoverLink] = useState(null);

  const btnStyle = (id) => ({
    backgroundColor: hoverButton === id ? '#006400' : 'white',
    color: hoverButton === id ? 'white' : 'green',
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  const linkStyle = (id) => ({
    color: hoverLink === id ? '#90ee90' : 'white',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  });

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'green', color: 'white', minHeight: '100vh', padding: '50px' }}>
      <h1>Welcome to Soil Framing Agent</h1>
      <p>Designed by VIVEK SAHAY</p>

      {/* Admin & User Buttons */}
      <div style={{ marginTop: '30px' }}>
        <a href="/admin/login" rel="noopener noreferrer">
          <button
            style={btnStyle('admin')}
            onMouseEnter={() => setHoverButton('admin')}
            onMouseLeave={() => setHoverButton(null)}
          >
            Admin
          </button>
        </a>
        <a href="/user/register" rel="noopener noreferrer">
          <button
            style={btnStyle('user')}
            onMouseEnter={() => setHoverButton('user')}
            onMouseLeave={() => setHoverButton(null)}
          >
            User
          </button>
        </a>
      </div>

      {/* Important Links */}
      <section style={{ marginTop: '40px' }}>
        <h2>Important Links</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            { name: "Agriculture", url: "https://dbtagriculture.bihar.gov.in/" },
            { name: "DAFW", url: "https://agricoop.gov.in/" },
            { name: "Department of Agriculture", url: "https://rajkisan.rajasthan.gov.in/" },
            { name: "BigHaat", url: "https://www.bighaat.com" },
            { name: "साथी", url: "https://seedtrace.gov.in/ms014/" },
            { name: "AgriBegri", url: "https://agribegri.com/" },
            { name: "ICAR", url: "https://icar.org.in" }
          ].map((link, idx) => (
            <li key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle(link.name)}
                onMouseEnter={() => setHoverLink(link.name)}
                onMouseLeave={() => setHoverLink(null)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '50px' }}>
        <p>Follow us on:</p>
        {["LinkedIn", "Facebook", "Instagram"].map((social, i) => (
          <span key={i}>
            <a
              href={
                social === "LinkedIn"
                  ? "https://in.linkedin.com/"
                  : social === "Facebook"
                  ? "https://facebook.com"
                  : "https://instagram.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(social)}
              onMouseEnter={() => setHoverLink(social)}
              onMouseLeave={() => setHoverLink(null)}
            >
              {social}
            </a>
            {i !== 2 && " | "}
          </span>
        ))}
      </footer>
    </div>
  );
}
