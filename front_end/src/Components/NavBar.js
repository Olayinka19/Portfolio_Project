import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import cart from "../images/cart.png";
import logo2 from "../images/logo2.png";

export default function NavBar() {
    const imgUrl4 = cart;
    const imgUrl5 = logo2;
  return (
    <div className="Nav">
        <Link to="/"><img className='home5' src={imgUrl5} /></Link>
      <h1>
        <Link to="/products" className="Link">Products</Link>
      </h1>
      <Button>
        <Link to="/products/new" className="Link">
          Checkout
        </Link>
      </Button>
      <Button>
        <Link to="/products/Edit" className="Link">
        <img className='home4' src={imgUrl4} />
        </Link>
      </Button>
    </div>
  );
}
