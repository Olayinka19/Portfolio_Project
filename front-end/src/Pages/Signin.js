import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Alert from '@mui/material/Alert';
// import { GoogleButton } from 'react-google-button';
import GoogleButton from 'react-google-button'
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div className='p-2'>
            <div className="container">
  
    <div lassName="border border-dark">
      {/* <h1>Sign in</h1> */}
      <br></br>
      <Card>
      <Card.Header as="h5">Sign In</Card.Header>
      <Card.Body>
        <Card.Title>Create an Account </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary"><GoogleButton onClick={handleGoogleSignIn} /></Button>
      </Card.Body>
    </Card>
      <div className='signin'>
        
      </div>
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </div>
    </div>
    </div>
  );
};

export default Signin;
