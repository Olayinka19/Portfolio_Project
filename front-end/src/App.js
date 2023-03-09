import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import Wallet from "./Pages/AboutPage";
import FlexConn from "./Pages/FlexConn";
// import About from "./Pages/About";
import Men from './Components/Men';
import Bags from './Components/Bags';
// import Education_office from './Components/Education_office';
import Education_office from './Components/Education_office';
import Health_beauty from './Components/Health_beauty';
import Jewelry_accessories from './Components/Jewelry_accessories';
import Sports_outdoor from './Components/Sports_outdoor';
import Travel from './Components/Travel';
import Watches from './Components/Watches';
// import Men from './Components/Men';
import Women from './Components/Women';
import Developer from './Components/Developer'
import Electronics from './Components/Electronics';
import About from "./Components/About"
import Account from "./Pages/Account";
import Food from "./Components/Food";
import Kitchen from "./Components/Kitchen"
import Profile from "./Components/Profile";
import Portfolios from "./Components/Portfolios";
import Signin from "./Pages/Signin";
import {AuthContextProvider} from './Context/AuthContext';
import UserAddressForm from "./Pages/UserAddressForm";
import './App.css';
import PortfolioDetails from "./Components/PortfolioDetails";
import DocsNeeded from "./Pages/DocsNeeded";
// import Food from "./Components/Food";

function App() {
  return (
    <Router>
    <AuthContextProvider>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Portfolios" element={<Index />} /> */}
        <Route path="/PortfoliosDetails" element={<PortfolioDetails />} />
        <Route path="/FlexConnect" element={<FlexConn />} />
        <Route path="/About" element={<About />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Bags" element={<Bags />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Sports_outdoor" element={<Sports_outdoor />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Watches" element={<Watches />} />
        <Route path="/Education_office" element={<Education_office />} />
        <Route path="/Health_beauty" element={<Health_beauty />} />
        <Route path="/Jewelry_accessories" element={<Jewelry_accessories />} />
        <Route path="/Developer" element={<Developer />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/DocsNeeded" element={<DocsNeeded />} />
        <Route path="/UserAddressForm" element={<UserAddressForm/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Food" element={<Food/>} />
        <Route path="/kitchen" element={<Kitchen/>} />
        {/* <Route path="/Food" element={<Food />} /> */}
      
        <Route path="*" element={<FourOFour />} />
      </Routes>
      
    </main>
        </AuthContextProvider>
        <Footer />
  </Router>
  );
}

export default App;
