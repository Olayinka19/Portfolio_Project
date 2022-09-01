import React from 'react'
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

function Product({product}) {
  return (

          <div className="Products">
  
      <Link to={`/products/${product.id}`}>
        <span>
        <img src={product.image} alt={product.name} height={350} width={400} />
        </span>
      </Link>
  
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Name</Accordion.Header>
          <Accordion.Body>
            <h3>{product.name}</h3>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <h3>${product.price}</h3>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>BlockChain_id</Accordion.Header>
          <Accordion.Body>
            <h3>{product.blockchain_id}</h3>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>
            <h6>{product.description}</h6>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="drop-basic">
        Description
      </Dropdown.Toggle>
      <Dropdown.Item className="drop" >{product.description}</Dropdown.Item>
     </Dropdown> */}
    </div>
  );
  
}

export default Product
