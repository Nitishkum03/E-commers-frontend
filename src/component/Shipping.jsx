import React, { useState } from "react";

export default function Shipping({ contact, address, onBack, onContinue }) {
  const [shippingMethod, setShippingMethod] = useState("Standard");
  const shippingOptions = [
    { label: "Economy", price: 4.9, desc: "5 to 8 business days" },
    { label: "Standard", price: 8.9, desc: "3 to 4 business days" },
  ];

  return (
    <div className=" w-full mt-10 mx-auto p-4 text-white">
      <nav className="text-xs text-green-400 mb-4">
        <span className="hover:underline cursor-pointer">Information</span> <span className="mx-1">&gt;</span> <span className="font-semibold text-white">Shipping</span> <span className="mx-1">&gt;</span> Payment
      </nav>
      <div className="bg-black border border-gray-700 rounded-lg mb-6">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
          <span className="text-gray-400">Contact</span>
          <span className="text-sm">{contact}</span>
          <button className="text-blue-400 text-xs ml-2">Change</button>
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-gray-400">Ship to</span>
          <span className="text-sm">{address}</span>
          <button className="text-blue-400 text-xs ml-2">Change</button>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">Shipping method</h2>
      <div className="bg-black border border-gray-700 rounded-lg mt-10 mb-6 divide-y divide-gray-700">
        {shippingOptions.map((opt) => (
          <label key={opt.label} className={`flex items-center px-4 py-3 cursor-pointer ${shippingMethod === opt.label ? 'bg-[#181818] border-l-4 border-blue-500' : ''}`}>
            <input
              type="radio"
              name="shipping"
              value={opt.label}
              checked={shippingMethod === opt.label}
              onChange={() => setShippingMethod(opt.label)}
              className="form-radio accent-blue-500 mr-3"
            />
            <div className="flex-1">
              <div className="font-semibold">{opt.label}</div>
              <div className="text-xs text-gray-400">{opt.desc}</div>
            </div>
            <div className="font-semibold">${opt.price.toFixed(2)}</div>
          </label>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button onClick={onBack} className="text-blue-400 text-sm hover:underline">&larr; Return to information</button>
        <button onClick={() => onContinue(shippingMethod)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm">Continue to payment</button>
      </div>
    </div>
  );
} 