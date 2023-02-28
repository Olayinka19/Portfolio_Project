import { React } from "react";
// import "animate.css";
import "./Home.css";

// import axios from "axios";
// import { ListGroup } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Animation from "../Components/Animation";
// import PortfolioDetails from "../Components/PortfolioDetails";
// import Portfolios from "../Components/Portfolios";
// import { useState, useEffect } from "react";



const API = process.env.REACT_APP_API_URL;

function Home() {
  
  return (
    <>
    <div>
    {/* ========>Animation */}



    {/* =====================>Animations */}
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
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/8101kmkFW0L._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Special Sales Ending Soon!!</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="warning">Sales</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>


    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61s7RGRwSoL._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>BOHON LED Desk Lamp</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="warning">Sales</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71IuBrKaiAL._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Special Sales Ending Soon!!</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="warning">Sales</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
    <br></br>

<marquee> 50% Special Sale Ending Soon!!</marquee>
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
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    <hr></hr>
   <div className="container">
   <div>
   <Card>
        <Card.Body>
          <Card.Text>
            20% off Gaming Laptop on Sale!!!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://img.freepik.com/free-psd/food-menu-restaurant-social-media-cover-template_120329-1339.jpg?t=st=1675662336~exp=1675662936~hmac=ce3c7216c0b3db561d25df9a17643642b95c5ab592126d85f9f36d46fdec291d" />
      </Card>
   </div>
   <Card className="text-center">
      <Card.Header>Top Deal</Card.Header>
      <Card.Body>
        <Card.Title>50% off Special Offer for Just You!!</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Img variant="bottom" src="https://img.freepik.com/premium-psd/food-menu-restaurant-social-media-post-banner-template-design_502432-42.jpg?w=1060" />
  
        <Button variant="warning">Sales</Button>
        
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      
    </Card>


  

   </div>
   <hr></hr>
<div style ={{display: 'flex', justifyContent: 'center' }}>
   <Card style={{ width: '48rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71+Uwfg5yjL._AC_SL1500_.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
   <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Valentine's day Gift</Card.Title>
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
        <Button variant="danger">Explore</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
<div style ={{display: 'flex', justifyContent: 'center' }}>
    <Card className="bg-dark text-white" style={{ width: '48rem' }}>
      <Card.Img src="https://m.media-amazon.com/images/I/81rHiF5V2mL._AC_SL1500_.jpg" alt="Card image" />
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
      <Card.Img src="https://m.media-amazon.com/images/I/81ZU4ARUwQL._AC_SX679_.jpg" alt="Card image" />
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
    <h3>Frequently asked questions</h3>
    <div>
      How to contact me?
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61I3kfBACML._AC_UL1500_.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
    <hr></hr>
    {/* <p>For general questions, contact me at <a href="mailto:olayinkafakanbi@pursuit.org" target="_blank" rel="noreferrer"><b>Olayinkafakanbi@pursuit.org</b></a> I'll get back to you within 1 business day. For business refereral and ther professional purposes.</p> */}
    </div>
    </div>
    </>
  );
}



export default Home;
