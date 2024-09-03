import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import { Grid2 } from '@mui/material';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    //seteo las variables necesarias para filtrar los productos.
    const [filteredProducts, setFilteredProducts] = useState([]);
    //voy a filtar por categoria preparo la variable
    const [categoryFilter, setCategoryFilter] = useState('');
    //
    const [sortOption, setSortOption] = usestate(''); 

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
          }
          const data = await response.json();
          setProducts(data);
          setFilteredProducts(data);
        } catch (error) {
          setError(error.message);

        }
      };
  
      fetchProducts();
    }, []);

    useEffect(()=>{

      //realizo una copia de los productos obtenidos por la consulta, para manipularlos
      let updateProducts = [... products];

      //si se eligió una categoria, se aplica el filtro a los productos que se van a mostrar
      if (categoryFilter){
        updateProducts = updateProducts.filter(
          (product) => product.category === categoryFilter
        );
      }

      


    }, []);
  
    return (
      <Grid2 container spacing={3}>
        {error ? (
          <div>Error de en la consulta: {error}</div>
        ) : (
          products.map((product) => (
            <Grid2 item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid2>
          ))
        )}
      </Grid2>
    );
  };
  
  export default ProductList;