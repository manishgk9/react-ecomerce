import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products =  [
  {
    "id": 1,
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": "Rs.10",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "name": "Mens Casual Premium Slim Fit T-Shirts",
    "price": "Rs.20",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    "id": 3,
    "name": "Mens Cotton Jacket",
    "price": "Rs.30",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    "id": 4,
    "name": "Mens Casual Slim Fit",
    "price": "Rs.40",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    "id": 5,
    "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": "Rs.695",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 6,
    "name": "Solid Gold Petite Micropave",
    "price": "Rs.168",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 7,
    "name": "White Gold Plated Princess",
    "price": "Rs.9.99",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    "id": 8,
    "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": "Rs.10.99",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
  }
];
const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]);
      alert(`Product ${productToAdd.name} added to cart`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <Link to={`#`}>
              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: `url(${product.image})` }}>
                <button onClick={() => addToCart(product.id)} className="p-2 rounded-full bg-indigo-500 text-white mx-5 -mb-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4L4 4H3m1 16a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </div>
            </Link>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">{product.name}</h3>
              <span className="text-gray-500 mt-2">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
