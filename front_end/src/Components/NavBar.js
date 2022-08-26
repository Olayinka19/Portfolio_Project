import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import home11 from "../images/home11.png";
import home12 from "../images/home12.png";
import home13 from "../images/home13.png";

export default function NavBar() {
    const imgUrl4 = home11;
    const imgUrl5 = home12;
    const imgUrl6 = home13;
  return (
    // <div className="Nav">
    <div class="Nav">
       
        <Link to="/"><img className='home12' src={imgUrl5} /></Link>
      <h1>
        <Link to="/products" className="Link">꧁༺My items ༻꧂</Link>
      </h1>
      <Button className="Link2">
        <Link to="/products/new" >
        NewNFt
        </Link>
      </Button>
      <Button>
        <Link to="/products/Edit" className="Link">
        <img className='home4' src={imgUrl4} />
        </Link>
      </Button>
      <Button>
        <img className='home4' src={imgUrl6}/>
      </Button>
      </div>
     
  );
}
