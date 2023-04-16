import { React, useState } from "react";
// import "animate.css";
import "./Home.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Animation from "../Components/Animation";
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
              <h1>Play like a pro with our premium gaming gear!</h1>
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
          <p className="pro" > <Badge bg="secondary"><h1>Top Categories</h1></Badge></p>
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
          <h4>LINK TO HEADSET PAGE</h4>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" src="https://img.freepik.com/free-photo/gradient-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529405.jpg?w=1800&t=st=1681598520~exp=1681599120~hmac=e1602699b8c13824649ce521ebadb25be1e43146bb42410a0b5cee270a1e4310"  alt="First slide"/></Item>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><img src="https://cdn-icons-png.flaticon.com/512/329/329815.png?w=1060&t=st=1681597742~exp=1681598342~hmac=dd6729fcad0e434168343a780a1327d5b41403ab66e41735a3d15ef476ee5035" alt="First slide" width="25px" height="25px"/> KEYBOARDS</Accordion.Header>
        <Accordion.Body>
          <h4>LINK TO HEADSET PAGE</h4>
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
          <h4>LINK TO HEADSET PAGE</h4>
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
          <h4>LINK TO HEADSET PAGE</h4>
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
        
            
            <code>With 10 - 50% Discount!!</code>
            <br/>
        <br/>
        <br/>
            <Box
      sx={{
        bgcolor: '#919B95',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        color = "white"
        variant="rectangular"
        width={210}
        height={118}
      />
       <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/young-couple-playing-video-game-indoors_23-2148969293.jpg?w=1800&t=st=1681602474~exp=1681603074~hmac=2a886f9225a8ce8c57dae9a51c256edcf71156d412d3396b4a6a855bdd71ec9a" /></Item>
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
  
    </Box>
          
            {/* <Image width="250px" height="200px" src="https://m.media-amazon.com/images/I/71OmWj29nUL._AC_SL1500_.jpg" fluid /> */}

            
            
            <br />
      <br />
      <p className="pro" > <Badge bg="secondary"><h3>Take advantage of our discount!!</h3></Badge></p>
      
            <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_quadcast_02_side_1512x.jpg?v=1678907138" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_wireless_2_main_dongle_1512x.jpg?v=1678907740" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_alloy_core_rgb_us_1_main_1512x.jpg?v=1678907503" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_clutch_gladiate_6l366aa_angle_2_1512x.jpg?v=1679679081" /></Item>

        </Grid>

      </Grid>
    </Box>



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
        <Button variant="primary" onClick={handleShow}>
        Learn more
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        </Offcanvas.Body>
      </Offcanvas>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Card.Body>
        </Card>
        <br/>
        <br/>
        {/* <br/> */}
        <div>
        <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      
    >
      {/* <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        color = "white"
        variant="rectangular"
        width={210}
        height={118}
      /> */}
      
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
        <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn-icons-png.flaticon.com/512/44/44265.png?w=1380&t=st=1681606400~exp=1681607000~hmac=93d16def9e7b788a5954be76a9a56d295f497fc357b793b09c2b587f2a8c539a" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn-icons-png.flaticon.com/512/98/98937.png?w=1380&t=st=1681606467~exp=1681607067~hmac=5e5afc830471298c496fc722fee1772d972b288a2984f217f34dc105003ad336" /></Item>
        </Grid>

        

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/premium-vector/doodle-comic-explosion-cartoon-hand-drawn-comic-speech-bubbles-with-text-sale-isolated-white-background-web-posters-banners-concept-design-vector-illustration_36380-1395.jpg?w=1380" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-vector/pack-money-sketches_23-2147631757.jpg?w=1380&t=st=1681607358~exp=1681607958~hmac=505a34e16208a401fded545da0b270ceb287b31e6ef1d3318c49feb6ed730bfd" /></Item>

        </Grid>

      </Grid>
    </Box>
    <br/>
    <br/>
    <Carousel fade>
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
              </Carousel>
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
