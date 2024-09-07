import React, { useEffect, useState } from 'react';
import {ProductCard} from '../ProductCard';
import { Grid2 } from '@mui/material';
import { FilterSortBar } from '../FilterSortBar';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    //seteo las variables necesarias para filtrar los productos.
    const [filteredProducts, setFilteredProducts] = useState([]);
    //voy a filtar por categoria preparo la variable
    const [categoryFilter, setCategoryFilter] = useState("seleccionar");
    //
    const [sortOption, setSortOption] = useState(''); 

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
      if (categoryFilter!=="seleccionar"){
        console.log(categoryFilter);
        updateProducts = updateProducts.filter(
          (product) => product.category === categoryFilter
        );
      }else {
        updateProducts = [... products]
      }

      //ordenar según la selección, utilizo sort, por precio o por rating
      if(sortOption === 'price-asc'){
        updateProducts.sort((a,b)=> a.price - b.price);
      } else if (sortOption === 'price-desc'){
        updateProducts.sort((a,b)=> b.price - a.price);
      } else if (sortOption === 'popularity') {
        updateProducts.sort((a, b)=> b.rating.rate - a.rating.rate);
      } 

      //seteo lo productos filtrados
      setFilteredProducts(updateProducts);

    }, [categoryFilter, sortOption, products]);
  
    return (
     <div>
      <FilterSortBar
        categories={[...new Set(products.map((product) => product.category))]}
        onFilterChange={setCategoryFilter}
        onSortChange={setSortOption}
      />
       
      <Grid2 container spacing={3}>
        {error ? (
          <div>Error de en la consulta: {error}</div>
        ) : (
          filteredProducts.map((product) => (
            <Grid2 item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid2>
          ))
        )}
      </Grid2>
     </div>
      
    );
  };
  
  export default ProductList;