import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Usecart } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity } = Usecart();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const navigate = useNavigate();
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white shadow-lg transform transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-full max-w-xs sm:max-w-md sm:w-[400px] rounded-l-2xl flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-black z-10">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button
            onClick={onClose}
            className="text-white text-xl font-bold hover:text-ggreen-400 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ggreen-400"
            aria-label="Close cart"
          >
            <FaTimes/>
          </button>
        </div>
        {/* Cart Items */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-4">
              <FaCartShopping size={60} className="sm:size-[80px]" />
              <p className="text-lg sm:text-xl font-semibold text-center">Your cart is empty</p>
            </div>
          ) : (
            <ul className="w-full px-2 sm:px-4 flex-1 overflow-y-auto">
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 border-b border-gray-700 py-4 relative min-h-[72px]">
                  {/* Remove button over image */}
                  <div className="relative flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-md bg-[#1b1b1b]" />
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="absolute -top-2 -left-2 w-7 h-7 flex items-center justify-center rounded-full bg-gray-800 text-white text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 z-10 shadow"
                      aria-label="Remove item"
                    >
                      <FaTimes size={15} />
                    </button>
                  </div>
                  {/* Product info */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex justify-between items-start w-full min-w-0">
                      <div className="font-semibold text-sm break-words leading-tight max-w-[120px] sm:max-w-[200px]" title={item.name}>{item.name}</div>
                      <div className="text-sm font-semibold ml-4 whitespace-nowrap">${item.price.toFixed(2)} USD</div>
                    </div>
                    {item.variant && (
                      <span className="text-xs text-gray-400 break-words max-w-[120px] sm:max-w-[200px]">{item.variant}</span>
                    )}
                    {/* Quantity controls */}
                    <div className="flex w-full sm:w-auto justify-end items-center mt-2">
                      <div className="flex items-center rounded-full border border-gray-700 px-2 py-1 bg-[#181818]">
                        <button onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))} className="px-2 text-base sm:text-lg"><FaMinus /></button>
                        <span className="px-2 select-none text-sm sm:text-base">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="px-2 text-base sm:text-lg"><FaPlus /></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Summary and Checkout Button */}
        <div className="p-4 border-t border-gray-700 bg-black sticky bottom-0 w-full">
          <div className="flex justify-between py-1 text-xs sm:text-sm">
            <span>Taxes</span>
            <span>$0.00 USD</span>
          </div>
          <div className="flex justify-between py-1 text-xs sm:text-sm">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between py-2 text-base sm:text-lg font-bold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)} USD</span>
          </div>
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full mt-4 font-semibold text-base shadow-lg"
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
