import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import Button from '@mui/material/Button';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { UserAuth } from "../Context/AuthContext";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Ahead from './Images/Ahead.png'
import logo6 from './Images/logo6.png'



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
                        Welcome back☺️
                      </div>
                    ) : (
                      <Link to="/">
                        <img
                          src={Ahead}
                          width="65px"
                          height="40px"
                          border-radius= "17px"
                        ></img>{" "}
                      </Link>
                    )}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/"><Button variant="success">Home</Button></Link>
                  <hr/>
                  <Link to="/About"><Button variant="success">Explore</Button></Link>
                  <NavDropdown
                    title="Categories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item ><Link to="/Women">Women</Link></NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Developer"><Button variant="outlined">Developer</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Men"><Button variant="outlined">Men</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Food"><Button variant="outlined">Food</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Electronics"><Button variant="outlined">Electronics</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* <Link to="/Food"><Button variant="outlined">Food</Button></Link>
                  <hr/>
                  <Link to="/Developer"><Button variant="outlined">Developer</Button></Link>
                  <hr/>
                  
                  <hr/>
                  <Link to="/Women"><Button variant="outlined">Women</Button></Link>
                  <hr/>
                  <Link to="/Electronics"><Button variant="outlined">Electronics</Button></Link>
                  <hr/> */}
                  {user && user.displayName ? (
        <Button onClick={handleSignOut} variant="success">LogOut</Button>
      ) : (
        <Link to='/signin'><Button variant="success">Log In</Button></Link>
      )}
                  <NavDropdown
                    title="Account Settings"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item ><Link to="/Account">Account</Link></NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Profile">Profile</Link>
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
                  <Button variant="success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>


  );
}
