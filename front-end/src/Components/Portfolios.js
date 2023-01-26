import axios from "axios";
import { useState, useEffect } from "react";
import Portfolio from "./Portfolio";
// import Portfolio from "../Components/Portfolio";

const API = process.env.REACT_APP_API_URL;

function Portfolios() {
  const [portfolios, setPortfolios] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/portfolios`)
      .then((response) => setPortfolios(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="portfolios">
      <section className="portfolio">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this portfolio</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio) => {
              return <portfolio key={portfolio.id} portfolio={portfolio} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Portfolios;
