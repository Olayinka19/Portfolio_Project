import React from 'react'
import Button from '@mui/material/Button';
import Accordion from 'react-bootstrap/Accordion';
import Animation from "../Components/Animation";
function About() {
  // const imgUrl6 = home18;
  // https://m.media-amazon.com/images/I/71seY2ns8oL._AC_SL1500_.jpg

  return (
   
    <div>
   {/* <h1>Connect Your Wallet</h1> */}
   <div className="container-fluid">
    <div className="background">
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      {/* <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div> */}
      <section className="header-content">
      <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
      </div>
      <h3>The Top 5 Best-selling Tech Products on Amazon Right Now.
</h3>
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apple AirPods Pro <img src="https://cdn-icons-png.flaticon.com/512/9452/9452499.png" width="40px" height="40px"></img></Accordion.Header>
        <Accordion.Body>
        It's no surprise that the Apple AirPods Pro are at the top of our list. These wireless earbuds are a hit with both Apple fans and tech enthusiasts alike. The AirPods Pro offer noise cancellation, a comfortable fit, and impressive sound quality. They're also water-resistant, making them perfect for working out or taking calls on the go.
        <img src="https://m.media-amazon.com/images/I/71lj9Fdeq0L._AC_SL1500_.jpg" alt="pfp" width="180px" height="180px"></img>
        <Button><a href="https://amzn.to/3kysmET" target="_blank" rel="noopener">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Ring Video Doorbell <img src="https://cdn-icons-png.flaticon.com/512/1333/1333342.png" width="40px" height="40px" alt="pfp"></img></Accordion.Header>
        <Accordion.Body>
        The Ring Video Doorbell has become a popular choice for homeowners looking to enhance their home security. This device allows you to see and talk to visitors at your front door from anywhere, using your smartphone. The Ring Video Doorbell also features motion detection and can send alerts to your phone, giving you peace of mind while you're away from home.
        <img src="https://m.media-amazon.com/images/I/51Sh7ug8F-L._SL1000_.jpg" width="120px" height="120px"></img>
        <Button><a href="https://amzn.to/3EEwpGs" target="_blank" rel="noopener">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Bose QuietComfort 35 II<img src="https://cdn-icons-png.flaticon.com/512/6190/6190871.png" width="40px" height="40px"></img></Accordion.Header>
        <Accordion.Body>
        The Ring Video Doorbell has become a popular choice for homeowners looking to enhance their home security. This device allows you to see and talk to visitors at your front door from anywhere, using your smartphone. The Ring Video Doorbell also features motion detection and can send alerts to your phone, giving you peace of mind while you're away from home.
        <img src="https://m.media-amazon.com/images/I/71+iQZU-dVL._AC_SY300_SX300_.jpg" width="120px" height="120px"></img>
        <Button><a href="https://amzn.to/3EEwpGs" target="_blank" rel="noopener">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Samsung Galaxy Watch 3<img src="https://cdn-icons-png.flaticon.com/512/8488/8488889.png" width="40px" height="40px"></img></Accordion.Header>
        <Accordion.Body>
        The Samsung Galaxy Watch 3 is a sleek and stylish smartwatch that offers a range of features, including fitness tracking, heart rate monitoring, and sleep tracking. It also allows you to receive notifications and make calls, all from your wrist.
        <img src="https://m.media-amazon.com/images/I/818MAcfvjPL._AC_SL1500_.jpg" width="120px" height="120px"></img>
        <Button><a href="https://amzn.to/3knce9m" target="_blank" rel="noopener">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Logitech C920s HD Pro Webcam<img src="https://cdn-icons-png.flaticon.com/512/3037/3037951.png" width="40px" height="40px"></img></Accordion.Header>
        <Accordion.Body>
        As more people are working from home or attending virtual meetings, the Logitech C920s HD Pro Webcam has become a popular choice for high-quality video conferencing. It offers 1080p HD video, automatic light correction, and a built-in privacy shutter.
        <img src="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SX679_.jpg" width="120px" height="120px"></img>
        <Button><a href="https://amzn.to/3knce9m" target="_blank" rel="noopener">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="5">
        <Accordion.Header>Sonos One<img src="https://cdn-icons-png.flaticon.com/512/3162/3162383.png" width="40px" height="40px"></img></Accordion.Header>
        <Accordion.Body>
        The Sonos One (Gen 2) is a smart speaker that offers exceptional sound quality and compatibility with popular voice assistants, including Amazon Alexa and Google Assistant. It also allows you to stream music and podcasts from a variety of sources, including Spotify, Apple Music, and more.
        <img src="https://m.media-amazon.com/images/I/71dJ0HXTD0L._AC_SX679_.jpg" width="120px" height="120px"></img>
        <Button><a href="https://amzn.to/3knce9m" target="_blank">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Sonos One<img src="https://cdn-icons-png.flaticon.com/512/3162/3162383.png" width="40px" height="40px"></img></Accordion.Header>
        <Accordion.Body>
        The Sonos One (Gen 2) is a smart speaker that offers exceptional sound quality and compatibility with popular voice assistants, including Amazon Alexa and Google Assistant. It also allows you to stream music and podcasts from a variety of sources, including Spotify, Apple Music, and more.
        <img src="https://m.media-amazon.com/images/I/71dJ0HXTD0L._AC_SX679_.jpg" width="120px" height="120px"></img>
        <Button><a href="https://amzn.to/3knce9m" target="_blank">Learn More</a></Button>
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
    

   
   
        </div>
      </section>
    </div>
    </div>
    </div>
  )
}

export default About