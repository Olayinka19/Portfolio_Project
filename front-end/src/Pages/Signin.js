import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Alert from '@mui/material/Alert';
// import { GoogleButton } from 'react-google-button';
import GoogleButton from 'react-google-button'
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Animation from "../Components/Animation";


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
      navigate('/about');
    }
  }, [user]);

  return (
    <div className='p-2'>
            <div className="container">
  
    <div className="border border-dark">
      {/* <h1>Sign in</h1> */}
      <br></br>
      <Card className="container">
      <Card.Header as="h5"><div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
      </div></Card.Header>
      <Card.Body>
        <Card.Title>Shop smarter, Shop Ahead</Card.Title>
        {/* <Card.Text>
          Shop smart Shop Ahead
        </Card.Text> */}
        <Button variant="success"><GoogleButton onClick={handleGoogleSignIn} /></Button>
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
