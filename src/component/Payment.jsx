import React from "react";

export default function Payment({ contact, address, shippingMethod, onBack }) {
  return (
    <div className="w-full h-screen mx-auto p-4 text-white">
      <nav className="text-xs text-blue-400 mb-4">
        <span className="hover:underline cursor-pointer">Information</span> <span className="mx-1">&gt;</span> <span className="hover:underline cursor-pointer">Shipping</span> <span className="mx-1">&gt;</span> <span className="font-semibold text-white">Payment</span>
      </nav>
      <div className="bg-black border border-gray-700 rounded-lg mb-6 divide-y items-center divide-gray-700">
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-gray-400">Contact</span>
          <span className="text-sm">{contact}</span>
          <button className="text-blue-400 text-xs ml-2">Change</button>
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-gray-400">Ship to</span>
          <span className="text-sm">{address}</span>
          <button className="text-blue-400 text-xs ml-2">Change</button>
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-gray-400">Shipping method</span>
          <span className="text-sm font-semibold">{shippingMethod}</span>
          <button className="text-blue-400 text-xs ml-2">Change</button>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">Payment</h2>
      <p className="text-gray-400 mb-4">All transactions are secure and encrypted.</p>
      <div className="bg-[#181818] border border-gray-700 rounded-lg flex flex-col items-center justify-center py-10 mb-6">
        <svg width="48" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="36" rx="4" fill="#222"/><rect x="12" y="14" width="24" height="8" rx="2" fill="#444"/><circle cx="36" cy="12" r="4" fill="#444"/><circle cx="40" cy="8" r="4" fill="#444"/><rect x="20" y="24" width="8" height="2" rx="1" fill="#444"/></svg>
        <span className="text-gray-400 mt-4 text-center">This store can't accept payments right now.</span>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button onClick={onBack} className="text-blue-400 text-sm hover:underline">&larr; Return to shipping</button>
        <button className="bg-gray-700 text-gray-400 px-6 py-2 rounded-lg font-semibold text-sm cursor-not-allowed" disabled>Pay now</button>
      </div>
    </div>
  );
} 