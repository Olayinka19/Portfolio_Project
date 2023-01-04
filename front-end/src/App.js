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

import './App.css';

function App() {
  return (
    <Router>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Index />} />
        <Route path="/products/:id" element={<Show />} />
        <Route path="/products/:id/edit" element={<Edit />} />
        <Route path="/products/new" element={<New />} />
        <Route path="/FlexConnect" element={<FlexConn />} />
        <Route path="About" element={<AboutPage />} />
      
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </main>
        <Footer />
  </Router>
  );
}

export default App;
