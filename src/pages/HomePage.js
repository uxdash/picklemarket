import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../store/productsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    // Fetch products from backend
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to PickleMart!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4">
            <h2 className="text-2xl">{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/product/${product._id}`} className="text-blue-500">View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
