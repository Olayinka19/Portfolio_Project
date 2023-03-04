import { React } from "react";
// import "animate.css";
import "./Home.css";

// import axios from "axios";
// import { ListGroup } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import Button from '@mui/material/Button';
import Animation from "../Components/Animation";
// import PortfolioDetails from "../Components/PortfolioDetails";
// import Portfolios from "../Components/Portfolios";
// import { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const API = process.env.REACT_APP_API_URL;

function Home() {
  
  return (
    <>
    <div>
    <Card className="home-container text-center">
      <Card.Header>AheadShoping</Card.Header>
      <Card.Body>
        <Card.Text>Shop Smarter, Not Harder: Your Ultimate Guide to Tech Products on Amazon!</Card.Text>
        
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
      </div>
      
      <br/>

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

    
  
      <hr/>

      <div style ={{display: 'flex', justifyContent: 'center' }}>
   <Card style={{ width: '48rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91y1S6m0+JS._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>MerryColor Pillow</Card.Title>
        <Card.Text>
          
Merrycolor Boho Lumbar Throw Pillow Cover 12x20
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
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
 
      <br/>
      <div style={{ justifyContent: 'center' }}>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/8101kmkFW0L._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Special Sales Ending Soon!!</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="contained"><a href="https://amzn.to/3SRUBLG"><b>$350 </b><span font-size="5px"><del>200</del></span></a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">7 days ago</Card.Footer>
    </Card>


    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71rtUgIGEhL._AC_SX679_.jpg" />
      <Card.Body>
        <Card.Title>BOHON LED Desk Lamp</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="contained"><a href="https://amzn.to/3muOPU8"><b>$46.97 </b><span font-size="5px"><del></del></span></a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <iframe width="100%" height="251" src="https://www.youtube.com/embed/pz88bqPocWI" title="Amazon Best Kitchen Gadgets For Every Home #18 🏠Appliances, Makeup, Smart Inventions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <Card className="text-center">
      <Card.Header>15% Off </Card.Header>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71IuBrKaiAL._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Levotar LED Desk Lamp for Home Office</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="contained"><a href="https://amzn.to/3EWMebG"><b>$56.08 </b><span font-size="5px"><del>65.98</del></span></a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
    <br></br>
    <h4>Amazon Prime Videos</h4>
<marquee direction="left"> 

<img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bcc3ac778d99441f9e736b800f5a79fd80ef8bbe1e620e6d690a369ef6fc928c._UY500_UX667_RI_V_TTW_SX658_.jpg" width="190px" height="190px"></img>

<img src="https://m.media-amazon.com/images/I/511WjJ8gjwL.jpg" width="190px" height="190px"></img>
<img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5ca7154c02b0f7da7e0eaad7162c44a0a88299e56e2a9fc205ef1fb246988458._UY500_UX667_RI_V_TTW_SX532_.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/51YWDJl1bkL.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/51Mc--F6zGL.jpg" width="190px" height="190px"></img>
{/* <img src="https://m.media-amazon.com/images/I/71oxAUe02WL._AC_SX679_.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/81sAVGJu8ZL._AC_SX679_.jpg" width="190px" height="190px"></img>
<img src="https://m.media-amazon.com/images/I/71L08j1yhSL._AC_SX679_.jpg" width="190px" height="190px"></img> */}



</marquee>
 <br/>
 <br/>
<Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91pEkoBJiwL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>NSdirect 36 inches Round Coffee Table</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 30 mins ago</small>
        </Card.Footer>
      </Card>
    <hr></hr>
   <div className="container">
   <div>
   <Card>
        <Card.Body>
          <Card.Text>
            20% off  Sale!!!
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://m.media-amazon.com/images/I/71m-r6CHobL._AC_UL1500_.jpg" />
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Adidas
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/b13c180d-c494-4596-b5c6-9ddd1f83ccf7/bc145784-3faf-4242-8788-4c25e2c3937f/media._SL850_FMjpg_.jpeg" />
      </Card>
   </div>
   <Card className="text-center">
      <Card.Header>DREAM PAIRS</Card.Header>
      <Card.Body>
        <Card.Title>Soccer Shoes</Card.Title>
        <Card.Text>
        Men's Firm Ground Soccer Cleats
        </Card.Text>
        <Card.Img variant="bottom" src="https://m.media-amazon.com/images/I/81-QcRvPZlL._AC_UL1500_.jpg" />
        <Button variant="success"><b>$37.99 </b><span fontSize="10px"><del>$42.99</del></span></Button>
      </Card.Body>
      <Card.Img variant="bottom" src="https://m.media-amazon.com/images/I/61BeIFQYb+L._AC_SX679_.jpg" />
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */} 
    </Card>


  

   </div>
   <hr></hr>
<div style ={{display: 'flex', justifyContent: 'center' }}>
   <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81c7cWWOycL._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Queen Size Platform Bed Frame</Card.Title>
        <Card.Text>
        Fabric Upholstered Headboard and Wooden Slats Support
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Card.Link href="https://amzn.to/3ZALVva"><Button variant="success">Learn More</Button></Card.Link>
        <Card.Link href="#">TOP🔝</Card.Link>
      </Card.Body>
    </Card>
    </div>
   <Card className="text-center">
      <Card.Header>Deli Store</Card.Header>
      <Card.Body>
        <Card.Title><Animation/></Card.Title>
        <Card.Text>
        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="first-image" 
          src="https://img.freepik.com/free-photo/side-view-meat-kebab-with-grilled-potatoes-vegetables-with-sauce-fire-board_141793-5006.jpg?t=st=1675670177~exp=1675670777~hmac=e3d7d0194af5a99fe30e2474a4f5abb051c2126e4db8b5bd51252ca8bf440327"
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
        <Button variant="success">Explore</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
<div style ={{display: 'flex', justifyContent: 'center' }}>
    <Card className="bg-dark text-white" style={{ width: '48rem' }}>
      <Card.Img className="adidas-image" src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/48f8cd8e-e36e-4c10-8090-93b6028923f6._SL850_FMjpg_.jpg" alt="Card image" />
      <Card.ImgOverlay>
        {/* <Card.Title>Card title</Card.Title> */}
        {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text> */}
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" style={{ width: '48rem' }}>
      <Card.Img  src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/bef41244-8c29-416d-a142-11fcc1605b8e._SL850_FMjpg_.jpg" alt="Card image" />
      <Card.Img src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/82a41677-a4de-42a8-9213-b38516fb452f._SL850_FMjpg_.jpg" alt="Card image" />
      <Card.ImgOverlay>
        {/* <Card.Title>Card title</Card.Title> */}
        {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text> */}
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
    </div>
    
    
    

    <div className="footer-wrapper" >
    <Button variant="contained"><h3>Adidas Sportswear</h3></Button>
    {/* <Button variant="contained">All that you are.</Button>
     */}
     <img height="50px"  width="100%" src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/1/AmazonStores/ATVPDKIKX0DER/2e9daadbb920e616d81468b2d3457db1.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.jpg"></img>
    {/* <p></p> */}
    <div>
      
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/72f3d7a7-6557-4a45-8bb3-a1cf9f1d8c9b._SL850_FMjpg_.png" />
        <Card.Body>
          {/* <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card.Link href="#"><Button variant="contained">TOP🔝</Button></Card.Link>
    </div>
    <hr></hr>
    
    {/* <p>For general questions, contact me at <a href="mailto:olayinkafakanbi@pursuit.org" target="_blank" rel="noreferrer"><b>Olayinkafakanbi@pursuit.org</b></a> I'll get back to you within 1 business day. For business refereral and ther professional purposes.</p> */}
    </div>
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
