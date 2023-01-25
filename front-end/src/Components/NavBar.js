import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import About from "./About";
import Profile from "./Profile";
import Signin from "../Pages/Signin";
import FlexConnect from "./FlexConnect";
import Container from "react-bootstrap/Container";
import { UserAuth } from "../Context/AuthContext";
import { Card, CardHeader, CardBody, CardFooter } from "react-bootstrap/";


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

    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="Nav"
    >
      <Container>
        <Navbar.Brand>
          {/* <Link to="/">Logo</Link> */}
          <Link to="/" className="Link">
            <img
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?table=block&id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1db7092b-3ec4-4da8-985b-7b836b0a69ad&cache=v2"
              alt="logo"
              className="img-logo"
            />
            

          </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/products"
    
            >
              Explore
            </Nav.Link>

            <Nav.Link
              href="/about"
              
            >
              About
            </Nav.Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item>
              {user?.displayName ? (
        <button onClick={handleSignOut}><Button>LogOut</Button></button>
      ) : (
        <Link to='/signin'>Log In</Link>
      )}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/FlexConnect" className="Link">
                 <img width="45px" height="45px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qd_PyuUdp9Se1AGdWWhXVwHaHa%26pid%3DApi&f=1&ipt=33b7eb916f31f77bd6dd76a51cb4d109caca8056b91d1f5c3d5b88bb42b30c0f&ipo=images"></img>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Profile" className="Link">
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Profile" className="Link">
                {user?.displayName ? ( 
        <img src={user.photoURL} alt="pfp" width="35px" height="35px" border-radius="50%" />
      ) : null} 
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link eventKey={2}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">🔍</Button>
            </Form>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </header>
  );
}
