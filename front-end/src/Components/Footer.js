import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="#" style={{ margin: '0 10px' }}>Facebook
        <i className="fab fa-facebook-square" style={{ fontSize: '24px' }} />
      </a>
      <a href="#" style={{ margin: '0 10px' }}>Twitter
        <i className="fab fa-twitter-square" style={{ fontSize: '24px' }} />
      </a>
      <a href="#" style={{ margin: '0 10px' }}>Instagram
        <i className="fab fa-instagram" style={{ fontSize: '24px' }} />
      </a>
      <a href="#" style={{ margin: '0 10px' }}>Linkedin
        <i className="fab fa-linkedin" style={{ fontSize: '24px' }} />
      </a>
    </div>
    <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '20px' }}>
      &copy; {new Date().getFullYear()} My Website | All rights reserved
    </p>
  </footer>
);

export default Footer;



