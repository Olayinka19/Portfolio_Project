import { React } from "react";
import "animate.css";
import "./Home.css";

import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Animation from "../Components/Animation";
import PortfolioDetails from "../Components/PortfolioDetails";
// import portfolios from "../../../back-end/controllers/portfolioController";


function Home() {
  
  return (
    <div>
    <Card className="home-container text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Phasellus faucibus scelerisque eleifend donec. Montes nascetur ridiculus mus mauris vitae. Luctus accumsan tortor posuere ac ut consequat. Integer enim neque volutpat ac tincidunt vitae. Porttitor massa id neque aliquam vestibulum morbi
        
        </Card.Text>
        
        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/611kQoDpXfL._AC_UL640_FMwebp_QL65_.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/714s4ksW5GL._AC_SL1500_.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/51d7aXIXJ9L._SL1000_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/51d7aXIXJ9L._SL1000_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/81BMDuDevnL._AC_SX679_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/41nfehGeONL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
      </Card.Body>
    </Card>
      <Animation />

      <br/>
      <div className="wrapper">
      <CardGroup>
      
      
      <Card className="display-flex container">
        <Card.Img className="card-container" variant="top" src="https://m.media-amazon.com/images/I/51fvNqvlFCL._AC_SL1500_.jpg" />
        <Card.Body>
          <Card.Title>Surge Protector, Outlet Extender with Night Light USB.</Card.Title>
          <Card.Text>
          You get 4 USB charging ports (1 USB C) and 5 wide-spaced outlets.
          </Card.Text>
          <Card.Link href="https://www.amazon.com/Protector-Extender-Addtam-5-Outlet-Splitter/dp/B09XMMZSWW/ref=sr_1_13?keywords=gadgets&qid=1674539969&sr=8-13"><Button>Buy Now</Button></Card.Link>
        
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
     

        
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71O++mDl2LL._AC_SL1452_.jpg" target="_blank" rel="noopener"/>
        <Card.Body>
          <Card.Title>Monocular Telescope High Power 8x42 Monoculars Scope Compact Portable Waterproof Fogproof Shockproof.</Card.Title>
          <Card.Text>
          High quality precision design featuring all glass high end optics, (FMC Superior BAK-4 Green Film Prism).{' '}
          </Card.Text>
          <Card.Link href="https://www.amazon.com/Monocular-Telescope-Monoculars-Waterproof-Shockproof/dp/B075WNJGCQ/ref=sr_1_28?crid=2M2104K1VLEBL&keywords=coding%2Bgadgets%2Bfor%2Bmen&qid=1674543035&sprefix=Coding%2Bgadgets%2Caps%2C116&sr=8-28&th=1" target="_blank" rel="noopener"><Button variant="primary">Buy Now</Button></Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      

      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71H3miSK4BL._AC_UL640_FMwebp_QL65_.jpg" />
        <Card.Body>
          <Card.Title>Red Heart Brown Teddy Bear </Card.Title>
          <Card.Text>
          🎀Cute Valentines gifts for her: Handmade with high quality soft plush cover and stuffed with healthy material, create with extra-strong stitching,maintaining permanent elastic extrusion prevention. 
          </Card.Text>
          <Card.Link href="https://www.amazon.com/Fianc%C3%A9e-Girlfriend-Friends-Birthday-Valentines/dp/B09JW319PP/ref=sr_1_11?crid=2L5A2OZEFURT&keywords=valentines+day+gifts&qid=1674554720&sprefix=valenti%2Caps%2C132&sr=8-11" target="_blank" rel="noopener" ><Button>Buy Now</Button></Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      
    </CardGroup>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special Sales Ending Soon!!</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="warning">Sales</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>



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
        <Card.Img variant="bottom" src="https://m.media-amazon.com/images/I/71FpaWQCVHL._AC_SL1500_.jpg" />
      </Card>
   </div>
   <Card className="text-center">
      <Card.Header>Top Deal</Card.Header>
      <Card.Body>
        <Card.Title>50% off Special Offer for Just You!!</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="warning">Sales</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      
    </Card>


  

   </div>
   <hr></hr>
   <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Valentine's day Gift</Card.Title>
        <Card.Text>
        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/71Zib7chKVS._AC_UY879_.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/71H3miSK4BL._AC_UL640_FMwebp_QL65_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/81dPXWkTSUL._AC_SX679_.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/719rjcpbx1L._AC_UL640_FMwebp_QL65_.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="first-image" 
          src="https://m.media-amazon.com/images/I/816Y55gzX-L._SL1500_.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
        </Card.Text>
        <Button variant="danger">Explore</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    
    
    

    <div className="footer-wrapper" >
    <h3>Frequently asked questions</h3>
    <div>
      How to contact me?
    </div>
    <hr></hr>
    <p>For general questions, contact me at <a href="mailto:olayinkafakanbi@pursuit.org" target="_blank" rel="noopener"><b>Olayinkafakanbi@pursuit.org</b></a> I'll get back to you within 1 business day. For business refereral and ther professional purposes.</p>
    </div>
    </div>
  );
}



export default Home;
