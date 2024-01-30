import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailSubscription from './EmailSubscription';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Footer = () => (

  
  <footer className='footer-container' style={{ color:'white' , backgroundColor: '#171515', padding: '25px'}}>

  
  <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
        <div></div>
          <h6> SUPPORT</h6>
          <p className="footer-p-tags">Live Chat</p>
          <p className="footer-p-tags">Tutorial & guides</p>
          <p className="footer-p-tags">Shipping Information</p>
          <p className="footer-p-tags">Support Contact</p>
          <p className="footer-p-tags">Terms of Use</p>
        </Grid>

        <Grid md={3}>
          <h6> COMPANY INFORMATION </h6>
          <p className="footer-p-tags">About Us</p>
          <p className="footer-p-tags">Team</p>
          <p className="footer-p-tags">Awards and Recognition</p>
          <p className="footer-p-tags">AheadShopping Blog</p>
          <p className="footer-p-tags">Careers</p>
          <p className="footer-p-tags">Partners</p>
        </Grid>

        <Grid md={3}>
          <h6> GENERAL INFORMATION</h6>
          <p className="footer-p-tags">Web Privacy Policy</p>
          <p className="footer-p-tags">Cookies settings</p>
          <p className="footer-p-tags">Recycling</p>
          <p className="footer-p-tags">Sitemap</p>
          <p className="footer-p-tags">Students Discount</p>
          <p className="footer-p-tags">Faq</p>
        </Grid>

        <Grid md={3}>
          <EmailSubscription/>
          <p><Checkbox {...label} /> Yes, I want to receive emails products, news and more from Aheadshopping.</p>
          <Button type="submit" variant="outlined">Subscribe</Button>
        </Grid>


      </Grid>
    </Box>
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



