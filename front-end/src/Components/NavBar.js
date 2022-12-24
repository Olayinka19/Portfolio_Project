import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import homee from "../images/homee.png";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


export default function NavBar() {
  // const imgUrl4 = homee;

  return (
    // <header>
  <Navbar bg="light" expand="lg" >
    <Container>
   
    
      
    {/* <div class="Nav"> */}
      <Link to="/" className="Link">
        Home
      </Link>
     
        <Link to="/products" className="Link">
          Explore
        </Link>
     
        <Link to="/about" className="Link">
          About </Link>

      <Link to="/products/new" className="Link">
       Create
      </Link>

<Link to="c/community"> Community</Link>




      <Link to="/FlexConnect" className="Link">
        Wallet
      </Link>
      
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">🔍</Button>
          </Form>
    </Container>
    </Navbar>
    // </header>
  );
}
