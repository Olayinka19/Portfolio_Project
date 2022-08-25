import React from 'react'
import { Link } from "react-router-dom";

function Product({product, id}) {
  return (

          <div className="Products">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} height={200} width={200} />
      </Link>
      <a href={`/products/${product.id}`}></a>
     <h4> {product.name ? product.price : "Congrats"} </h4> 
    </div>
  );
  
}

export default Product
