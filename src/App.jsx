import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import ProductGrid from "./component/ProductGrid"
import All from "./component/All"
import ProductPage from "./component/ProductPage";
import ErrorPage from "./component/ErrorPage";
import ShippingReturnPolicy from "./component/ShippingReturnPolicy";
import Checkout from "./component/Checkout";
import Shirts from "./component/Shirts";
import Shipping from "./component/Shipping";
import Payment from "./component/Payment";
import Stickers from "./component/Stickers";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-[#100f0f]">
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<ProductGrid search={search} />} />
          <Route path="/all" element={<All search={search} />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/stickers" element={<Stickers />} />
          <Route path="/shipping" element={<Shipping contact="test@email.com" address="123 Main St, City, Country" onBack={() => {}} onContinue={() => {}} />} />
          <Route path="/payment" element={<Payment contact="test@email.com" address="123 Main St, City, Country" shippingMethod="Standard" onBack={() => {}} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shipping-return-policy" element={<ShippingReturnPolicy />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App

