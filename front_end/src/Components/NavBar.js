import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import homee from "../images/homee.png";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import home12 from "../images/home12.png";
// import home13 from "../images/home13.png";

export default function NavBar() {
  const imgUrl4 = homee;
  // const imgUrl5 = home12;
  // const imgUrl6 = home13;
  return (
    // <div className="Nav">
    <div class="Nav">
      <Link to="/" className="Link">
        <img className="homee" src={imgUrl4}></img>
      </Link>
      <h1>
        <Link to="/products" className="Link">
          NFTs
        </Link>
      </h1>

      <Link to="/products/new" className="Link">
        NewNFt
      </Link>

    <Breadcrumb>
    <Breadcrumb.Item href="https://discord.com/channels/995129548876296213/1004797057057444005">Discord</Breadcrumb.Item>
    
    </Breadcrumb>


      <Link to="/FlexConnect" className="Link">
        ConnectWallet
      </Link>

      <Link to="/About" className="Link">
        About
      </Link>
    </div>
  );
}
