import React from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { UserAuth } from "../Context/AuthContext";

import Offcanvas from 'react-bootstrap/Offcanvas';
import new2 from './Images/new2.png'
import Ahead from './Images/Ahead.png'
import AheadSh from './Images/AheadSh.png'
import logo6 from './Images/logo6.png'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
// import Cart from "./Components/Cart";
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function NavBar() {


  const {user, logOut} = UserAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" sticky="top">
        
          <Container fluid>
            <Navbar.Brand href="/">OlaFolio</Navbar.Brand>
            <Stack direction="row" spacing={1}>
  
      {/* <Chip
        avatar={<Avatar alt="Natacha" src={user && user.photoURL} />}
      /> */}
      <div>
<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <Chip
        avatar={<Avatar alt="Natacha" src={user && user.photoURL} />}
      />
    
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
        <MenuItem onClick={handleClose}><Link to="/Account">My Account</Link></MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>


{user && user.displayName ? (
        <Button onClick={handleSignOut} variant="outlined">LogOut</Button>
      ) : (
        <Link to='/signin'><Button variant="outlined">Log In</Button></Link>
      )}
    </Stack>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" className="offCanavNav"
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
                          src={new2}
                          width="45px"
                          height="45px"
                          border-radius= "50%"
                        ></img>{" "}
                      </Link>
                    )}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/"><img src = "https://cdn-icons-png.flaticon.com/512/759/759400.png?w=1380&t=st=1681618963~exp=1681619563~hmac=5c60a674eb96dfa21e036f66785a41dfbbe829173db8c7450253ba220956fc83" width="35px" height="35px"></img><Button variant="error">Home</Button></Link>
                  <hr/>
                  <Link to="/Headsets"><img src = "https://cdn-icons-png.flaticon.com/512/647/647833.png?w=1380&t=st=1681618614~exp=1681619214~hmac=0b26871c3532b484fa7e1d21ef6503b53000323221e02fbe75a42e0957f3b0c5" width="35px" height="35px"></img><Button variant="secondary">Gaming Headsets</Button></Link>
                  <NavDropdown.Divider />
                  <Link to="/Keyboards"><img src="https://cdn-icons-png.flaticon.com/512/329/329815.png?w=1060&t=st=1681597742~exp=1681598342~hmac=dd6729fcad0e434168343a780a1327d5b41403ab66e41735a3d15ef476ee5035" alt="First slide" width="35px" height="35px"/><Button variant="secondary">Gaming Keyboards</Button></Link>
                  <NavDropdown.Divider />
                  <Link to="/Microphones"><img src="https://cdn-icons-png.flaticon.com/512/96/96824.png?w=1380&t=st=1681621286~exp=1681621886~hmac=d83ed86f0019c462b04beb73ba95b44a7cbab44fb6749ba7c35e9c533182a868" alt="First slide" width="35px" height="35px"/><Button variant="secondary">Microphones</Button></Link>
                  <NavDropdown.Divider />
                  <Link to="/Mice"><img src="https://cdn-icons-png.flaticon.com/512/141/141052.png?w=1380&t=st=1681622633~exp=1681623233~hmac=aa0dce8ce7b3399d9e60711acd3a6c5fae5a82915af02853fbcaa997aedb4718" alt="First slide" width="35px" height="35px"/><Button variant="secondary">Gaming Mice</Button></Link>
                  <NavDropdown.Divider />
                  <Link to="/About"><img src="https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg?w=1380&t=st=1681627996~exp=1681628596~hmac=9e73ddbd6115e121f92669fbc702fd0a653b67611cb4c384a04ce775f757d5fc" alt="First slide" width="35px" height="35px"/><Button variant="secondary">Competition</Button></Link>
                  <NavDropdown.Divider />
                  <NavDropdown
                    title="Other Products"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                   
                
                    
                    <NavDropdown.Item>
                    <Link to="/Computers"><img src="https://cdn-icons-png.flaticon.com/512/2821/2821610.png" width="45px" height="45px"></img></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/Audio_videos"><img src="https://cdn-icons-png.flaticon.com/512/8445/8445561.png" width="45px" height="45px"></img></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/Gaming"><img src="https://cdn-icons-png.flaticon.com/512/2780/2780137.png" width="45px" height="45px"></img></Link>
                    </NavDropdown.Item>
    
                    
                    <NavDropdown.Item>
                    
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/Home_devices"><img src="https://cdn-icons-png.flaticon.com/512/3979/3979810.png" width="45px" height="45px"></img></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/Mobile_devices"><img src="https://cdn-icons-png.flaticon.com/512/2274/2274713.png" width="45px" height="45px"></img></Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Software"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/3950/3950815.png" width="45px" height="45px"></img>Software</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Computers"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/4029/4029235.png" width="45px" height="45px"></img>Wrist Watch</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Computers"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" width="45px" height="45px"></img>Computers</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Computers"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" width="45px" height="45px"></img>Computers</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Men"><Button variant="outlined"><img src="https://img.freepik.com/premium-psd/workwear-mockup_353595-243.jpg?w=1060" width="45px" height="45px"></img>Men Clothes</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item >
                    <Link to="/Women"><Button variant="outlined"><img src="https://img.freepik.com/premium-psd/apparel-mockup_353595-198.jpg?w=1060" width="45px" height="45px"></img>Women</Button></Link></NavDropdown.Item> */}
        
                    {/* <NavDropdown.Item>
                    <Link to="/Food"><Button variant="outlined"><img src=" https://img.freepik.com/free-vector/flat-background-with-double-burger-tasty-ingredients_23-2147635675.jpg?w=1060&t=st=1678332132~exp=1678332732~hmac=7fd25af3c65efc62882ff3150a57df02d16e3792cafa70d4a069397841481fdf" width="45px" height="45px"></img>Food</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Electronics"><Button variant="outlined"><img src="https://img.freepik.com/premium-psd/3d-render-low-poly-compute-4k-resolution_517414-5.jpg?w=1060" width="45px" height="45px"></img>Electronics</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Bags"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/58/58047.png?w=1380&t=st=1678335615~exp=1678336215~hmac=fdd0e95503de02f7a5d86fa247aec79ea548b7df8099a0c8320f798d4e5cff7f" width="45px" height="45px"></img>Bags</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Education_office"><Button variant="outlined"><img src="https://img.freepik.com/free-vector/isometric-building-white-background_1308-92994.jpg?w=1060&t=st=1678336001~exp=1678336601~hmac=100c333e0e8cc099f258290b54cdd4ef9ec194d49b320133963b6f8ffe0f4e3e" width="45px" height="45px"></img>Education_Office</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Health_beauty"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/107/107780.png?w=1380&t=st=1678336344~exp=1678336944~hmac=ea28fccd1f594bc6451d92787534aa41e728df5310911f004a998f87676b915c" width="45px" height="45px"></img>Health , Beauty & Hair</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Jewelry_accessories"><Button variant="outlined"><img src="https://cdn-icons-png.flaticon.com/512/68/68458.png?w=1380&t=st=1678336613~exp=1678337213~hmac=05c6e620394a6c41b312a33fb1f64d30b4fdc905c9ef026975c7280fce3418da" width="45px" height="45px"></img>Jewelry_accessories</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Sports_outdoor"><Button variant="outlined"><img src="https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg?w=2000&t=st=1678336868~exp=1678337468~hmac=eb8a28d74ca9bd954dc2c8a2ffc49097be2ef006ca647471b72af062cbe5e9bf" width="45px" height="45px"></img>Outdoor Fun & Sports</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Travel"><Button variant="outlined"><img src="https://img.freepik.com/free-vector/travel-background_23-2148042977.jpg?w=1380&t=st=1678337206~exp=1678337806~hmac=b16ce99d0f6d733cf83092d6a9bc83a85bcef5f1d9e0a2f8c15337ca8a8e31e1" width="45px" height="45px"></img>Travels</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item>
                    <Link to="/Electronics"><Button variant="outlined"><img src="https://img.freepik.com/premium-psd/3d-render-low-poly-compute-4k-resolution_517414-5.jpg?w=1060" width="45px" height="45px"></img>Electronics</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Electronics"><Button variant="outlined"><img src="https://img.freepik.com/premium-psd/3d-render-low-poly-compute-4k-resolution_517414-5.jpg?w=1060" width="45px" height="45px"></img>Electronics</Button></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Electronics"><Button variant="outlined"><img src="https://img.freepik.com/premium-psd/3d-render-low-poly-compute-4k-resolution_517414-5.jpg?w=1060" width="45px" height="45px"></img>Electronics</Button></Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item ><Link to="/Kitchen"><img src="https://img.freepik.com/free-vector/casserole-pot_1284-11444.jpg?w=1060&t=st=1678332411~exp=1678333011~hmac=08540d0ce9eea7b3102ff22b10f0740f5288eab590d021c936e30b7b6b94438a" width="45px" height="45px"></img>kitchen & Utensils</Link></NavDropdown.Item>  */}
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
        <Button onClick={handleSignOut} variant="outlined">LogOut</Button>
      ) : (
        <Link to='/signin'><Button variant="outlined">Log In</Button></Link>
      )}
      <img src="https://img.freepik.com/free-icon/user_318-931840.jpg?size=626&ext=jpg" width="35px" height="35px"></img><NavDropdown
                    title="My Account"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
        
                    <NavDropdown.Item ><Link to="/Account">My Account</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Settings
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
