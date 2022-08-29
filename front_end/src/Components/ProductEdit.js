import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';


const API = process.env.REACT_APP_API_URL;

function ProductEdit() {
    const {id } = useParams();
const navigate = useNavigate();
const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    blockchain_id: '',
    is_favorite: false,
    
  });
  const updateProduct = (updatedProduct) => {
    
    axios
       .put(`${API}/products/${id}`, updatedProduct)
      .then((response) => {
        setProduct(response.data.payload)
        navigate(`/products/${id}`);
      })
      .catch((error) => console.log(error));
  
  };
  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  };
  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (res) => setProduct(res.data.payload),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);
  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label htmlFor="name">NFT_𝕹𝖆𝖒𝖊:</Form.Label>
        <Form.Control
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of your NFT"
          required
        />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Label htmlFor="price">Price:</Form.Label>
        <Form.Control
          id="price"
          value={product.price}
          type="text"
          onChange={handleTextChange}
          // placeholder="Price"
          required
        />
        </Form.Group>
        <br></br>
        <Form.Group>
        <Form.Label htmlFor="image">NFT_Image: </Form.Label>
        <Form.Control
          id="image"
          type="text"
          name="image"
          pattern="http[s]*://.+"
          value={product.image}
          // placeholder="http://"
          onChange={handleTextChange}
        />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Label for="category">Category: </Form.Label>
        <Form.Control
          id="category"
          type="text"
          required
          value={product.category}
          // placeholder="Category"
          onChange={handleTextChange}
        />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Label for="blockchain_id">Blockchain_id": </Form.Label>
        <Form.Control
          id="blockchain_id"
          type="text"
          required
          value={product.blockchain_id}
          onChange={handleTextChange}
        />
        </Form.Group>
            <br></br>
        <Button type ="submit"> Submit </Button>
      </Form>
      <Link to={`/products/${id}`}>
        <Button variant="info">Nevermind!</Button>
      </Link>
    </div>
  )
}

export default ProductEdit;
