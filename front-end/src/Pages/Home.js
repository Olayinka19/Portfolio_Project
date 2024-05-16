import { React, useState } from "react";
import "./Home.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
// import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Animation from "../Components/Animation";
import ImageList from "@mui/material/ImageList";
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import { MessageBox } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';
import PaymentSlip from "./PaymentSlip";
import Cart from './Cart';
import SnackbarContent from '@mui/material/SnackbarContent';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import UFO_Video from "../Components/UFO_Video";
// import Olayinka from "../assets/Olayinka.mp4";
// import ola from "../assets/ola.jpeg";
import Video from "../Components/Video";
import nft from "../assets/nft.png";
import Pawster from "../assets/Pawster.png";
import DeeperRacer from "../assets/DeepRacer.mp4";
import connect from "../assets/connect.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { Stack, Box, Container } from "@mui/system";
// import ImageFeed from "./ImageFeed";
// import "./Feed.css"
// import homepage from "../assets/homepage.mp4"
const API = process.env.REACT_APP_API_URL;


function Home() {

  const [show, setShow] = useState(false);

  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const [cartList, setCartList] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const removeFromCart = (itemId) => {
    const updatedCart = cartList.filter((item) => item.id !== itemId);
    setCartList(updatedCart);
  };
  // const StyledRating = styled(Rating)({
  //   '& .MuiRating-iconFilled': {
  //     color: '#ff6d75',
  //   },
  //   '& .MuiRating-iconHover': {
  //     color: '#ff3d47',
  //   },
  // });

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
    <>
   
      <div className="center">
    
     

        <Card className="home-container text-center"> 
          <Card.Body>
            <Card.Text>
              <h3>Explore the latest in electronics and technology with OlaFolio Electronics.</h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                
              </div>
            </Card.Text>

            <Carousel fade>
            <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/7862590/pexels-photo-7862590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Second slide"
                />
              </Carousel.Item>
            <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/7848992/pexels-photo-7848992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>

                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/7776225/pexels-photo-7776225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/4009604/pexels-photo-4009604.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/5698398/pexels-photo-5698398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/12718618/pexels-photo-12718618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/6498310/pexels-photo-6498310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
        <br />
    
     
<div className="sample-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Shop now and experience the future of tech!</h2>
        </div>

<div className="intro2">
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
  <br/>
<br/>
  
          <p><Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button></p>

  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/12718618/pexels-photo-12718618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="300px"></img>
<br/>
<br/>
  
          <p><Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button></p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          {/* <Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button> */}
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
  <br/>
<br/>
  
          <p><Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button></p>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
  <br/>
<br/>
  
          <p><Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button></p>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
  <br/>
<br/>
  
          <p><Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button></p>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
  <br/>
<br/>
  
          <p><Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button></p>
  </div>
  
</div>
        

   

 





<Animation />

       
    
     
   
   

        


       


       
     
   
      
     

   
        <div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Link href="#">
              {/* <Button variant="outlined">TOP🔝</Button> */}
              <Badge bg="primary"><h3>Back To Top</h3></Badge>
            </Card.Link>
          </div>
        </div>
      </div>
    </>
  );
}



export default Home;
