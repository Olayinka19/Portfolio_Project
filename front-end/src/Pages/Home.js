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
import UFO_Video from "../Components/UFO_Video";
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
              <h3>Here's my Software Engineering Portfolio Projects and Podcast</h3>
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
     
<div className="sample-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
<div className="polaroid">
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1.awsstatic.com%2Fdeepracer%2FSilverstone%2FDeepRacer_Chrome_Small_rgb.aa9b2a3bee64dae2d593ebf74133277b2811a42e.png&f=1&nofb=1&ipt=9d801eadd170102ac3c3d33dacbea690dec53f6af15820d0fe33d34800fe7ed3&ipo=images" alt="Norway" width="100%"></img>
<div class="polaroid-container">
    
  </div>
</div>
       
        </div>


        </div>
        <br/>
        <br/>
        <Video />
       
        <div className="sample p-7" >
        <div className="sample-item"><iframe src="https://podcasters.spotify.com/pod/show/olayinka-fakanbi/embed/episodes/The-AI-Explorer-e26b765" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
        </div>
        <div className="sample-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <h2>Welcome to the AI Explorer Podcast! Join us on a thrilling journey through the exciting world of artificial intelligence. Engaging discussions, fascinating guests, and mind-expanding insights await! Tune in now!.</h2> */}
        </div>
        <div className="sample-item"><img width="350px" height="220px" src="https://static.wixstatic.com/media/fcd429_169abd10d5f443cfae2afa4a0b95e8c9~mv2.gif" alt="First slide" />
        
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
        {/* <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .</h2> */}
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
        <div className="sample-item"><img width="350px" height="220px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1.awsstatic.com%2Fdeepracer%2FSilverstone%2FDeepRacer_Chrome_Small_rgb.aa9b2a3bee64dae2d593ebf74133277b2811a42e.png&f=1&nofb=1&ipt=9d801eadd170102ac3c3d33dacbea690dec53f6af15820d0fe33d34800fe7ed3&ipo=images" alt="First slide" />
        
        </div>
        -

        <div className="sample-item"><img width="350px" height="220px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcsR4l4P1vT4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=97296e21eb310351ea8c59739e143f27bb1900f240e725655d9758b895218f0e&ipo=images"  alt="First slide"/></div>
        
        <div className="sample-item">
        <img width="350px" height="220px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpythonawesome.com%2Fcontent%2Fimages%2Fsize%2Fw960%2F2021%2F09%2FRealtime-Face-Anti-Spoofing-Detection.jpg&f=1&nofb=1&ipt=f3d91600a679ae831544f8a5cd6a47e4b5f3f1ad55bb502043cf92131754f236&ipo=images"  alt="First slide"/>
        </div>
        {/* <div>
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div> */}

        </div>
        <br/>
            <div className="sample p-7">
        <div className="sample-item"><img width="350px" height="220px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpublic-files.gumroad.com%2Fvariants%2Frpkm39y1m3jzlxufroqp7fkwdw3u%2F3298c3eb001bbed90f1d616da66708480096a0a1b6e81bd4f8a2d6e9b831d301&f=1&nofb=1&ipt=bccf5053a4afaa9bcb0b38416b180616b8d7f2ad9636ca97dcdc2271c3cac55d&ipo=images" alt="First slide" />
        
        </div>
        <div className="sample-item">
        <img width="350px" height="220px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmeethub.bnext.com.tw%2Fwp-content%2Fuploads%2F2021%2F12%2FMeta-%25E5%2590%2591%25E7%2594%25A8%25E6%2588%25B6%25E9%2596%258B%25E6%2594%25BE%25E4%25BA%2586-Spark-AR-Go-%25E6%25B8%25AC%25E8%25A9%25A6%25E7%2589%2588%25E6%259C%25AC.jpg&f=1&nofb=1&ipt=235f90d03c22662a4a49ebabb46bd749af4a8a110a1516569b9b4181f0af18f7&ipo=images"  alt="First slide"/>
        </div>
        -

        <div className="sample-item"><img width="350px" height="220px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdigitalpress.fra1.cdn.digitaloceanspaces.com%2Febxq6f0%2F2022%2F11%2F02.jpeg&f=1&nofb=1&ipt=0a0377acae380e8cd776a461a90a67c3f965cf792132bb74f010f129d3601079&ipo=images"  alt="First slide"/></div>
        
        
        {/* <div>
        <img width="350px" height="220px" src="https://images.pexels.com/photos/7046716/pexels-photo-7046716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="First slide"/>
        </div> */}

        </div>
        </div>
        <br/>
        <div className="homepage-container">
        {/* <span className="img-homepage-container">
          <img src="http://placehold" />
        </span> */}

        </div>
        {/* <Skeleton
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
/> */}
<h1>
  Meta AR Spark UFO_3D Project 
