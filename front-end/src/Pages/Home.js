import { React, useState } from "react";
import "./Home.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
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
// import Olayinka from "../assets/Olayinka.mp4";
// import ola from "../assets/ola.jpeg";
import Video from "../Components/Video";
import nft from "../assets/nft.png";
import Pawster from "../assets/Pawster.png";
import DeeperRacer from "../assets/DeepRacer.mp4";
import connect from "../assets/connect.png";
import TextField from '@mui/material/TextField';
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
    {/* Animated Div  */}



    {/* Animated end */}
    
      <div className="center">
    
     

        <Card className="home-container text-center"> 
          <Card.Body>
            <Card.Text>
              <h3>Unleash the Ultimate Gaming Experience with Our Top-Rated Amazon Deals</h3>
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
        <div >
        <div className="polaroid">
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1.awsstatic.com%2Fdeepracer%2FSilverstone%2FDeepRacer_Chrome_Small_rgb.aa9b2a3bee64dae2d593ebf74133277b2811a42e.png&f=1&nofb=1&ipt=9d801eadd170102ac3c3d33dacbea690dec53f6af15820d0fe33d34800fe7ed3&ipo=images" alt="Norway" width="100%"></img>
<div class="polaroid-container">
    <h4>AWS DeepRacer Competition</h4>
  </div>
</div>
<div className="sample-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <h4>AWS DeepRacer Student is a place for high school and college-enrolled learners around the globe to develop machine learning (ML) skills. It provides access to educational material, the optional AWS AI & ML Scholarship program, and the opportunity to train and test reinforcement learning (RL) models for the AWS DeepRacer Student League. To get started, see the topics in the Are you a first-time AWS DeepRacer Student user? section.</h4>
        </div>


        </div>
        <Video />
       
        <div className="sample p-7" >
        <div className="sample-item"><img width="550px" height="320px" src="https://images.pexels.com/photos/9072371/pexels-photo-9072371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="First slide" />
        </div>
        <div className="sample-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
        <div className="sample-item"><img width="350px" height="220px" src="https://images.pexels.com/photos/9072371/pexels-photo-9072371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="First slide" />
        
        </div>
        -

        <div style={{ display: 'flex', justifyContent: 'center' }} className="sample-item">
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="AI Explorer Podcast" id="fullWidth" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      
    </Box>
        </div>
        
        <div className="sample-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        </div>
        {/* <div>
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div> */}

        </div>

        <br />
        
        <div>

        </div>
        <div>
            <div className="sample p-7">
        <div className="sample-item"><img width="350px" height="220px" src="https://images.pexels.com/photos/9072371/pexels-photo-9072371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="First slide" />
        
        </div>
        -

        <div className="sample-item"><img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/></div>
        
        <div className="sample-item">
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div>
        {/* <div>
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div> */}

        </div>
        <br/>
            <div className="sample p-7">
        <div className="sample-item"><img width="350px" height="220px" src="https://images.pexels.com/photos/9072371/pexels-photo-9072371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="First slide" />
        
        </div>
        -

        <div className="sample-item"><img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/></div>
        
        <div className="sample-item">
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div>
        {/* <div>
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div> */}

        </div>
        </div>
        <br/>
        <div className="homepage-container">
        <span className="img-homepage-container">
          <img src="http://placehold" />
        </span>

        </div>
        <Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={210}
  height={118}
/>
<Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={210}
  height={118}
/>
<h1>
  Sample Image Text
</h1>

<div className="polaroid">
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1.awsstatic.com%2Fdeepracer%2FSilverstone%2FDeepRacer_Chrome_Small_rgb.aa9b2a3bee64dae2d593ebf74133277b2811a42e.png&f=1&nofb=1&ipt=9d801eadd170102ac3c3d33dacbea690dec53f6af15820d0fe33d34800fe7ed3&ipo=images" alt="Norway" width="100%"></img>
<div class="polaroid-container">
    <h4>AWS DeepRacer Competition</h4>
  </div>
</div>

<div className="card-container">
<div className="card-text">
  <div className="header-text">
    <h4><a href="https://student.deepracer.com/leaderboard/arn%3Aaws%3Adeepracer%3A%3A%3Aleaderboard%2Ff425dfc2-c6b0-4102-ad35-c2c28a1cbd17"><Button>My Racing Rank</Button></a></h4>
  </div>

  <div class="text-container">
    <p>July 1, 2023</p>
  </div>
