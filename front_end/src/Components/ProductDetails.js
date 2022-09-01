import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";


const API = process.env.REACT_APP_API_URL;
function ProductDetails() {
  const { id } = useParams();

  const nav = useNavigate();

  const [product, setProduct] = useState({});

 
  useEffect(() => {
    axios.get(`${API}/products/${id}`).then((response) => {
      setProduct(response.data.payload);
    });
  }, [id, nav, API]);
  const handleDelete = () => {
    axios.delete(`${API}/products/${id}`).then(() => nav('/products'))
    .catch((c) => console.error("catch", c));
  };
  return <div>
    <article>
          <h1>NFT SHOW PAGE</h1>

            {/* <h3>
              {product.is_favorite ? <span>⭐️</span> : null} Name: {product.name}
            </h3> */}
            
            <img src={product.image} alt={product.name} height={200} width={200} />
            <hr></hr>
            <u>Name: </u><h3>{product.name}</h3>
            <hr></hr>
              <span><u>FloorPrice: </u></span> <h3>${product.price}</h3>
              <hr></hr>
            <u>ImageLink:</u> <h3> {product.image}</h3>
            <hr></hr>
            <p>Market: <h2>{product.category}</h2></p>
            <hr></hr>
            Blockchain_id: <h3>{product.blockchain_id}</h3>
            <div className="showNavigation">
              <hr></hr>
              
   <div>
    {' '}
        <Link to={`/products`}>
          <Button variant="success">Back</Button>
        </Link>
        </div>
        <div>
        {' '}
        <Link to={`/products/${id}/edit`}>
          <Button variant="secondary">Edit</Button>
        </Link>
        </div>
        <div>
          {' '}
        <Link to={`/products`}>
          <Button onClick={handleDelete}>Delete</Button>{' '}
        </Link>
        </div>
        </div>
    
   

        </article>
  </div>;
}

export default ProductDetails;
