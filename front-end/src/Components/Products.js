import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
// import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";


const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...products].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setProducts(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...products].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setProducts(sorted);
      setOrder("ASC");
    }
  };
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => setProducts(response.data.payload))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="Products">
      <section>
        

        <div className="ope">
          <th onClick={() => sorting("name")}>
            {" "}
            <Button variant="outline-primary">
              {" "}
              <i className="bi bi-arrow-down-up"></i> Degen_Name{" "}
            </Button>{" "}
          </th>

          <th onClick={() => sorting("price")}>
            {" "}
            <Button variant="outline-secondary">
              <i className="bi bi-arrow-down-up"></i>
              FloorPrice
            </Button>
          </th>
          <th onClick={() => sorting("image")}>
            <Button variant="outline-dark">
              <i className="bi bi-arrow-down-up"></i>
              image
            </Button>
          </th>
          <th onClick={() => sorting("category")}>
            <Button variant="outline-success">
              <i className="bi bi-arrow-down-up"></i>
              Market
            </Button>
          </th>
          <th onClick={() => sorting("blockchain_id")}>
            <Button variant="outline-warning">
              <i className="bi bi-arrow-down-up"></i>
              BlockChain_id
            </Button>
          </th>

          {/* {products.map((product, id) => {
                return <Product key={id} product={product} id={id} />;
              })} */}

          {/* {products.map((product, index) => (
              <product
                key={index}
                product={product}
                index={index}
              />
            ))} */}
          <div></div>
          <hr></hr>
          <section className="ola">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </section>
        </div>
      </section>
    </div>
  );
}

export default Products;
