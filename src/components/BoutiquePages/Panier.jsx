import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Panier = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'T-shirt 100% élasthanne',
      size: 'S',
      price: 40,
      quantity: 1,
      image: 'path-to-tshirt-image', 
    },
    {
      id: 2,
      name: 'Short 100% élasthanne',
      size: 'S',
      price: 40,
      quantity: 1,
      image: 'path-to-short-image', 
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button component={Link} to="/boutique" sx={{ color: '#14235E', mb: 2 }}>
        Retourner à la boutique
      </Button>

      <Typography variant="h4" gutterBottom>
        Votre panier
      </Typography>

      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Product Image */}
                <Box component="img" src={item.image} alt={item.name} sx={{ width: 100, height: 100, mr: 2 }} />
                
                {/* Product Details */}
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">Taille: {item.size}</Typography>
                  <Typography variant="body1" sx={{ color: 'red' }}>
                    {item.price}€ TTC
                  </Typography>
                </Box>
              </Box>

              {/* Quantity Controls */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                  <AddIcon />
                </IconButton>
              </Box>

              {/* Delete Button */}
              <IconButton onClick={() => handleQuantityChange(item.id, -item.quantity)}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Grid>
        ))}

        {/* Summary Section */}
        <Grid item xs={12} md={4} sx={{ ml: 'auto' }}>
          <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Récapitulatif de la commande
            </Typography>
            <Typography variant="body1">Total des articles: {getTotal()}€</Typography>
            <Typography variant="body1">Frais de livraison: 3.99€</Typography>
            <Typography variant="h6">Total: {(getTotal() + 3.99).toFixed(2)}€</Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Passer au paiement
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Panier;
