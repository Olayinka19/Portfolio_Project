import React, { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Alert from '@mui/material/Alert';
// import { GoogleButton } from 'react-google-button';
import GoogleButton from 'react-google-button'
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Animation from "../Components/Animation";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Home from './Home';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  // { user ? <Home/> : <Signin/> }
 
  useEffect(() => {
    if (user !== null) {
      navigate('/');
      window.alert("Congratulations! You have successfully signed in✅")
    }
  }, [user]);

  return (
    <div >
           
      {/* <h1>Sign in</h1> */}
    <Grid md={3}>
    <h1></h1>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/premium-photo/excited-happy-woman-playing-videogames-console-while-celebrating-match-victory-happy-joyful-young-adult-person-enjoying-competitive-game-win-while-standing-blue-background_482257-43255.jpg" />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          </Item>
        </Grid>
  {/* <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-vector/detailed-esports-gaming-logo_79603-1792.jpg?w=1380&t=st=1681628574~exp=1681629174~hmac=5c36fd3f3bb178c8348c56cb3986c1fbd94a61593011a840f028df138ca45b97" /></Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
      
      </div>
      
      <p className="pro" > <Badge bg="secondary"><h3></h3></Badge></p>
        </Grid>

      </Grid>
    </Box> */}

  

    </div>
  );
};

export default Signin;
