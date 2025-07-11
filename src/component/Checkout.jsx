import React, { useState } from "react";
import { Usecart } from "../context/Context.jsx";
import Shipping from "./Shipping";
import Payment from "./Payment";

export default function Checkout() {
  const { cartItems } = Usecart();
  const [step, setStep] = useState(0); // 0: Info, 1: Shipping, 2: Payment
  const [info, setInfo] = useState({
    contact: "",
    emailOffers: false,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "punjab",
    zip: "",
    saveInfo: false,
  });
  const [shippingMethod, setShippingMethod] = useState("Standard");

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handlers for info form
  const handleInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleInfoSubmit = (e) => {
    e.preventDefault();
    setStep(1);
  };

  // Handlers for shipping
  const handleShippingBack = () => setStep(0);
  const handleShippingContinue = (method) => {
    setShippingMethod(method);
    setStep(2);
  };

  // Handler for payment back
  const handlePaymentBack = () => setStep(1);

  // Compose address string
  const addressString = `${info.address}${info.apartment ? ", " + info.apartment : ""}, ${info.city} ${info.state} ${info.zip}`;

  // Step content
  let leftContent;
  if (step === 0) {
    leftContent = (
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-8 py-8 flex flex-col">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-2xl font-bold">△</span>
          <nav className="ml-4 text-xs text-gray-400">
            <span className="font-semibold text-white">Information</span> <span className="mx-1">&gt;</span> Shipping <span className="mx-1">&gt;</span> Payment
          </nav>
        </div>
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <div className="mb-4">
          <input
            className="w-full bg-black border rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Email or mobile phone number"
            type="text"
            name="contact"
            value={info.contact}
            onChange={handleInfoChange}
          />
          <p className=" text-xs mt-1">Enter an email or phone number</p>
          <label className="flex items-center mt-2 text-xs cursor-pointer">
            <input type="checkbox" className="form-checkbox mr-2" name="emailOffers" checked={info.emailOffers} onChange={handleInfoChange} />
            Email me with news and offers
          </label>
        </div>
        <h2 className="text-lg font-bold mb-2 mt-6">Shipping address</h2>
        <form className="space-y-3" onSubmit={handleInfoSubmit}>
          <select className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white" name="state" value={info.state} onChange={handleInfoChange}>
            <option>punjab</option>
            <option>jalandhar</option>
            <option>ludhiana</option>
            <option>pahgwara</option>
            <option>hoshiarpur</option>
            <option>Amritsar</option>
            <option>Bathinda</option>
            <option>Faridkot</option>
            <option>Gurdaspur</option>
            <option>Mansa</option>
          </select>
          <div className="flex flex-col sm:flex-row gap-3">
            <input className="w-full sm:w-1/2 bg-black border border-gray-700 rounded-md px-4 py-3 text-white" placeholder="First name" name="firstName" value={info.firstName} onChange={handleInfoChange} />
            <input className="w-full sm:w-1/2 bg-black border border-gray-700 rounded-md px-4 py-3 text-white" placeholder="Last name (optional)" name="lastName" value={info.lastName} onChange={handleInfoChange} />
          </div>
          <input className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white" placeholder="Address" name="address" value={info.address} onChange={handleInfoChange} />
          <input className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white" placeholder="Apartment, suite, etc. (optional)" name="apartment" value={info.apartment} onChange={handleInfoChange} />
          <div className="flex flex-col sm:flex-row gap-3">
            <input className="w-full sm:w-1/2 bg-black border border-gray-700 rounded-md px-4 py-3 text-white" placeholder="City" name="city" value={info.city} onChange={handleInfoChange} />
            <select className="w-full sm:w-1/4 bg-black border border-gray-700 rounded-md px-4 py-3 text-white" name="state" value={info.state} onChange={handleInfoChange}>
              <option>punjab</option>
              <option>jalandhar</option>
              <option>ludhiana</option>
              <option>pahgwara</option>
              <option>hoshiarpur</option>
              <option>Amritsar</option>
              <option>Bathinda</option>
              <option>Faridkot</option>
              <option>Gurdaspur</option>
              <option>Mansa</option>
            </select>
            <input className="w-full sm:w-1/4 bg-black border border-gray-700 rounded-md px-4 py-3 text-white" placeholder="ZIP code" name="zip" value={info.zip} onChange={handleInfoChange} />
          </div>
          <label className="flex items-center text-xs cursor-pointer">
            <input type="checkbox" className="form-checkbox mr-2" name="saveInfo" checked={info.saveInfo} onChange={handleInfoChange} />
            Save this information for next time
          </label>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mt-4">Continue to shipping</button>
        </form>
      </div>
    );
  } else if (step === 1) {
    leftContent = (
      <Shipping
        contact={info.contact}
        address={addressString}
        onBack={handleShippingBack}
        onContinue={handleShippingContinue}
      />
    );
  } else if (step === 2) {
    leftContent = (
      <Payment
        contact={info.contact}
        address={addressString}
        shippingMethod={shippingMethod}
        onBack={handlePaymentBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#100f0f] text-white flex flex-col md:flex-row">
      {/* Left: Step Content */}
      <div className="w-full md:w-1/2 max-w-2xl mx-auto flex flex-col">
        {leftContent}
      </div>
      {/* Right: Cart summary */}
      <div className="w-full md:w-1/2 max-w-2xl mx-auto bg-[#100f0f] border-t md:border-t-0 md:border-l border-gray-800 px-4 sm:px-8 py-8 flex flex-col">
        <div className="mb-8">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400">Your cart is empty.</div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center mb-4">
                <div className="relative mr-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded-md bg-[#1b1b1b]" />
                  <span className="absolute -top-2 -right-2 bg-gray-700 text-xs rounded-full w-5 h-5 flex items-center justify-center border border-black">{item.quantity}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate" title={item.name}>{item.name}</div>
                  {item.variant && <div className="text-xs text-gray-400 truncate">{item.variant}</div>}
                </div>
                <div className="text-sm font-semibold ml-4 whitespace-nowrap">${item.price.toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-gray-800 pt-4 mt-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal · {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span className="text-gray-400">Calculated at next step</span>
          </div>
          <div className="flex justify-between items-center text-base font-bold mt-4">
            <span>Total</span>
            <span><span className="text-xs font-normal text-gray-400 mr-1">USD</span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