</div>
</div>

<div className="second-cont">
          <h3>aws</h3>
</div>

<Animation />

        <code>New Season</code>
               {/* <div style={{ display: "flex", justifyContent: "center" }} className="arrival">
              
                FEATURED <span className="featured">PRODUCTS</span>
               </div> */}
               <div style={{ display: "flex", justifyContent: "center" }}>
                
                </div>
        {/* <Card>
          <Card.Body>
          {/* <p className="pro" > <Badge bg="secondary"><h1>Top Categories</h1> </Badge></p> */}
          {/* <Animation /> */}
        
          {/* <div className="category" style={{ display: "flex", justifyContent: "center" }}>
          </div>
          
          </Card.Body>
        </Card> */} 
        
        <br />
        <div className="sample p-7">
        <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/smiley-people-playing-videogame-side-view_23-2149349995.jpg?t=st=1681598378~exp=1681598978~hmac=c620e5ac3a8c5b911ed3acb77c08ba0bf9734934c40dd09cb0b0b454185dbf4f" /></Item>
        
        </Grid>

        {/* <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      </Stack> */}

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/premium-photo/winning-side-view-excited-african-guy-male-professional-gamer-wearing-headphones-celebrating-success-while-participating-esport-tournament-people-playing-online-video-game_386167-10371.jpg" /></Item>
          
     
        </Grid>

        

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/smiley-man-wearing-vr-glasses-medium-shot_23-2149350043.jpg?t=st=1681598378~exp=1681598978~hmac=a05eaea10743a68086395df9a283e29249c871f5d0ee2c7be27d6427a39bdcef" /></Item>
        
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/back-view-man-winning-videogame_23-2149350002.jpg?t=st=1681598378~exp=1681598978~hmac=703a647c901d0ba376a92586bdfe556ba0aef68904fdfb2c16f62649eb9bff57" /></Item>

        </Grid>

      </Grid>
      <div>
   
    </div>
    </Box>

   
    </div>
        <br />
     

       
        <br/>
        <br/>
      

  
        
  <p className="pro" > <Badge bg="secondary"><h3>Gear up, game on! </h3></Badge></p>
       

    <br/>
   
    <br />
    
    <br />
        <Card className="text-center">
          <Card.Body>
        
            <h3>Get 10 - 50% off!!</h3>
            <br/>
        <br/>
        <br/>

          
            {/* <Image width="250px" height="200px" src="https://m.media-amazon.com/images/I/71OmWj29nUL._AC_SL1500_.jpg" fluid /> */}

            
            
            <br />
          
      <br />
      <p className="pro" > <h3>PORTFOLIO PROJECTS</h3></p>
      <h3>Hello Guys, here is a brief introduction about my porfolio project and a video of my technical and soft skills.</h3>
      <Video />
      <div className="portfolio p-7" >
            <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={4}>
          
          {/* <Badge bg="secondary"><h4>Learn More</h4></Badge> */}
          <Item><img width="250px" height="220px" alt="First slide" src={Pawster} />
          </Item>
         
 <a href="https://ola-pawster.netlify.app/" target="_blank" >
 Ola-Pawster
          </a>

            
        </Grid>

        <Grid md={4}>
          <Item><img width="250px" height="220px" alt="First slide" src={nft} />
          </Item>
          <a href="https://heartfelt-gumdrop-4d1ee2.netlify.app/" target="_blank" >
 NFT-Review
          </a>
        </Grid>

        <Grid md={4}>
          <Item><img width="250px" height="220px" alt="First slide" src={connect} />
          
          {/* <Badge bg="secondary"><h4>Rearn More</h4></Badge> */}
          </Item>
          <a href="https://masonmei.wixsite.com/pursuitconnect/post/faho-blog" target="_blank" >
 Pursuit Connect
          </a>
        </Grid>

        {/* <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_clutch_gladiate_6l366aa_angle_2_1512x.jpg?v=1679679081" />
          <p>This officially licensed wired Xbox controller features dual trigger locks and remappable rear buttons.</p>
         
          </Item>
          <br/>
          

        </Grid> */}

      </Grid>
    </Box>
    </div>

  
            {/* ==================== */}
  
    
              <br/>

              <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        The Artificial Intelligence Explorer
        </Typography>
        <Typography variant="h5" component="div">
        AI Blog & Spotify Podcast 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Stay Tuned!
        </Typography>
        <Typography variant="body2">
        <Button variant="primary" onClick={handleShow}>
        <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pigeonsandplanes.com%2Fimages%2Fc_crop%2Ch_920%2Cw_1227%2Cx_313%2Cy_0%2Fc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto%2Cw_1100%2Fryd9nmid8thz3xe4vda8%2Fspotify-logo&f=1&nofb=1&ipt=ab5e44ba2dc7e4460e0de2a98b14e5d62323fda3004736df01e9ecd45bb22b17&ipo=images" width="45px" height="45px">
        
        </img> 
        
          <a href="https://masonmei.wixsite.com/pursuitconnect/post/faho-blog " >Podcast Blog</a>
  
      </Button>
          <br />
          {'"The AI Explorer"'}
          
        </Typography>
      </CardContent>
      <CardActions>
      <div>
        
      </div>
      
      </CardActions>
    </Card>
        <br/>
            <Button variant="outlined">
                <h3>AheadShopping BLOG </h3>
            </Button>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><Div>{"BLOG"}</Div></Accordion.Header>
        <Accordion.Body>
        <Button variant="primary" onClick={handleShow}>
        <img src = "https://img.freepik.com/free-vector/detailed-esports-gaming-logo_79603-1792.jpg?w=1380&t=st=1681628574~exp=1681629174~hmac=5c36fd3f3bb178c8348c56cb3986c1fbd94a61593011a840f028df138ca45b97" width="45px" height="45px"></img> LEARN MORE
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src = "https://cdn-icons-png.flaticon.com/512/40/40021.png?w=1380&t=st=1681624041~exp=1681624641~hmac=20439082c3d9180dfd26dd06a7c1f1ff007aaf1ca8b50eadcec58e8b31d723b2" width="35px" height="35px"></img> fellow gamers!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        

