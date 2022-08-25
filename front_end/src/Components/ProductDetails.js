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
    axios
      .get(`${API}/products/${id}`)
      .then((response) => {
        setProduct(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${API}/products/${id}`).then(() => nav('/products'));
  };
  return <div>
    <Card>

      <Card.Body>
        <Card.Title>
          <h1>Ahead Shopping</h1>
        </Card.Title>
        <Card.Text>
      
            <h3>
              {product.is_favorite ? <span>⭐️</span> : null} {product.name}
            </h3>
            <h3>
              <span>{product.price}</span>
            </h3>
            <img src={product.image} alt={product.name} height={200} width={200} />
            {/* <h3>{product.image}</h3> */}
            <h3>{product.category}</h3>
            <h3>{product.is_favorite}</h3>
      
        </Card.Text>
        <Link to={`/products`}>
          <Button>Back</Button>{' '}
        </Link>{' '}
        <Link to={`/products/${id}/edit`}>
          <Button>Edit</Button>{' '}
        </Link>{' '}
        <Link to={`/products`}>
          <Button onClick={handleDelete}>Delete</Button>{' '}
        </Link>
      </Card.Body>
    </Card>



  </div>;
}

export default ProductDetails;
