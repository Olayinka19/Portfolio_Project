import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Reviews from "./Reviews";

function PortfolioDetails() {
  const [portfolio, setPortfolio] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/portfolios/${id}`).then((response) => {
      setPortfolio(response.data);
    });
  }, [id, navigate, API]);
  const deletePortfolio = () => {
    axios
      .delete(`${API}/portfolios/${id}`)
      .then(() => {
        navigate(`/portfolios`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deletePortfolio();
  };
  return (
    <>
      <article>
        <h3>
          {portfolio.is_favorite ? <span>⭐️</span> : null} {portfolio.name}
        </h3>
        <h5>
          <span>
            <a href={portfolio.url}>{portfolio.name}</a>
          </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {portfolio.url}
        </h5>
        <h6>{portfolio.category}</h6>
        <p>{portfolio.description}</p>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/portfolios`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/portfolios/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
        {/* <Reviews /> */}
      </article>
    
    </>
  );
}

export default PortfolioDetails;