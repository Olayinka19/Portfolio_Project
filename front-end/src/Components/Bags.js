import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function Bags() {
  return (
    <div>
    <h1>Premium Deals</h1>
    <div style={{ display: 'flex', justifyContent: 'center' ,paddingRight: "10px"}}>

    
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
<div style={{display: 'grid', justifyContent: 'center', padding: '10px 10px 20px 5px'}}>
    <Card style={{ width: '18rem' , display: 'flex', justifyContent: 'center'}}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71+g-qsSOsS._AC_UL640_FMwebp_QL65_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71EBZqNWHdS._AC_UL1500_.jpg" />
        <Card.Title>HYC00 Travel Duffel Bag</Card.Title>
        <Card.Text>
        Sports Tote Gym Bag, Shoulder Weekender Overnight Bag for Women
        </Card.Text>
        <Button variant="warning"><a href="https://amzn.to/3SRUBLG"><b>$22.99 </b><span font-size="5px"></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr></hr>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81AXxYRLjQL._AC_UL1500_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91f2Z+hRYZL._AC_UL1500_.jpg" />
        <Card.Title>Fossil Women's Ryder Leather Satchel Purse Handbag</Card.Title>
        {/* <Card.Text>
        Multifunctional Stylish Baby Bag with Stroller Hooks for Boys Girls
        </Card.Text> */}
        <Button variant="warning"><a href="https://amzn.to/3l5TETd"><b>$181.99 </b><span font-size="5px"><del>$250</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr></hr>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81EPTX8VhwL._AC_SL1100_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71xi2X71x3L._AC_SL1100_.jpg" />
        <Card.Title>Mens Messenger Bag 15.6 Inch Waterproof Vintage </Card.Title>
        {/* <Card.Text>
        Multifunctional Stylish Baby Bag with Stroller Hooks for Boys Girls
        </Card.Text> */}
        <Button variant="warning"><a href="https://amzn.to/3JtACjj"><b>$42.49 </b><span font-size="5px"><del>$69.99</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr></hr>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81HqT6q5pWS._SX679_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71yH5o0wMDL._SL1500_.jpg" />
        <Card.Title>Hafmall Diaper Bag Backpack</Card.Title>
        <Card.Text>
        Multifunctional Stylish Baby Bag with Stroller Hooks for Boys Girls
        </Card.Text>
        <Button variant="warning"><a href="https://amzn.to/3mH3jjy"><b>$42.99 </b><span font-size="5px"><del>$99.99</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr></hr>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/718RFxZmX9L._SX679_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71opF1AUWiL._SL1001_.jpg" />
        <Card.Title>
BabbleRoo Diaper Bag Backpack</Card.Title>
        <Card.Text>
        Nappy Changing Bags Multifunction Waterproof Travel Back Pack with Changing Pad 
        </Card.Text>
        <Button variant="warning"><a href="https://amzn.to/3EWMebG"><b>$44.99 </b><span font-size="5px"><del>$79.99</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr></hr>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SL1500_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71UoiLvlQdL._AC_SL1500_.jpg" />
        <Card.Title>
        Matein Travel Laptop Backpack, Business Anti Theft</Card.Title>
        <Card.Text>
        Durable Laptops Backpack with USB Charging Port
        </Card.Text>
        <Button variant="warning"><a href="https://amzn.to/3LajcJN"><b>-21% $29.99</b><span font-size="5px"><del>$41.99</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71mP7jWqrXL._AC_SL1500_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716XCPbsdLL._AC_SL1100_.jpg" />
        <Card.Title>
        Oversized Travel Duffel Bag Waterproof Canvas Genuine Leather</Card.Title>
        <Button variant="warning"><a href="https://amzn.to/3YAaAPD"><b>$39.99 </b><span font-size="5px"><del>$62.99</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/5128FLJYADL._AC_UL1200_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61P2WnvFJRL._AC_UL1200_.jpg" />
        <Card.Title>
        ALDO Women's Gloadithh Totes Bag</Card.Title>
        <Button variant="warning"><a href="https://amzn.to/3EWMebG"><b>$37.45 </b><span font-size="5px"><del>$58.00</del></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71mBZhSxeIL._AC_UL1500_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6181jvJHgZS._AC_UL1500_.jpg" />
        <Card.Title>
        ALDO womens ALDO Women s Gloadithh Totes Bags, Black, Medium US</Card.Title>
        <Button variant="warning"><a href="https://amzn.to/3IXOWyW"><b>$58.00 </b><span font-size="5px"></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91ofuErG-SL._AC_SL1500_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91xqdIKGxUL._AC_SL1500_.jpg" />
        <Card.Title>
        
Targus Laptop Bag Carrying Case for 15.6-Inch Laptops Messenger Bag Slim Laptop</Card.Title>
        <Button variant="warning"><a href="https://amzn.to/3YBlJiW"><b>$26.99 </b><span font-size="5px"></span></a></Button>
      </Card.Body>
      
    </Card>
    <hr/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81uyFttt9US._AC_UL1500_.jpg" />
      <Card.Body>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71O89ix4umL._AC_UL1500_.jpg" />
        <Card.Title>
        
        Montana West Tote Bags Vegan Leather</Card.Title>
        <Button variant="warning"><a href="https://amzn.to/3ysoOYi"><b>$19.99 </b><del>$29.99</del><span font-size="5px"></span></a></Button>
      </Card.Body>
      
    </Card>
    </div>
    {/* <img width="100%" src="https://img.freepik.com/free-photo/stacked-aesthetic-objects-still-life_23-2150230663.jpg?w=900&t=st=1678338661~exp=1678339261~hmac=f35a5a3503cc99b0a91bdbcb0cb2392b5138705a12f8ee3b48da1ddce0d2d4dc"></img> */}
</div>
  )
}
const itemData = [
    {
      img: 'https://m.media-amazon.com/images/I/71O89ix4umL._AC_UL1500_.jpg',
      title: 'Tide Pods',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51l01t0DTxL._AC_.jpg',
      title: 'BWater Wipes',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81AXxYRLjQL._AC_UL1500_.jpg',
      title: 'Baby Wipes',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61MijseSDiL._AC_SL1500_.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81BW1VEbHnL._AC_UL1500_.jpg',
      title: 'Hats',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71mP7jWqrXL._AC_SL1500_.jpg',
      title: 'Honey',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A1SDCRMWW36KXJ/b11692bc-5e01-48cd-9d1e-f60c47e6cf8e._CR0,0,300,300_PT0_SX300__.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71qbom+p4JL._AC_SX679_.jpg',
      title: 'Fern',
    },
    {
      img: 'https://m.media-amazon.com/images/I/911JouVKmnL._AC_UL1500_.jpg',
      title: 'Mushrooms',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61A8MARAomL._AC_UL1500_.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://m.media-amazon.com/images/I/614WfEbbAhL._AC_SX679_.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SL1500_.jpg',
      title: 'Bike',
    },
  ];

export default Bags
