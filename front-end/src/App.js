import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import Wallet from "./Pages/AboutPage";
import FlexConn from "./Pages/FlexConn";
import AboutPage from "./Pages/AboutPage";
import Profile from "./Components/Profile";
import Portfolios from "./Components/Portfolios";
import Signin from "./Pages/Signin";
import {AuthContextProvider} from './Context/AuthContext';
import './App.css';
import PortfolioDetails from "./Components/PortfolioDetails";

function App() {
  return (
    <Router>
    <AuthContextProvider>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolios" element={<Portfolios />} />
        <Route path="/PortfoliosDetails" element={<PortfolioDetails />} />
        <Route path="/FlexConnect" element={<FlexConn />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
      
        <Route path="*" element={<FourOFour />} />
      </Routes>
      
    </main>
        <Footer />
        </AuthContextProvider>
  </Router>
  );
}

export default App;
