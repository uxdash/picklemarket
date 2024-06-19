import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4">
      <h2 className="text-2xl">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-xl">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">View Product</Link>
    </div>
  );
};

export default ProductCard;
