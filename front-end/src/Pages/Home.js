import { React, useState } from "react";
// import "animate.css";
import "./Home.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Animation from "../Components/Animation";
// import 'animate.css';
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import ImageList from "@mui/material/ImageList";
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
import Skeleton from '@mui/material/Skeleton';
// import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// import CardGroup from 'react-bootstrap/CardGroup';


const API = process.env.REACT_APP_API_URL;


function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
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
      <div>
        <Card className="home-container text-center">
          <Card.Body>
            <Card.Text>
              <h1>Unleash the Ultimate Gaming Experience with Our Top-Rated Amazon Deals!</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                
              </div>
            </Card.Text>

            <Carousel fade>
              <Carousel.Item interval={2000}>
                <img
                  className="first-image"
                  src="https://img.freepik.com/free-photo/gaming-setup-with-headphones-still-life_23-2149829129.jpg?w=826&t=st=1681598210~exp=1681598810~hmac=2c308d784b69a824abd6daf4841b1dcb3d7dd5f802ea5c8829b9350856b020b0"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://img.freepik.com/free-photo/recording-new-song-attractive-singer-is-singing-new-audio-material_613910-13188.jpg?w=1800&t=st=1681598162~exp=1681598762~hmac=4a7aeb8e72f206b8c57aad7a36a0c17bb7b7397c2f78a04e3e417d533785c028"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://img.freepik.com/free-photo/gamer-streaming-online-videogames-professional-powerful-computer-with-green-screen-mock-up-chroma-key-display-streamer-playing-space-shooter-game-isolated-desktop-holding-wireles-controller_482257-12629.jpg?w=2000&t=st=1681598266~exp=1681598866~hmac=9c9e308d18801cf1c8a3cba01fcd6d77435eb89fdf34b3fe5ab65f688da3a0bc"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://img.freepik.com/free-photo/woman-using-video-games-play-stream-online-computer-streamer-broadcasting-gameplay-live-with-chat-monitor-using-headphones-microphone-player-streaming-gaming_482257-27671.jpg?w=1800&t=st=1681598302~exp=1681598902~hmac=53954ea66da720f865c4d6c26562adbacb8daae020090f9ab7481814f00ae511"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?w=1800&t=st=1681598378~exp=1681598978~hmac=bb6c1fbab6a84e07de2e191d84e4822e8ccf82771519324df658fcdf79077cd1"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
        <br />

        <br />
 
        <Card>
          <Card.Body>
          {/* <p className="pro" > <Badge bg="secondary"><h1>Top Categories</h1> </Badge></p> */}
          <Animation />
          </Card.Body>
        </Card>
        
        <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" src="https://img.freepik.com/free-photo/pro-streamer-sitting-gaming-chair-talking-with-players-using-professional-micorphone-playing-space-shooter-video-game-during-online-tournament-cyber-man-discussing-streaming-chat_482257-12604.jpg?w=2000&t=st=1681597958~exp=1681598558~hmac=3e5587511ab709b25347d849ad8ff22ef9ffa06fb1c56776cb26777b02eb76ec" alt="First slide" /></Item>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>HEADSETS</Accordion.Header>
        <Accordion.Body>
        <Link to="/Headsets"><Button variant="secondary"> <img src = "https://cdn-icons-png.flaticon.com/512/647/647833.png?w=1380&t=st=1681618614~exp=1681619214~hmac=0b26871c3532b484fa7e1d21ef6503b53000323221e02fbe75a42e0957f3b0c5" width="35px" height="35px"></img></Button></Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" src="https://img.freepik.com/free-photo/gradient-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529405.jpg?w=1800&t=st=1681598520~exp=1681599120~hmac=e1602699b8c13824649ce521ebadb25be1e43146bb42410a0b5cee270a1e4310"  alt="First slide"/></Item>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> KEYBOARDS</Accordion.Header>
        <Accordion.Body>
        <Link to="/Keyboards"><Button variant="secondary"> <img src="https://cdn-icons-png.flaticon.com/512/329/329815.png?w=1060&t=st=1681597742~exp=1681598342~hmac=dd6729fcad0e434168343a780a1327d5b41403ab66e41735a3d15ef476ee5035" alt="First slide" width="35px" height="35px"/></Button></Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
        </Grid>
        <Grid md={3}>
  
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/diverse-team-influencers-creating-channel-content-podcast-filming-vlog-social-media-modern-man-woman-recording-episode-show-camera-live-broadcasting-conversation_482257-48354.jpg?w=1800&t=st=1681598033~exp=1681598633~hmac=39a7fefaab9722f2a95b4ecc5ab8a14514f3acadb1c5455efd7bbaa49b77fdd7" /></Item>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>MICROPHONES</Accordion.Header>
        <Accordion.Body>
        <Link to="/Keyboards"><Button variant="secondary"> <img src="https://cdn-icons-png.flaticon.com/512/96/96824.png?w=1380&t=st=1681621286~exp=1681621886~hmac=d83ed86f0019c462b04beb73ba95b44a7cbab44fb6749ba7c35e9c533182a868" alt="First slide" width="35px" height="35px"/></Button></Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Grid>
        <Grid md={3}>
        <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529362.jpg?w=1800&t=st=1681605177~exp=1681605777~hmac=6d50cbf04f84535ab3837d2265c7e75de0d5542640a5c6fa904d10ace66e1da2" /></Item>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>MICE</Accordion.Header>
        <Accordion.Body>
        <Link to="/Mice"><Button variant="secondary"> <img src="https://cdn-icons-png.flaticon.com/512/141/141052.png?w=1380&t=st=1681622633~exp=1681623233~hmac=aa0dce8ce7b3399d9e60711acd3a6c5fae5a82915af02853fbcaa997aedb4718" alt="First slide" width="35px" height="35px"/></Button></Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Grid>
      </Grid>
    </Box>
        <br/>
        <br/>
        <br/>

  
  <p className="pro" > <Badge bg="secondary"><h3>Gear up, game on! </h3></Badge></p>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/high-angle-controllers-headphones_23-2149829136.jpg?w=1800&t=st=1681599080~exp=1681599680~hmac=4c84c2d995960c3a3cb1bca2f78fb71c605f53e992beeaa590c118df457610c3" /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img width="100%" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/high-angle-man-with-virtual-headset_23-2148405676.jpg?w=1800&t=st=1681599178~exp=1681599778~hmac=6b01bc0d3e196b197e7bc5f2a23b19c2dd552f54c691fb9796174dd80d320001" /></Item>
        </Grid>
        <Grid item xs>
          <Item><img width="100%" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/high-angle-controller-vr-glasses_23-2149829130.jpg?w=1800&t=st=1681599397~exp=1681599997~hmac=4785ce5323706fa2ac1eafc8b5dd3ccec2df3f25e1ce9ef552eb9c7c5e4476f1" /> </Item>
        </Grid>
      </Grid>
    </Box>
        <Card className="text-center">
          <Card.Body>
        
            
            <h2>10 - 50% off!!</h2>
            <br/>
        <br/>
        <br/>
            <Box
      sx={{
        bgcolor: '#00053C',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      
    >
     
       <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-vector/vintage-badge-hand-holding-joystick-vector-illustration-round-label-with-gamepad_74855-11224.jpg?w=1380&t=st=1681627155~exp=1681627755~hmac=bdc2eae7a5e6d89121776cb0cfbee8b23a32b79a0d033432a5eaa8a3a2514354" /></Item>
      <Skeleton
        sx={{ bgcolor: 'black.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
  
    </Box>
          
            {/* <Image width="250px" height="200px" src="https://m.media-amazon.com/images/I/71OmWj29nUL._AC_SL1500_.jpg" fluid /> */}

            
            
            <br />
      <br />
      <p className="pro" > <Badge bg="secondary"><h3>SALES ENDING SOON!!</h3></Badge></p>
      
            <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_quadcast_02_side_1512x.jpg?v=1678907138" />
          
          <p>Get great sound whether you’re connecting to a PC, PS4™, PS5™, or Mac®.</p>
          </Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_wireless_2_main_dongle_1512x.jpg?v=1678907740" />
          <p>The HyperX Cloud Stinger™ 2 Core is the essential entry-level PlayStation headset at an affordable price.</p>
          </Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_alloy_core_rgb_us_1_main_1512x.jpg?v=1678907503" />
          <p>RGB™ is ideal for gamers looking to enhance their keyboard’s style and performance without breaking the bank.</p></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_clutch_gladiate_6l366aa_angle_2_1512x.jpg?v=1679679081" />
          <p>This officially licensed wired Xbox controller features dual trigger locks and remappable rear buttons.</p></Item>

        </Grid>

      </Grid>
    </Box>

    {/* <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_armada_25_fhd_gaming_monitor_g_sync_2_main_no_arm_1512x.jpg?v=1678907555" /></Item>
          
        
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_rubber_keycaps_pink_us_1_angled_1512x.jpg?v=1678908070" /></Item>
        
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_pc_extension_cable_4_poles_to_dual_3.5mm_20_1_1728x.jpg?v=1678907503" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_solocast_white_5_angled_1512x.jpg?v=1678907630" />
          
          <p>The built-in mount adapter is highly versatile and can accommodate 3/8-inch and 5/8-inch threads, ensuring compatibility with a wide range of boom arms or mic stands.</p>
          </Item>

        </Grid>

      </Grid>
    </Box> */}


            {/* ==================== */}
  
    
              <br/>
        <br/>
            <Button variant="outlined">
              <a href="/">
                <h3>Unlock your true gaming potential with our top-of-the-line equipment </h3>
              </a>
            </Button>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><Div>{"BLOG"}</Div></Accordion.Header>
        <Accordion.Body>
        <Button variant="secondary" onClick={handleShow}>
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
        <br/>
        <marquee direction="right">
        <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="190px" height="190px" alt="First slide" src="https://cdn-icons-png.flaticon.com/512/44/44265.png?w=1380&t=st=1681606400~exp=1681607000~hmac=93d16def9e7b788a5954be76a9a56d295f497fc357b793b09c2b587f2a8c539a" /></Item>
        </Grid>
      </Grid>
    </Box>
    </marquee>
        {/* <br/> */}
        <div>
        <Box
      sx={{
        bgcolor: '#004B72',
        color: 'white',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      
    >
     
      
  <h3>Calling all gamers! Grab your favorite snacks and settle in for an all-night gaming marathon with our amazing discount on gaming equipment. Get ready to dominate the game and have some serious fun!</h3>
      {/* <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      /> */}
  
    </Box>

        <br/>
        <br/>
    
    <br/>
    <br/>
    
    
    <br/>
        <br/>

        
              <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <Carousel fade>
                <Carousel.Item interval={200}>
                  <img
                    className="first-image first-container"
                    src="https://img.freepik.com/free-vector/hand-drawn-game-streamer-concept-elements_23-2148997474.jpg?w=1380&t=st=1681607804~exp=1681608404~hmac=a88e615b7b24320fa4ccd4e7d2df629cb17173ed3aa90420c095aefc61e7080e"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://img.freepik.com/free-vector/virtual-reality-equipment_23-2148786275.jpg?w=1380&t=st=1681607831~exp=1681608431~hmac=102e571a1a42c565f9d11fb3ef731756d87531a1eacb365350a8fa6d07b8530d"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://img.freepik.com/free-vector/cyber-sport-pro-gamer-equipment-accessory-set-excited-young-man-headset-with-mic-playing-streaming-video-game-match-console-sitting-front-television-screen_575670-1334.jpg?w=1800&t=st=1681607734~exp=1681608334~hmac=8603454730a7c99ac3e8807ed9c9424db2df0185a882f71bc4c28bce3020eb2c"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://img.freepik.com/premium-vector/black-speaker-sound-system-sets_545728-65.jpg?w=1380"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://img.freepik.com/free-vector/computer-accessories-peripheral-black-icons-set-isolated-vector-illustration_1284-2744.jpg?w=1380&t=st=1681608109~exp=1681608709~hmac=e4c168b130b924aefc8d2172e01d2d2e03fb6e6cec510021287fc8610d2b4049"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel> */}
            
          </div>






          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Link href="#">
              {/* <Button variant="outlined">TOP🔝</Button> */}
              <Badge bg="secondary"><h3>Top🔝</h3></Badge>
            </Card.Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;
