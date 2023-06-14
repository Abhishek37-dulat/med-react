import "./App.css";
import CardsFunds from "./Components/CardsFunds/CardsFunds";
import DownRow from "./Components/DownRow/DownRow";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Register from "./Pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYou from "./Pages/ThankYou";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App" style={{ overflowY: "hidden" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
          <CardsFunds />
          <DownRow />
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
