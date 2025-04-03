import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      // const response = await fetch('http://localhost:5000/api/cart'); 
      const response = await fetch('https://api.incloz.com/api/cart'); 
      const data = await response.json();
      setCartItems(data.products);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const handleQuantityChange = async (productId, size, amount) => {
    const item = cartItems.find(item => item.product._id === productId && item.size === size);
    if (item) {
      const newQuantity = item.quantity + amount;
      if (newQuantity <= 0) {
        handleRemove(productId, size);
      } else {
        try {
          // await fetch('http://localhost:5000/api/cart', {
          await fetch('https://api.incloz.com/api/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, quantity: amount, size }),
          });
          fetchCart();
        } catch (error) {
          console.error('Failed to update quantity:', error);
        }
      }
    }
  };

  const handleRemove = async (productId, size) => {
    try {
      // Remove the item from the backend cart
      // await fetch('http://localhost:5000/api/cart', {
      await fetch('https://api.incloz.com/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, size }),
      });
      fetchCart(); // Refresh cart after delete
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
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
          <Grid item xs={12} key={`${item.product._id}-${item.size}`}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="img" src={item.product.image} alt={item.product.name} sx={{ width: 100, height: 100, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{item.product.title}</Typography>
                  <Typography variant="body2">Taille: {item.size}</Typography>
                  <Typography variant="body1" sx={{ color: 'red' }}>
                    {item.product.price}€ TTC
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => handleQuantityChange(item.product._id, item.size, -1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.product._id, item.size, 1)}>
                  <AddIcon />
                </IconButton>
              </Box>

              <IconButton onClick={() => handleRemove(item.product._id, item.size)}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Grid>
        ))}

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
