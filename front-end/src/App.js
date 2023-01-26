import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/IndexPage";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import Wallet from "./Pages/AboutPage";
import FlexConn from "./Pages/FlexConn";
import AboutPage from "./Pages/AboutPage";
import Profile from "./Components/Profile";
import portfolioDetails from "./Components/PortfolioDetails";
import Portfolios from "./Components/Portfolios";
import Porfolio from "./Components/Portfolio";
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
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/portfoliosDetails" element={<PortfolioDetails />} />
        <Route path="/products/:id/edit" element={<Edit />} />
        <Route path="/products/new" element={<New />} />
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
