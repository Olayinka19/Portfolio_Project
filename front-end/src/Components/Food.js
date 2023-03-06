import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Animation from "../Components/Animation";

function Food() {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
      </div>
    <ImageList sx={{ width: 390, height: 450 }} cols={3} variant="woven" rowHeight={164}>
    {foodData.map((item) => (
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
  <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
      </div>
  <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81yXzWK7MOL._AC_UL640_FMwebp_QL65_.jpg" />
        <Card.Body>
          <Card.Title>Vegan Rice</Card.Title>
          <Card.Text>
          Hand Warmer Foods Organic Quinoa, Vegan.
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3ZmivRS"><b>$8.15 </b><span font-size="5px"></span></a></Button>

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 35 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91hj+c7OLpL._SL1500_.jpg" />
        <Card.Body>
          <Card.Title>Welch's Fruit Snacks</Card.Title>
          <Card.Text>
          Berries 'n Cherries, Gluten Free, Bulk Pack, 0.9 Ounce (Pack of 40)
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3IQwsjZ"><b>$8.48 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 20 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81mABE1sNhL._SL1500_.jpg" />
        <Card.Body>
          <Card.Title>Lay's Potato Chip</Card.Title>
          <Card.Text>
          Variety Pack, 1 Ounce (Pack of 40)
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3F0EMfQ"><b>$21.86 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41gl-9qjJbS._SX300_SY300_QL70_FMwebp_.jpg" />
        <Card.Body>
          <Card.Title>Charging Station for Multiple Devices</Card.Title>
          <Card.Text>
          Charger Organizer with Watch Bracket Equipped for iPhone iPad Android Tablet Watch and Other Electronics(6 Cables Included)
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3IRNkqu"><b>$7.99 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51WqvrUBrFL._SX300_SY300_QL70_FMwebp_.jpg" />
        <Card.Body>
          <Card.Title>Quaker Instant Oatmeal</Card.Title>
          <Card.Text>
          
          4 Flavor Variety Pack, Individual Packets, 48 Count          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3yctOA0"><b>$18.20 </b><span font-size="5px"><del>34.99</del></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 43 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/911XLyCu1RL._SX679_.jpg" />
        <Card.Body>
          <Card.Title>Acupuncture-Pen Electronic-Pain-Relief</Card.Title>
          <Card.Text>
          
          Therapy Merídiān-Energy-Pulse-Massage-Pen 5-in-1 USB-Energy-Pen-Pain-Relief-Tools Gifts-for-Women-and-Men          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3kSoGOA"><b>$19.49 </b><span font-size="5px"><del>34.99</del></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51WqvrUBrFL._SX300_SY300_QL70_FMwebp_.jpg" />
        <Card.Body>
          <Card.Title>Acupuncture-Pen Electronic-Pain-Relief</Card.Title>
          <Card.Text>
          
          Therapy Merídiān-Energy-Pulse-Massage-Pen 5-in-1 USB-Energy-Pen-Pain-Relief-Tools Gifts-for-Women-and-Men          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/41P6l5G"><b>$18.29 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81Z0eLtu3AL._SL1500_.jpg" />
        <Card.Body>
          <Card.Title>Glico Pocky</Card.Title>
          <Card.Text>
          
          Strawberry Cream Covered Biscuit Sticks (9 Individual Bags), 3.81 oz        </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3yb5crs"><b>$6.38 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91MgJeQzJQL._SX679_.jpg" />
        <Card.Body>
          <Card.Title>Fla-Vor-Ice Popsicle</Card.Title>
          <Card.Text>
          
          Variety Pack of 1.5 Oz Freezer Bars, Assorted Flavors, 100 Count        </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3ycvcmc"><b>$10.24 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91WaSA+gQGL._SY879_.jpg" />
        <Card.Body>
          <Card.Title>Indomie</Card.Title>
          <Card.Text>
          
          Variety Pack - 6 Flavors in 1 Case (30 Bags)         </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3ZtyHAH"><b>$30.99 </b><span font-size="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>



    <hr/>
        <Card.Link href="#" style={{ display: 'flex', justifyContent: 'center' }} ><Button className='top-container' variant="success" >TOP🔝</Button></Card.Link>
        <hr/>

    </div>
    
  )
  
}
const foodData = [
    {
      img: 'https://m.media-amazon.com/images/I/81zuIAbB5DL._SY879_.jpg',
      title: 'Tide Pods',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71lljnlIUNL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'BWater Wipes',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71+EI2Xi6EL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Baby Wipes',
    },
    {
      img: 'https://m.media-amazon.com/images/I/817x89Wnc5S._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://m.media-amazon.com/images/I/61jcgCyiUQL._SL1000_.jpg',
      title: 'Hats',
    },
    {
      img: 'https://m.media-amazon.com/images/I/51RskrlwRGL._SL1080_.jpg',
      title: 'Honey',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81mABE1sNhL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71Qjhi9dZzL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Fern',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81yXzWK7MOL._SX679_.jpg',
      title: 'Mushrooms',
    },
    {
      img: 'https://m.media-amazon.com/images/I/91hihzGc8aL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81SCalI51YL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81RxevEXqIL._SL1500_.jpg',
      title: 'Bike',
    },
  ];

export default Food