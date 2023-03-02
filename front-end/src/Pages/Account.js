import React from 'react';
import { Form } from 'react-bootstrap/';
import { Col , Button} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import Card from 'react-bootstrap/Card';

export default function Account({ handleTextChange, handleNumberChange }) {
    const {user } = UserAuth();
    return (
        <div className='p-2'>
           
           {/* <div>
        <p>Welcome, {user?.displayName}</p>
        <h3>{user?.email}</h3>
        <div>
          <img src={user?.photoURL} />
        </div> */}
      {/* </div> */}
      <Card>
      <Card.Header as="h5">Account Information</Card.Header>
      <Card.Body>
        <Card.Title>Welcome, {user?.displayName}</Card.Title>
        <Card.Text>
        {user?.email}.
        </Card.Text>
        <Card.Text><img width="90px" height="80px" border-radius="22px" src={user?.photoURL} /></Card.Text>
        {/* <Button variant="primary"><GoogleButton onClick={handleGoogleSignIn} /></Button> */}
      </Card.Body>
    </Card>
        </div>

    )
}