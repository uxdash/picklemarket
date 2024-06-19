import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl">PickleMart</Link>
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          <Link to="/add-product" className="text-white">Add Product</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
