import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './New.css'
import home26 from "../images/home26.png";



const API = process.env.REACT_APP_API_URL;

const imgUrl6 = home26;
function ProductNew() {
    const navigate = useNavigate();

    // const addProduct = (newProduct) => {
    //     axios.post(`${API}/products`, newProduct)
    //       .then((res) => navigate(`/products`)) 
    //       .catch(error => console.error(error)) 
    //   };
    const addProduct = (newProduct) => {
      console.log(newProduct)
        axios
          .post(`${API}/products`, newProduct)
          .then(
            () => {
              navigate(`/products`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        category: '',
        blockchain: '',
        description: '',
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
          <article className='wrapper'>
        <div className="New">
      
           <img className='robo' src={imgUrl6}></img>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Label htmlFor="name">Nαɱҽ </Form.Label> */}
            <Form.Control
              id="name"
              value={product.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name"
              required
            />
  
<hr/>
            <Form.Group>
            {/* <label htmlFor="price">Price: </label> */}
            <Form.Control
              id="price"
              value={product.price}
              type="text"
              onChange={handleTextChange}
              placeholder="price"
              required
            />
            </Form.Group>
            <hr/>
            <Form.Group>
             {/* <label htmlFor="image">image: </label> */}
            <Form.Control
              id="image"
              type="text"
              name="image"
              value={product.image}
              placeholder="http://"
              onChange={handleTextChange}
              required
            />
            </Form.Group>
           
            <hr/>
            <Form.Group>
            {/* <Form.Label for="category">Category:  </Form.Label> */}
            <Form.Control
              id="category"
              type="text"
              required
              value={product.category}
              placeholder="MagicEden / OpenSea"
              min = "0"
              max = "5"
              onChange={handleTextChange}
            />
            </Form.Group>
            <hr/>
            {/* <label for="blockchain_id">BlockChain_id:  </label> */}
            <Form.Group>
            <Form.Control
              id="description"
              type="text"
              required
              value={product.description}
              placeholder="Description"
              onChange={handleTextChange}
            />
            </Form.Group>

<hr></hr>

            <Form.Group>
            <Form.Control
              id="blockchain_id"
              type="text"
              required
              value={product.blockchain_id}
              placeholder="Hash_Link"
              onChange={handleTextChange}
            />
            </Form.Group>
            <br></br>
            <hr></hr>
            <Button variant="info" type="submit">Submit</Button>
        </Form>
        </div>
        </article>
      )
}

export default ProductNew;
