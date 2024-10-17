import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const items = [
  { title: 'T-SHIRT', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/assets/tshirt.png' },
  { title: 'Jogging', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/assets/jogging.png' },
  { title: 'Short', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/assets/short.png' },
  { title: 'Veste', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/assets/veste.png' }
];

const ShopCards = () => {
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    navigate('/panier');
  };

  return (
    <div>
      <Typography variant="h3" align="center" style={{ color: '#14235E', margin: '20px 0' }}>
        La boutique
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card style={{ backgroundColor: '#FFF6EB', borderRadius: '10px' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.imgSrc}
                alt={item.title}
                style={{ backgroundColor: '#FD4802' }}
              />
              <CardContent>
                <Typography variant="h6" align="center" style={{ color: '#14235E' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" align="center" style={{ color: '#14235E' }}>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  fullWidth
                  style={{ marginTop: '10px', backgroundColor: '#FD4802' }}
                  onClick={handleAddToCart} 
                >
                  Ajouter au panier
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShopCards;
