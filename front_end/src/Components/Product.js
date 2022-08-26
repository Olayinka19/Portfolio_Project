import React from 'react'
import { Link } from "react-router-dom";

function Product({product}) {
  return (

          <div className="Products">
             {product.name ? (
          <span>👊🏾</span>
        ) : (
          <span>🍀</span>
        )}
  
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} height={350} width={400} />
      </Link>
      <div className='ole'>
      <a href={`/products/${product.id}`}><h3>Name: {product.name} </h3><br></br><h4>Market: {product.category} </h4>
      <br/>
      <h3>FloorPrice: ${product.price}</h3>

      </a>
      </div>
     {/* <h4> {product.category ? <span> </span> : null} </h4>  */}
    </div>
  );
  
}

export default Product
