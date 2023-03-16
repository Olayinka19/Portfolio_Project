import { React } from "react";
// import "animate.css";
import "./Home.css";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from "react-bootstrap/Carousel";
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Animation from "../Components/Animation";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const API = process.env.REACT_APP_API_URL;

function Home() {
  
  return (
    <>
    <div>
    <Card className="home-container text-center">
      
      <Card.Body>
        <Card.Text>Looking for great Tech deals on high-quality<img src="https://cdn-icons-png.flaticon.com/512/9756/9756673.png" width="30px" height="30px"></img> products? Look no further than<img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/324/324999.png"></img>  <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <Button variant="success"><Animation /></Button> */}
      </div></Card.Text>
        
        <Card.Text><Button className="header-button" variant="success">Shop smarter, shop Ahead <img src="https://cdn-icons-png.flaticon.com/512/9485/9485813.png" width="30px" height="30px"></img> </Button></Card.Text>
        
        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="first-image" 
          src="https://img.freepik.com/free-photo/handheld-shot-african-american-streamer-talking-headset-while-online-playing-first-person-shooter-gaming-pc-setup-gamer-girl-streaming-while-sitting-gaming-chair-explaining-gameplay_482257-46568.jpg?w=1060&t=st=1675669717~exp=1675670317~hmac=74d4100866287487a15fcd751e688a2f6cca59c339da640dfaa5798c8ef8b723"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/61SWl0bpXaL._AC_SL1500_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/71PXusfITyL._AC_SX679_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/611eCV2eTDL._AC_UL800_FMwebp_QL65_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/710yeNqefxL._AC_UY436_FMwebp_QL65_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
      </Card.Body>
    </Card>
    <br/>
    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button variant="success"><Animation /></Button>
      </div> */}
      
      <br/>
<div style={{ display: 'flex', justifyContent: 'center' }}>
      <ImageList sx={{ width: 390, height: 450 }} cols={3} variant="woven" rowHeight={164}>
      {itemData2.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>

    
  
      <hr/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="success"><Animation /></Button>
      </div>
      <br />
      <div style ={{display: 'flex', justifyContent: 'center' }}>
   <Card style={{ width: '48rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91y1S6m0+JS._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>MerryColor Pillow</Card.Title>
        <Card.Text>
          
Merrycolor Boho Lumbar Throw Pillow Cover 12x20
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
     
      </Card.Body>
    </Card>
    </div>
    {/* <Button variant="success"><h1>10-50% off all Items!!!!🤯</h1></Button> */}
    <hr/>
    <div style ={{display: 'flex', justifyContent: 'center' }}>
    
   <Button variant="success"><Animation /></Button> 
    </div>
    <hr/>
    
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <ImageList sx={{ width: 390, height: 450 }}  cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
 
      <br/>
      <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card className="text-center">
      <Card.Header><h1><Button variant="success"><h2>Limited Time Offer 10 - 50% off all items!!🤯</h2></Button></h1></Card.Header>
      {/* <Card.Img variant="top" src="https://m.media-amazon.com/images/I/8101kmkFW0L._AC_SL1500_.jpg" /> */}
      <img width="100%" height="400px" className='blog' src="https://m.media-amazon.com/images/I/8101kmkFW0L._AC_SL1500_.jpg"></img>
      <Card.Body>
        <Card.Title>Special Sales Ending Soon!!</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="success"><a href="https://amzn.to/3YBfgEG"><b>$22.99 </b><span font-size="5px"></span></a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">7 days ago</Card.Footer>
    </Card>
    </div>
    <br/>
      <br/>

  
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button variant="success"><Animation /></Button>
      </div>
      <marquee direction="up" style={{ display: 'flex', justifyContent: 'center',  borderRadius: '50%' }}>
      <img
            width="171"
            height="180"
            alt="171x180"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2"
          />
      </marquee>


    </div>
    <br></br>
   
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button variant="success"><Animation /></Button>
      </div>
   
    <hr/>
<marquee direction="left"> 

<img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bcc3ac778d99441f9e736b800f5a79fd80ef8bbe1e620e6d690a369ef6fc928c._UY500_UX667_RI_V_TTW_SX658_.jpg" width="190px" height="190px"></img>

<img src="https://m.media-amazon.com/images/I/511WjJ8gjwL.jpg" width="190px" height="190px"></img>
<img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5ca7154c02b0f7da7e0eaad7162c44a0a88299e56e2a9fc205ef1fb246988458._UY500_UX667_RI_V_TTW_SX532_.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/51YWDJl1bkL.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/51Mc--F6zGL.jpg" width="190px" height="190px"></img>
 {/* <img src="https://m.media-amazon.com/images/I/71oxAUe02WL._AC_SX679_.jpg" width="190px" height="190px"></img> 
<img src="https://m.media-amazon.com/images/I/81sAVGJu8ZL._AC_SX679_.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/71L08j1yhSL._AC_SX679_.jpg" width="190px" height="190px"></img>  */}



</marquee>
<hr></hr>
 {/* <br/> */}
 <br/>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="success"><Animation /></Button>
      </div>
    <hr></hr>
   <div className="container">
   <div>
  
      <br />
    
   </div>


   </div>
   <hr></hr>
   <div style={{ display: 'flex', justifyContent: 'center' }}>
   <Button variant="success"><Animation /></Button>
      </div>
      <hr/>
<div style ={{display: 'flex', justifyContent: 'center' }}>
   <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81c7cWWOycL._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Queen Size Platform Bed Frame</Card.Title>
        <Card.Text>
        Fabric Upholstered Headboard and Wooden Slats Support
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="https://amzn.to/3ZALVva"><Button variant="success">Learn More</Button></Card.Link>
        <Card.Link href="#">TOP🔝</Card.Link>
      </Card.Body>
    </Card>
    </div>
   <Card className="text-center">
      {/* <Card.Header><Button variant="success">Shop Smart, Shop Ahead 🤩!</Button></Card.Header> */}
      <Card.Body>
        {/* <Card.Title><Button variant="success"><Animation /></Button></Card.Title> */}
        <h2>Trending Now</h2>
        <hr/>
        <Card.Text>
        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/718RFxZmX9L._SL1000_.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://img.freepik.com/free-photo/grilled-chicken-wooden-board-potato-tomato-pepper-chili-sauce-side-view_141793-3130.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://img.freepik.com/free-photo/grilled-lamb-tomato-pepper-potato-rosemary-sauces-side-view_141793-3743.jpg?t=st=1675670297~exp=1675670897~hmac=401bf98ac7a930367b29c8acb99c9d098677a2c229a61eb235837907615d3cbb"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://img.freepik.com/premium-photo/red-yellow-mug-with-mulled-wine-fruits-spices-are-all-around-wooden-table-yellow-lights-garlands-are-burning_427967-521.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://img.freepik.com/free-photo/young-beautiful-couple-woman-kissing-man-sitting-table-with-cups-tea-happy-love-christmas-decorated-room-with-christmas-tree-background_141793-42497.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
        </Card.Text>
        <Button variant="success"><a href="https://amzn.to/3ypXAkY"><h3>Explore</h3></a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">12 days ago</Card.Footer>
    </Card>

    
    
    

   
   
    <div>
      
      <Card>
       
        
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card.Title><Button variant="success"><Animation /></Button></Card.Title>
      </div>
      <Card.Link href="#"><Button variant="success">TOP🔝</Button></Card.Link>
    </div>
    <hr></hr>
    
  
    </div>
    </>
  );
}
const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/81bZ-ZaQb9L._AC_SX679_.jpg',
    title: 'Tide Pods',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61gaNdRj0OL._SL1500_.jpg',
    title: 'BWater Wipes',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71c3wsV98rL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    title: 'Baby Wipes',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91edFRbvyIL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41q91ld1d6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Hats',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51lGq+i-BKL._SY344_BO1,204,203,200_.jpg',
    title: 'Honey',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61aQPrW-+rL._AC_UL640_QL65_.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61S+-V9lowL._AC_UY436_QL65_.jpg',
    title: 'Fern',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71h37mxNQmL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41ZjUOH6nRL._AC_UL640_FMwebp_QL65_.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71S1Cyt9QhL._AC_UL640_FMwebp_QL65_.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
const itemData2 = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];


export default Home;
