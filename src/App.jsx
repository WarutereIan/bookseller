import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending";
import BuyBook from "./pages/BuyBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-book" element={<BuyBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
