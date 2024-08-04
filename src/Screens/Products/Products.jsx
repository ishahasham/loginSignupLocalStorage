import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../Data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Products = () => {
  const { id } = useParams();
  console.log(id);

  const filterData = ProductData.filter((e) => e.id == id);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
      {filterData.map((e) => (
        <Card key={e.id} sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image={e.image}
            alt={e.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {e.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {e.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Products;
