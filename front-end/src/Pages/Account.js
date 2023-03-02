import React from 'react';
import { Form } from 'react-bootstrap/';
import { Col , Button} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';

export default function Account({ handleTextChange, handleNumberChange }) {
    const {user } = UserAuth();
    return (
        <div className='p-2'>
           
           <div>
        <p>Welcome, {user?.displayName}</p>
        <h3>{user?.email}</h3>
        <div>
          <img src={user?.photoURL} />
        </div>
      </div>
        </div>

    )
}