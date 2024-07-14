
import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


import laptopDell from '../img/laptopDell.jpg';
import reloj from '../img/reloj.jpg';
import audifonos from '../img/audifonos.jpg';
import iphone13 from '../img/iphone13.png';
import tablet from '../img/tablet.jpeg';



const products = [
  {
    id: '1',
    name: 'Laptop Dell XPS 13',
    description: 'Laptop Dell XPS 13 con pantalla InfinityEdge y procesador Intel Core i7.',
    price: 1200,
    image: laptopDell
  },
  {
    id: '2',
    name: 'Smartphone iPhone 13',
    description: 'iPhone 13 con 128GB de almacenamiento y cámara dual de 12MP.',
    price: 999,
    image: iphone13
  },
  {
    id: '3',
    name: 'Tablet Samsung Galaxy Tab S7',
    description: 'Samsung Galaxy Tab S7 con pantalla de 11 pulgadas y 128GB de almacenamiento.',
    price: 650,
    image: tablet
  },
  {
    id: '4',
    name: 'Smartwatch Apple Watch Series 7',
    description: 'Apple Watch Series 7 con GPS y sensor de oxígeno en sangre.',
    price: 399,
    image: reloj
  },
  {
    id: '5',
    name: 'Audífonos Sony WH-1000XM4',
    description: 'Audífonos Sony WH-1000XM4 con cancelación de ruido y hasta 30 horas de batería.',
    price: 350,
    image: audifonos
  },
];

function ProductCard() {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCard;
