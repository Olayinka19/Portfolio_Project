import { React } from "react";
// import "animate.css";
import "./Home.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Animation from "../Components/Animation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";

const API = process.env.REACT_APP_API_URL;

function Home() {

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
                  src="https://m.media-amazon.com/images/I/815NKi8l4kL._AC_SL1500_.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://m.media-amazon.com/images/I/61Gel0RfLKL._AC_SX679_.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://m.media-amazon.com/images/I/71wXQyxCENL._AC_SX679_.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="first-image"
                  src="https://m.media-amazon.com/images/I/71duv9a2mqL._AC_SX679_.jpg"
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
                  src="https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg"
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
            <h1>Featured Products</h1>
          </Card.Body>
        </Card>

        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div></div>
          </div>
        </div>
        <br></br>

  
        <div className="container">
          <div>
            <br />
          </div>
        </div>
      
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg"
            />
            <Card.Body>
              <Card.Title>$19,386.38</Card.Title>
              <Card.Text>
              YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station Video Gaming Chair
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="https://amzn.to/3ZALVva">
                <Button variant="success">Learn More</Button>
              </Card.Link>
              <Card.Link href="#">TOP🔝</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <Card className="text-center">
          <Card.Body>
            
            <h2>Trending Now</h2>
          
            <Card.Text>
              <Carousel fade>
                <Carousel.Item interval={2000}>
                  <img
                    className="first-image"
                    src="https://m.media-amazon.com/images/I/71duv9a2mqL._AC_SX679_.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://m.media-amazon.com/images/I/81SoE0g+uqL._AC_SX679_.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://m.media-amazon.com/images/I/71S-pQNQyIL._AC_SX679_.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://m.media-amazon.com/images/I/51fgMLstK5L._AC_.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="first-image"
                    src="https://m.media-amazon.com/images/I/51mgmdj5heL._AC_SL1200_.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Text>
            <Button variant="success">
              <a href="https://amzn.to/3ypXAkY">
                <h3>Explore</h3>
              </a>
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">12 days ago</Card.Footer>
        </Card>

        <div>
          <Card>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Link href="#">
              <Button variant="success">TOP🔝</Button>
            </Card.Link>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}


export default Home;
