import React from "react";
import { useState, useEffect } from "react";
import Product from "../Components/Product";
import axios from "axios";
// import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
// import man from "../images/man.png";
// import home16 from "../images/home16.png";
// import home17 from "../images/home17.png";
// import home18 from "../images/home18.png";
// import home19 from "../images/home19.png";
// import home20 from "../images/home20.png";
// import home23 from "../images/home23.png";
// import home21 from "../images/home21.png";
// import home22 from "../images/home22.png";
// import home24 from "../images/home24.png";
// import home27 from "../images/home27.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const imgUrl5 = home16;
// const imgUrl6 = home17;
// const imgUrl8 = home18;
// const imgUrl9 = home19;
// const imgUrl10 = home20;
// const imgUrl11 = home21;
// const imgUrl12 = home22;
// const imgUrl13 = home23;

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
        {/* <marquee>
          <img className="hoy" src={imgUrl6}></img>
          <img className="hoy" src={imgUrl5}></img>
          <img className="hoy" src={imgUrl6}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl6}></img>
          <img className="hoy" src={imgUrl9}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl5}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl11}></img>
          <img className="hoy" src={imgUrl9}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl6}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl9}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl13}></img>
          <img className="hoy" src={imgUrl5}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl9}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl12}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl11}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl13}></img>
          <img className="hoy" src={imgUrl11}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl13}></img>
          <img className="hoy" src={imgUrl5}></img>
          <img className="hoy" src={imgUrl8}></img>
          <img className="hoy" src={imgUrl12}></img>
          <img className="hoy" src={imgUrl13}></img>
          <img className="hoy" src={imgUrl12}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl12}></img>
          <img className="hoy" src={imgUrl10}></img>
          <img className="hoy" src={imgUrl12}></img>
          <img className="hoy" src={imgUrl10}></img>
        </marquee> */}

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
