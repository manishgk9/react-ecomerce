import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-3">
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Explore our wide variety of products!
      </p>
      <ProductList/>
    </div>
  );
};

export default Home;
