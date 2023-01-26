import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'
const API = process.env.REACT_APP_API_URL;

function Porfolio({ portfolio }) {
  return (
   <div>
       <p>
       {portfolio.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>Try Again</span>
        )}
       </p>
       <div>
       <a href={portfolio.url} target="_blank" rel="noreferrer">
          {portfolio.name}
        </a>
        <Link to={`/portfolios/${portfolio.id}`}>✏️</Link>
       </div>
   </div>
   
  );
}

export default Porfolio;
