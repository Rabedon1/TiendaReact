// ProductDetailPage.jsx
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';


import laptopDell from '../img/laptopDell.jpg';
import reloj from '../img/reloj.jpg';
import audifonos from '../img/audifonos.jpg';
import iphone13 from '../img/iphone13.png';
import tablet from '../img/tablet.jpeg';

const products = [
    {
      id: '1',
      name: 'Laptop Dell XPS 13',
      description: 'La Dell XPS 13 es una laptop de alto rendimiento con una pantalla InfinityEdge de 13.4 pulgadas que ofrece una experiencia visual inmersiva. Equipada con un procesador Intel Core i7 de 11ª generación, 16GB de RAM y un SSD de 512GB, esta laptop es perfecta para profesionales y estudiantes que buscan potencia y portabilidad.',
      price: 1200,
      image: laptopDell
    },
    {
      id: '2',
      name: 'Smartphone iPhone 13',
      description: 'El iPhone 13 es el último modelo de Apple, con una pantalla Super Retina XDR de 6.1 pulgadas que ofrece colores vibrantes y un brillo excepcional. Con 128GB de almacenamiento, una cámara dual de 12MP con capacidades avanzadas de fotografía nocturna y el chip A15 Bionic, este smartphone es ideal para quienes buscan el mejor rendimiento y calidad de imagen.',
      price: 999,
      image: iphone13
    },
    {
      id: '3',
      name: 'Tablet Samsung Galaxy Tab S7',
      description: 'La Samsung Galaxy Tab S7 es una tableta versátil con una pantalla de 11 pulgadas que proporciona una experiencia visual impresionante. Con 128GB de almacenamiento y 6GB de RAM, es perfecta para el entretenimiento, la productividad y la creatividad. Además, su compatibilidad con el S Pen la convierte en una herramienta ideal para tomar notas y dibujar.',
      price: 650,
      image: tablet
    },
    {
      id: '4',
      name: 'Smartwatch Apple Watch Series 7',
      description: 'El Apple Watch Series 7 es el reloj inteligente más avanzado de Apple hasta la fecha. Con una pantalla siempre activa más grande y duradera, sensores avanzados de salud como el ECG y el oxímetro de pulso, y GPS integrado, este smartwatch es perfecto para monitorear tu salud y mantenerte conectado mientras te desplazas.',
      price: 399,
      image: reloj
    },
    {
      id: '5',
      name: 'Audífonos Sony WH-1000XM4',
      description: 'Los audífonos Sony WH-1000XM4 ofrecen una cancelación de ruido líder en la industria y una calidad de sonido superior. Con hasta 30 horas de duración de batería, control táctil intuitivo y la capacidad de conectarse a dos dispositivos simultáneamente, estos audífonos son ideales para viajeros frecuentes y amantes de la música.',
      price: 350,
      image: audifonos
    },
  ];
  

function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.details}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetailPage;

