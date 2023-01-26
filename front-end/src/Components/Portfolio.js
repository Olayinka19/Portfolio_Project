import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'
const API = process.env.REACT_APP_API_URL;

function Porfolio({ portfolio }) {
  return (
    <tr>
      <td>
        {portfolio.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={portfolio.url} target="_blank" rel="noreferrer">
          {portfolio.name}
        </a>
      </td>
      <td>
        <Link to={`/portfolios/${portfolio.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Porfolio;
