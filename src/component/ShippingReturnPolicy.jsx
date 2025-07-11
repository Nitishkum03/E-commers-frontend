import React from "react";

export default function ShippingReturnPolicy() {
  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full bg-black rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Shipping & Return Policy</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shipping</h2>
          <p className="text-gray-300 mb-2">We offer free standard shipping on all orders over $50. Orders are processed within 1-2 business days and typically arrive within 5-7 business days.</p>
          <p className="text-gray-400 text-sm">Express shipping options are available at checkout for an additional fee.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Returns</h2>
          <p className="text-gray-300 mb-2">If you are not completely satisfied with your purchase, you may return it within 30 days of delivery for a full refund or exchange.</p>
          <ul className="list-disc list-inside text-gray-400 text-sm mb-2">
            <li>Items must be unused and in original packaging.</li>
            <li>Return shipping is free for damaged or incorrect items.</li>
            <li>For all other returns, customers are responsible for return shipping costs.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-300">For questions about shipping or returns, please email <a href="mailto:support@acmestore.com" className="text-blue-400 underline">support@acmestore.com</a>.</p>
        </section>
      </div>
    </div>
  );
} 