</h1>
<UFO_Video />

<div className="polaroid">

</div>

<div className="card-container">
<div className="card-text">
  <div className="header-text">
    <h4><a href="https://student.deepracer.com/leaderboard/arn%3Aaws%3Adeepracer%3A%3A%3Aleaderboard%2Ff425dfc2-c6b0-4102-ad35-c2c28a1cbd17"><Button>Try Effect on Facebook and Instagram</Button></a></h4>
  </div>

  <div class="text-container">
    <p>Meta AR Spark</p>
    
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
       7 ChatGPT Prompts to ace your next interview
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
        
          <a href="https://masonmei.wixsite.com/pursuitconnect/post/faho-blog " >ChatGPT Prompt</a>
  
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

      <h1>Exploring the Impact of Artificial Intelligence on Society</h1>
      <p>
      Artificial Intelligence (AI) has become a buzzword in recent years, but what exactly is it and how does it impact society? In this blog, we will take a deep dive into the world of AI and explore its various applications. From understanding the different types of AI to examining its use in healthcare, we will cover it all. Additionally, we will look at the history of AI and its portrayal in fiction. Whether you are curious about the current uses of AI or want to gain insights into its future potential, this blog will provide you with valuable information. Join us as we unravel the fascinating world of artificial intelligence and its impact on society
      </p>
        </div>
        <div>
          <h2>What Is Artificial Intelligence (AI)?</h2>
          <p>Artificial Intelligence (AI) is the simulation of human intelligence in machines. It enables machines to perform tasks that require human intelligence like problem-solving and decision-making. AI can be categorized into narrow AI, designed for specific tasks, and general AI, capable of any intellectual task a human can do. Examples include virtual assistants, self-driving cars, and image recognition systems.</p>
        </div>
        <div>
          <h2>History</h2>
          <p>The history of artificial intelligence (AI) dates back to the 1950s when researchers began exploring the idea of creating machines that could simulate human intelligence. Early applications of AI included computer programs capable of playing chess and solving complex mathematical problems. Over the years, AI technologies have evolved significantly, leading to breakthroughs in various industries. However, the rise of AI has also raised ethical considerations, such as concerns about job displacement and privacy issues. Despite these challenges, AI holds great potential for improving efficiency and driving advancements in healthcare. Policymakers and organizations play a crucial role in shaping the future of AI and ensuring that its benefits are maximized while potential risks are mitigated.</p>
        </div>

        <div>
          <h2>Social intelligence</h2>
          <p>Artificial intelligence has the potential to enhance social intelligence by analyzing human behavior and social interactions. It refers to the ability of machines to understand, interpret, and respond appropriately to human emotions and social cues. This AI-powered social intelligence can be utilized in various fields including customer service, healthcare, and education. However, its development also raises ethical considerations regarding privacy, data protection, and the potential for manipulation. As AI continues to advance, it is crucial to strike a balance between leveraging social intelligence for societal benefits while addressing the associated challenges.</p>
        </div>

        <div>
          <h2>Smart traffic lights</h2>
          <p>Smart traffic lights utilize artificial intelligence algorithms to optimize traffic flow and alleviate congestion. These intelligent traffic systems have the ability to adapt in real-time to changing traffic patterns, ensuring efficient movement of vehicles and prioritizing emergency vehicles when necessary. By reducing idle time at intersections, smart traffic lights contribute to a decrease in fuel consumption and greenhouse gas emissions. Additionally, these advancements in traffic management not only save commuters valuable time but also enhance overall productivity. The implementation of smart traffic lights marks a significant leap towards the creation of smarter and more sustainable cities.</p>
        </div>

        <div>
          <h2>AI Trends to Watch in 2023</h2>
          <p>In 2023, there are five noteworthy AI trends that we should keep an eye on. Firstly, the use of AI-powered diagnosis is gaining traction in the healthcare industry. This technology allows AI to analyze medical images and data, aiding doctors in making accurate diagnoses. Secondly, precision medicine is becoming more prevalent, thanks to AI algorithms. These algorithms can identify personalized treatment plans based on individual patient data, leading to more effective and tailored healthcare. Thirdly, telemedicine and chatbots are revolutionizing the way healthcare is delivered. AI enables remote consultations and automated patient interactions, making healthcare more accessible and convenient. Additionally, AI is playing a crucial role in drug discovery. By leveraging AI algorithms, the process of identifying new drugs and treatments can be accelerated. Lastly, AI is streamlining healthcare administration. Administrative tasks such as scheduling appointments and managing medical records can be efficiently handled by AI, freeing up time for healthcare professionals to focus on patient care. These AI trends are set to shape the future of healthcare and have a profound impact on society.</p>
        </div>


        <div>
          <h2>Risks</h2>
          <p>Artificial intelligence (AI) comes with inherent risks that need to be addressed and mitigated. One of the primary concerns is job displacement, as AI has the potential to automate tasks currently performed by humans, leading to unemployment in certain industries. Privacy is another major risk, as AI systems often require access to large amounts of personal data, which raises concerns about the security and protection of that information. The potential for misuse of AI technology also poses ethical dilemmas, particularly with the development of deepfake technology that can create realistic yet fake videos for harmful purposes. Additionally, if not properly monitored and regulated, AI algorithms can perpetuate biases and discrimination. As AI continues to advance, there is a risk of losing control over the technology and its impact on society.</p>
        </div>


        <div>
          <h2>Technological unemployment</h2>
          <p>Technological unemployment refers to the displacement of human workers by machines and AI systems. This concern about job loss due to AI automation has been present since the Industrial Revolution. The impact of technological unemployment on society is a topic of ongoing debate and research. Some argue that AI will create new job opportunities, while others believe it will lead to widespread unemployment. As we continue to advance in AI technology, it is important to consider potential societal implications and develop strategies to address the challenges posed by AI automation. By understanding the risks and benefits associated with AI, we can navigate the future of work in a way that maximizes the benefits while minimizing the potential negative effects.</p>
        </div>

        <div>
          <h2>Bad actors and weaponized AI</h2>
          <p>aponized AI is a growing concern as AI technology advances. The potential for AI to be misused by individuals or groups with malicious intent raises ethical considerations. Balancing the benefits of AI with the risks of weaponization requires proper regulation and accountability. Safeguards must be put in place to prevent misuse of AI. Addressing the challenges posed by weaponized AI requires collaborative efforts and international cooperation. By considering these factors, society can navigate the potential risks of bad actors exploiting AI technology.</p>
        </div>
        <div>
          <h2>Existential risk</h2>
          <p>The ongoing debate and concern surrounding the potential risks and dangers of artificial intelligence have raised discussions about existential risks. Some experts believe that uncontrolled and unregulated AI could pose existential risks to humanity. The development of superintelligent AI systems, surpassing human intelligence, raises concerns about their uncontrollability. To address these risks, prioritizing research and discussions on risk mitigation and safe deployment of AI technology is crucial. Collaboration between AI researchers, policymakers, and ethicists is essential to tackle the existential risks associated with AI. By focusing on these measures, we can ensure the responsible development and use of AI</p>
        </div>
        <div>
          <h2>Copyright</h2>
          <p>Copyright laws have been challenged by the rise of AI-generated content. The ease with which individuals can create and distribute copyrighted material without permission has increased due to AI. Copyright infringement cases involving AI are complex given the involvement of algorithms and machine learning. The development of AI has prompted discussions on the need to update copyright laws to address these challenges. Organizations and policymakers are exploring ways to strike a balance between protecting intellectual property and harnessing the potential of AI.</p>
        </div>
        <div>
          <h2>How AI Can Fight Phone Fraud</h2>
          <p>AI has emerged as a powerful tool in the fight against phone fraud. With its ability to analyze phone calls in real-time, AI can detect fraudulent activity and protect customers from scams. Machine learning algorithms enable AI to identify patterns and anomalies in phone conversations, allowing it to flag potential fraud. Moreover, AI-powered voice recognition technology authenticates callers, preventing identity theft. Automated voice bots equipped with AI can handle high call volumes and quickly identify suspicious behavior. The continuous learning and adaptability of AI make it an effective weapon against evolving fraud techniques. By harnessing the power of AI, we can take significant steps towards combating phone fraud and safeguarding individuals' financial security and privacy.</p>
        </div>
        <div>
          <h2>Conclusion</h2>
          <p>In conclusion, artificial intelligence has revolutionized various industries and has the potential to reshape our society in the future. From improving healthcare outcomes to enhancing productivity and efficiency in various sectors, AI is making significant contributions. However, it also raises concerns about ethics, privacy, and job displacement. As we continue to explore the capabilities of AI, it is crucial to have ongoing discussions and regulations to ensure its responsible and ethical use. By understanding the impact of AI on society, we can harness its potential for the greater good while addressing the challenges that arise along the way.</p>
        </div>

        <div>
          <h2>How Is AI Used Today?</h2>
          <p>AI is widely used across industries like healthcare, finance, and transportation. In healthcare, it aids in medical diagnosis, drug discovery, and personalized treatment plans. Finance benefits from AI through fraud detection, algorithmic trading, and customer service chatbots. Transportation utilizes AI for autonomous vehicles, route optimization, and traffic management systems.</p>
        </div>
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

