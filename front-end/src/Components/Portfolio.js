import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'
const API = process.env.REACT_APP_API_URL;

function Porfolio({ portfolio }) {
  return (
   <div style={{ display: 'flex', justifyContent: 'center' }}>
       <p>
       {portfolio.is_favorite ? (
          <span>⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️</span>
        ) : (
          <span>Try Again</span>
        )}
       </p>
       <div>
       <a href={portfolio.url} target="_blank" rel="noreferrer">
          {portfolio.name}
        </a>
        <a href={`/portfolios/${portfolio.id}`}>✏️</a>
        <h3>{portfolio.category}</h3>
       <p>{portfolio.is_favorite}</p>
       </div>
       
       
   </div>
   
  );
}

export default Porfolio;
