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

  useEffect(() => {
    if (user !== null) {
      navigate('/about');
    }
  }, [user]);

  return (
    <div className='p-2'>
            <div className="container">
  
    <div className="border border-dark">
      {/* <h1>Sign in</h1> */}
  <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-vector/detailed-esports-gaming-logo_79603-1792.jpg?w=1380&t=st=1681628574~exp=1681629174~hmac=5c36fd3f3bb178c8348c56cb3986c1fbd94a61593011a840f028df138ca45b97" /></Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
      
      </div>
      <Button variant="contained"><GoogleButton onClick={handleGoogleSignIn} /></Button>
      {/* <p className="pro" > <Badge bg="secondary"><h3></h3></Badge></p> */}
        </Grid>

      </Grid>
    </Box>

    </div>
    </div>
    </div>
  );
};

export default Signin;
