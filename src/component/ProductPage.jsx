import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Usecart } from "../context/Context.jsx";


export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { addtocart } = Usecart();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchRelatedProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            let data = await response.json();
            data = data.filter(p => p._id !== id).slice(0, 3);
            setRelated(data);
        } catch (error) {
            console.error('Error fetching related products:', error);
        }
    }

    fetchProduct();
    fetchRelatedProducts();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Product not found
      </div>
    );
  }

  // For demo: use product.image for main, and if product.images exists, use as thumbnails, else just show main image
  const thumbnails = [product.image];
  const colors =  ["Black", "White", "Blue"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const description = product.description ;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-4 px-2 md:px-0">
      <div className="max-w-7xl w-full bg-black rounded-2xl flex flex-col md:flex-row p-2 md:p-8 gap-4 md:gap-8">
        {/* Left: Product Image */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full max-w-xs md:w-[400px] md:h-[400px] h-64 object-contain rounded-xl" />
          {/* Thumbnails */}
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-8">
            {thumbnails.map((img, idx) => (
              <img key={idx} src={img} alt="thumb" className="w-14 h-14 md:w-20 md:h-20 object-contain rounded-lg border-2 border-transparent hover:border-green-500 cursor-pointer" />
            ))}
          </div>
        </div>
        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col justify-center text-white gap-4 md:gap-6 mt-6 md:mt-0 px-2 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{product.name}</h1>
          <span className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-lg md:text-xl font-semibold w-fit">{`$${product.price.toFixed(2)}`}</span>
          <hr className="border-gray-700 my-2" />
          <div>
            <div className="mb-2 font-semibold">COLOR</div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {colors.map((color, idx) => (
                <span key={idx} className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#222] border border-gray-600 text-white text-base cursor-pointer hover:border-green-500 mb-2 md:mb-0">{color}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 font-semibold">SIZE</div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {sizes.map((size, idx) => (
                <span key={idx} className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#222] border border-gray-600 text-white text-base cursor-pointer hover:border-green-500 mb-2 md:mb-0">{size}</span>
              ))}
            </div>
          </div>
          <div className="text-gray-400 text-sm mt-2">{description}</div>
          <button className="mt-4 md:mt-6 bg-green-700 hover:bg-green-900 text-white text-base md:text-lg rounded-full py-3 md:py-4 w-full flex items-center justify-center gap-2 transition-all"
            onClick={() => addtocart(product)}>
            <span className="text-xl md:text-2xl font-bold items-center">+</span> Add To Cart 
          </button>
        </div>
      </div>
      {/* Related Products Section */}
      <div className="w-full max-w-7xl mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-2">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 px-1 sm:px-2 md:px-0">
          {related.map((rel) => (
            <Link to={`/product/${rel._id}`} key={rel._id} className="bg-black rounded-xl p-2 sm:p-4 flex justify-center items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:border-green-500 border border-transparent">
              <div className="relative w-full flex flex-col items-center">
                <img src={rel.image} alt={rel.name} className="max-h-[120px] sm:max-h-[150px] md:max-h-[180px] w-full object-contain" />
                <div className="absolute bottom-2 sm:bottom-4 gap-2 flex space-x-2 sm:space-x-3 bg-black border p-1 sm:p-2 rounded-full text-xs sm:text-sm text-white items-center">
                  <span className="text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-base font-semibold">{rel.name}</span>
                  <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-base font-semibold">{`$${rel.price.toFixed(2)}`}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 