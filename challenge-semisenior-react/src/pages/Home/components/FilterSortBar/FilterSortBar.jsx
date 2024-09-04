import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid2 } from '@mui/material';

const FilterSortBar = ({ categories, onFilterChange, onSortChange }) => {
  return (
    <Grid2 container spacing={2} style={{ marginBottom: '20px' }}>
   
      <Grid2 item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="category-filter-label">Categoría</InputLabel>
          <Select
            labelId="category-filter-label"
            label="Categoría"
            onChange={(e) => onFilterChange(e.target.value)}
            defaultValue="seleccionar"
          >
            <MenuItem value="seleccionar">
              <em>Todas las categorías</em>
            </MenuItem>
            {categories.map((category) => (
            <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
             
            ))}
        
          </Select>
        </FormControl>
      </Grid2>

      
      <Grid2 item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="sort-option-label">Ordenar por</InputLabel>
          <Select
            labelId="sort-option-label"
            label="Ordenar por"
            onChange={(e) => onSortChange(e.target.value)}
            defaultValue="seleccionar"
          >
            <MenuItem value="price-asc">Precio: Bajo a Alto</MenuItem>
            <MenuItem value="price-desc">Precio: Alto a Bajo</MenuItem>
            <MenuItem value="popularity">Popularidad</MenuItem>
            <MenuItem value="seleccionar">
              <em>Sin orden</em>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

export default FilterSortBar;
