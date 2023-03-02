import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Button from '@mui/material/Button';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { UserAuth } from "../Context/AuthContext";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Ahead from './Images/Ahead.png'



export default function NavBar() {


  const {user, logOut} = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch(err) {
      console.log(err);
    }
  }
  return (
    // <header>

    <>
            {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/"><img width="120px" height="50px" src={Ahead} alt="React Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="side" className="offCanavNav"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {user && user.displayName ? (
                      <div>
                        <img
                          style={{
                            marginRight: "20px",
                            borderRadius: "25px",
                            width: "45px",
                            height: "45px",
                          }}
                          alt="user-img"
                          src={user && user.photoURL}
                        />

                        <p>Hi, {user.displayName}</p>
                      </div>
                    ) : (
                      <Link to="/user/1/explore">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5267/5267467.png"
                          width="55px"
                          height="55px"
                        ></img>{" "}
                      </Link>
                    )}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Explore">Explore</Nav.Link>
                  <Nav.Link href="/Developer">Developer</Nav.Link>
                  <Nav.Link href="/Men">Men</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/Women">Women</Nav.Link>
                  <Nav.Link href="/Electronics">Electronics</Nav.Link>

                  {user && user.displayName ? (
        <Button onClick={handleSignOut}>LogOut</Button>
      ) : (
        <Link to='/signin'><Button variant="warning">Log In</Button></Link>
      )}
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/Account">Account</NavDropdown.Item>
                    <NavDropdown.Item href="/Profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>


  );
}
