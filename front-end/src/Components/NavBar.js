import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import homee from "../images/homee.png";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import home12 from "../images/home12.png";
// import home13 from "../images/home13.png";

export default function NavBar() {
  const imgUrl4 = homee;
  // const imgUrl5 = home12;
  // const imgUrl6 = home13;
  return (
    // <header>
  <Navbar bg="light" expand="lg" >
    <Container>
    {/* <Navbar.Brand href="#">Page</Navbar.Brand> */}
    {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
    
      
    {/* <div class="Nav"> */}
      <Link to="/" className="Link">
        <img className="homee" src={imgUrl4} alt="loggo"></img>
      </Link>
      <h1>
        <Link to="/products" className="Link">
          NFTs
        </Link>
      </h1>

      <Link to="/products/new" className="Link">
        NewNFt
      </Link>

    <Breadcrumb>
    <Breadcrumb.Item href="https://discord.com/channels/995129548876296213/1004797057057444005" alt="discord">Discord</Breadcrumb.Item>
    
    </Breadcrumb>


      <Link to="/FlexConnect" className="Link">
        Wallet
      </Link>

      <Link to="/About" className="Link">
        AboutMe
      </Link>
    {/* </div> */}
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Container>
    </Navbar>
    // </header>
  );
}
