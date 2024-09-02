import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import { Grid2 } from '@mui/material';

const ProductList = () => {
    // Crear un array de 20 elementos para renderizar 20 tarjetas
    const productCards = Array(20).fill(null);
  
    return (
      <Grid2 container spacing={3}>
        {productCards.map((_, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <ProductCard />
          </Grid2>
        ))}
      </Grid2>
    );
  };
  
  export default ProductList;