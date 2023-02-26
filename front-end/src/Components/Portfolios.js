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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <section className="portfolio">
        
           
              <button>Take me there</button>
              <p>See this portfolio</p>
           
          {/* <img src={porfolio.image} /> */}
            {portfolios.map((portfolio) => {
              return <Portfolio key={portfolio.id} portfolio={portfolio} />;
            })}
          
       
      </section>
    </div>
  );
}

export default Portfolios;
