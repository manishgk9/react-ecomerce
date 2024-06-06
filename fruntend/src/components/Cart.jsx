import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$10', quantity: 2 },
    { id: 2, name: 'Product 2', price: '$20', quantity: 1 },
  ];

  return (
    <div className="container mx-auto px-6 py-3">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Your Cart</h1>
      <div className="mt-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.price}</p>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
