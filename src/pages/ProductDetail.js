import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h2>{params.id}</h2>
    </section>
  );
};

export default ProductDetail;
