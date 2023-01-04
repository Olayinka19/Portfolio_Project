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
  <Navbar collapseOnSelect expand="lg" bg="light" variant ="dark" >
    <Container>
      <Navbar.Brand>
        {/* <Link to="/">Logo</Link> */}
        <Link to="/" className="Link">
        Logo
      </Link>
      </Navbar.Brand>
     
        <Link to="/products" className="Link">
          Explore
        </Link>
     
        <Link to="/about" className="Link">
          About </Link>

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
