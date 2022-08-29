import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import homee from "../images/homee.png";
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

      {/* <Button>
        <Link to="/products/Edit" className="Link">
        ShowPage
        </Link>
      </Button> */}

      <Link to="/Flex" className="Link">
        ConnectWallet
      </Link>

      <Link to="/ConnectWallet" className="Link">
        About
      </Link>
    </div>
  );
}
