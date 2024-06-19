import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send product to backend
    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setProducts(data));
        setProduct({ name: '', description: '', price: '', image: '' });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Add New Product</h2>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="border p-2 w-full mb-4"
        required
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Product</button>
    </form>
  );
};

export default ProductForm;
