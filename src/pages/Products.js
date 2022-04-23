import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/A Book">A Book</Link>
        </li>
        <li>
          <Link to="/products/Carpet">Carpet</Link>
        </li>
        <li>
          <Link to="/products/Online Bag">Online Bag</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