Are you looking for high-quality gaming equipment at discounted prices? Look no further than our Amazon discount gaming equipment website! We have everything you need to take your gaming experience to the next level without breaking the bank.


          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/girl-playing-videogame-laptop_23-2148963899.jpg?w=2000&t=st=1681623328~exp=1681623928~hmac=c752ee478eba7f8d79b40793b26aad11957be451c4fbe0b82da9c46c72fd3cfe" /></Item>
        
From top-of-the-line gaming keyboards and mice to immersive headsets and high-performance graphics cards, we've got you covered. Whether you're a seasoned pro or just starting out, we have something for every gamer.
<Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/close-up-gamer-using-rgb-keyboard-mouse-online-competition_482257-497.jpg?w=2000&t=st=1681623783~exp=1681624383~hmac=b83f3d391888aab31483a014be794adf1a2ad0b5984e3f339cc53777f60b6188" /></Item>
At our website, we understand that gaming can be an expensive hobby. That's why we work hard to bring you the best deals and discounts on the latest gaming gear. 
You don't have to sacrifice quality for affordability when you shop with us.
<Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/professional-esport-gamer-playing-game-with-gaming-controller_53876-102992.jpg?w=2000&t=st=1681623535~exp=1681624135~hmac=9fe00a598fd0f44ba470b008dea248074d37d86fd0dd86cb531c735931312924" /></Item>
We pride ourselves on our exceptional customer service and our commitment to providing you with the best possible shopping experience. Our website is easy to navigate, and our knowledgeable staff is always available to answer any questions you may have.

<Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/international-couple-playing-video-games_1157-29087.jpg?w=2000&t=st=1681623840~exp=1681624440~hmac=3369244d0e2fbbd25d36bfcb0691dc4c5d0eb81b8b3a6c2bef94a7485e1f030f" /></Item>
Happy gaming, and happy shopping!
        </Offcanvas.Body>
      </Offcanvas>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Card.Body>
        </Card>
        <br/>
       <div>

       </div>
        <br/>
      
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
