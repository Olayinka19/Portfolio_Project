import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'



const API = process.env.REACT_APP_API_URL;
function ProductNew() {
    const navigate = useNavigate();
    const addProduct = () => {
        axios.post(`${API}/products`, product)
          .then(response => navigate(`/products`)) 
          .catch(error => console.error(error)) 
      };
    const [product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        is_favorite: false,
        
      });
     const handleTextChange = (event) => {
        setProduct({ ...product, [event.target.id]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addProduct(product);
        navigate(`/products`);
      };
      return (
        <div className="New">
        <form onSubmit={handleSubmit}>
            <h2>Add New NFT</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nαɱҽ: </label>
            <input
              id="name"
              value={product.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name"
              required
            />
            <br />
            <hr></hr>
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              value={product.price}
              type="text"
              onChange={handleTextChange}
              placeholder="price"
              required
            />
            <br></br>
            <hr></hr>
             <label htmlFor="image">image: </label>
            <input
              id="image"
              type="text"
              name="image"
              value={product.image}
              placeholder="http://"
              onChange={handleTextChange}
            />
            <br />
            <hr></hr>
            <label for="category">Category:  </label>
            <input
              id="category"
              type="text"
              required
              value={product.category}
              placeholder="MagicEden / OpenSea"
              min = "0"
              max = "5"
              onChange={handleTextChange}
            />
            <br></br>
            <hr></hr>
            <label for="blockchain_id">BlockChain_id:  </label>
            <input
              id="blockchain_id"
              type="text"
              required
              value={product.blockchain_id}
              placeholder="Hash_Link"
              onChange={handleTextChange}
            />
            <br></br>
            <hr></hr>
            <input type="submit"/>
          </form>
        
        </form>
        </div>
      )
}

export default ProductNew
