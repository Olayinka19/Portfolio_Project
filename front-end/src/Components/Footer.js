import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><img width="35px" height="35px" src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png"></img>
        <i className="fab fa-facebook-square" style={{ fontSize: '24px' }} />
      </a>
      <a href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><img width="35px" height="35px" src="https://cdn-icons-png.flaticon.com/512/2504/2504947.png"></img>
        <i className="fab fa-twitter-square" style={{ fontSize: '24px' }} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><img width="35px" height="35px"  src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"></img>
        <i className="fab fa-instagram" style={{ fontSize: '24px' }} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><img width="35px" height="35px"  src="https://cdn-icons-png.flaticon.com/512/174/174857.png?w=1380&t=st=1675449932~exp=1675450532~hmac=e99e636cce58f116999b10c6f776d9c89d1317339e7f10acc64ec58fe9350a93"></img>
        <i className="fab fa-linkedin" style={{ fontSize: '24px' }} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><img width="35px" height="35px"  src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png"></img>
        <i className="fab fa-linkedin" style={{ fontSize: '24px' }} />
      </a>
   
    </div>
    <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '20px' }}>
      &copy; {new Date().getFullYear()} Ahead Shopping | All rights reserved
    </p>
  </footer>
);

export default Footer;



