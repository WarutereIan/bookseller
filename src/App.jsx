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
        <Route path="/" exact element={<Home />} />
        <Route path="/trending" exact element={<Trending />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/get-book" exact element={<BuyBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
