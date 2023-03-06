import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Animation from "../Components/Animation";

function Kitchen() {
  return (
    <div>
    Kitchen and Utensils
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
      </div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/814bNOiLBmL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>Kitchen Utensils Set</Card.Title>
          <Card.Text>
          Cooking Utensil Set Kitchen Gadgets, Pots and Pans set Nonstick and Heat Resistant
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/41MkWi8"><b>$15.99 </b><span fontSize="5px"></span></a></Button>

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 35 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71kQacj5dgL._AC_UL640_FMwebp_QL65_.jpg" />
        <Card.Body>
          <Card.Title>24 Pcs Silverware Set </Card.Title>
          <Card.Text>
          Steak Knives Service for 4,Stainless Steel Flatware Set,Mirror Polished Cutlery Utensil Set
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3IQwsjZ"><b>$18.99 </b><span fontSize="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 20 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61B6wplBsVL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>Upgrade Meat Chopper</Card.Title>
          <Card.Text>
          Heat Resistant Meat Masher for Hamburger Meat, Ground Beef Smasher
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3mrU0Ei"><b>$7.99 </b><span fontSize="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 53 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71F85wqgryL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>kimteny 12 Pack Kitchen Cloth Dish Towels</Card.Title>
          <Card.Text>
          Premium Dishcloths, Super Absorbent Coral Velvet Dishtowels
          </Card.Text>
          <Button variant="success"><a href="hhttps://amzn.to/3YqAEfM"><b>$12.89 </b><span fontSize="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/715qOOqdKNL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>Amazon Basics Non-Stick Cookware Set</Card.Title>
          <Card.Text>
          Pots and Pans - 8-Piece Set         </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3YiEWWI"><b>$18.20 </b><span fontSize="5px"><del>34.99</del></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 43 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81K3AyyGewL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>Gotham Steel Pots and Pans Set</Card.Title>
          <Card.Text>
          
          12 Piece Cookware Set with Ultra Nonstick Ceramic Coating by Chef Daniel Green        </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3kSoGOA"><b>$98.99 </b><span fontSize="5px"><del>149.99</del></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71A-DP18ZrL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>imarku Pots and Pans Set</Card.Title>
          <Card.Text>
          
          Cookware Sets with Granite Coating, Kitchen Cookware Set Suitable for All Cooktop        </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3yfKSFb"><b>$149.99 </b><span fontSize="5px"><del>299.99</del></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81N5Jv5TDqL._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>Crock-Pot 2-QT</Card.Title>
          <Card.Text>
          
          Round Manual Slow Cooker, Black (SCR200-B)       </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3L22fBe"><b>$11.96 </b><span fontSize="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71MdcEBeruL._AC_SL1500_.jpg" />
        <Card.Body>
          <Card.Title>Ninja SF301 Speedi Rapid Cooker & Air Fryer</Card.Title>
          <Card.Text>
          
          6-Quart Capacity, 12-in-1 Functions to Steam, Bake, Roast, Sear, Sauté, Slow Cook        </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3kQ3EA6"><b>$159.99 </b><span fontSize="5px"></span></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 13 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61Op1te11rS._AC_SX679_.jpg" />
        <Card.Body>
          <Card.Title>Hamilton Beach Juicer Machine</Card.Title>
          <Card.Text>
          
          Big Mouth Large 3” Feed Chute for Whole Fruits and Vegetables, Easy to Clean    </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3ZKlNOo"><b>$77.99 </b><span fontSize="5px"></span></a></Button>
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

export default Kitchen