const itemData = [
  {
  img: 'https://i.seadn.io/gae/xlTiRF60IuNOYj-MZNJbWNG1lLlNhbZvKu-xARt-VoLeIbrkqA6NWo81BqLYZbye8UoezRBQtdvIa9cLV9scLdFuPTtyBZS5vI9_?',
  title: 'Kobe Byrant #9385',
  link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/88773762375852173183414282271947564872720544888992087052403817795220452409345',
  creator: '@Mesmerizer',
  owner: 'BeliverR'
},
{
  img: 'https://i.seadn.io/gae/he8qT1XI9qxy_6e0wqkwBVETj3cfjLvBhrh167taPfLygt6N5fxQrdwPwc1yB6C5AECngSe0y7mqDuBZ217v-T7UjSJ2d9w6OlJ7?',
  title: 'Crazy Bored Ape Club',
  creator: '@D23DE7',
},
{
  img: 'https://i.seadn.io/gae/gDwIvKKSqRvtzZSvl0AbCQ1nNg4_tKtMcS7Ww7sdGHuRWpUs5BwDfSq5Otr0DtoScxWYEu3ZUo3goPysTxchvhF57lK77DxamoE9oA?',
  title: 'Dwayne Johnson',
  creator: '@rollelflex_graphy726',
},
{
  img: 'https://i.seadn.io/gae/TVx1lNPoUphE8EgexDpim_3iNTWsaHRCf35dy4xM_r0mvKI7MmQQcfb4cP5AkHqNBwSLveXVTwo3aUkqcfHWvNYQz7xKkGUEkycJmVo?auto=format&w=384',
  title: 'Burger',
  creator: '@rollelflex_graphy726',
},
{
  img: 'https://i.seadn.io/gae/TVx1lNPoUphE8EgexDpim_3iNTWsaHRCf35dy4xM_r0mvKI7MmQQcfb4cP5AkHqNBwSLveXVTwo3aUkqcfHWvNYQz7xKkGUEkycJmVo?auto=format&w=384',
  title: 'Burger',
  creator: '@rollelflex_graphy726',
},
{
  img: 'https://i.seadn.io/gae/TVx1lNPoUphE8EgexDpim_3iNTWsaHRCf35dy4xM_r0mvKI7MmQQcfb4cP5AkHqNBwSLveXVTwo3aUkqcfHWvNYQz7xKkGUEkycJmVo?auto=format&w=384',
  title: 'Burger',
  creator: '@rollelflex_graphy726',
},
{
  img: 'https://i.seadn.io/gae/TVx1lNPoUphE8EgexDpim_3iNTWsaHRCf35dy4xM_r0mvKI7MmQQcfb4cP5AkHqNBwSLveXVTwo3aUkqcfHWvNYQz7xKkGUEkycJmVo?auto=format&w=384',
  title: 'Burger',
  creator: '@rollelflex_graphy726',
},
{
  img: 'https://i.seadn.io/gae/TVx1lNPoUphE8EgexDpim_3iNTWsaHRCf35dy4xM_r0mvKI7MmQQcfb4cP5AkHqNBwSLveXVTwo3aUkqcfHWvNYQz7xKkGUEkycJmVo?auto=format&w=384',
  title: 'Burger',
  creator: '@rollelflex_graphy726',
},

];

export default Home;
