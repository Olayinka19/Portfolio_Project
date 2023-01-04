import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "react-bootstrap/";

export default function NavBar() {


  return (
    // <header>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant ="dark"  className="Nav">
    <Container>
      <Navbar.Brand>
        {/* <Link to="/">Logo</Link> */}
        <Link to="/" className="Link">
        Logo
      </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
    
        <Nav.Link href="/products" className="Link">
          Explore
        </Nav.Link>
        
        <Nav.Link to="/about" className="Link">
          About
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
  
       
     
        

      <Link to="/products/new" className="Link">
       Create
      </Link>

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
