import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap'
const API = process.env.REACT_APP_API_URL;

function ProductEdit() {
    const {id } = useParams();
const navigate = useNavigate();
const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    is_favorite: false,
  });
  const updateProduct = (updatedProduct) => {
    axios
       .put(`${API}/products/${id}`, updatedProduct)
      .then((response) => {
        setProduct(response.data.payload);
        navigate(`/products/${id}`);
      })
      .catch((error) => console.log(error));
  
  };
  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product.id);
  };
  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (res) => setProduct(res.data.payload),
      (error) => navigate(`/not found`)
    );
  }, [id, navigate]);
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NFT_𝕹𝖆𝖒𝖊:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of your NFT"
          required
        />
        <br/>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={product.price}
          type="text"
          onChange={handleTextChange}
          placeholder="Price"
          required
        />
        <br></br>
        <label htmlFor="image">NFT_Image: </label>
        <input
          id="image"
          type="text"
          name="image"
          pattern="http[s]*://.+"
          value={product.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <br/>
        <label for="category">Category: </label>
        <input
          id="category"
          type="text"
          required
          value={product.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <br/>

        <input type="submit" />
      </form>
      <Link to={`/products/${id}`}>
        <Button variant="info">Nevermind!</Button>
      </Link>
    </div>
  )
}

export default ProductEdit;
