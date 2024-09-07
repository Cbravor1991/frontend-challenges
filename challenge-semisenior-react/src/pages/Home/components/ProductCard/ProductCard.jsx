import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


export default function ProductCard({ product }) {

  const handleClick = (product) => {
    console.log(product);

  }


  return (
    <Card sx={{ width: 345, height: 400, display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap' 
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            ${product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rating: {product.rating.rate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> handleClick(product)}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}