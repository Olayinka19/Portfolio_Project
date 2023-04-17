import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
function EmailSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // TODO: Implement email submission logic here
    if (email) {
        window.alert("Thanks for submitting")
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
    {/* <Form.Label>First name</Form.Label> */}
          <Form.Control
            required
            type="email"
            placeholder="Email"
            defaultValue="Mark"
         value={email} onChange={handleChange}
          />
      
    </Form>
  );
}

export default EmailSubscription;