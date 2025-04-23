import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const handleQuantityChange = (productId, amount) => {
    const updated = cartItems.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    updateCart(updated);
  };

  const handleRemove = (productId) => {
    const updated = cartItems.filter((item) => item.productId !== productId);
    updateCart(updated);
  };

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 4 }}>
      <Button component={Link} to="/boutique" sx={{ color: "#14235E", mb: 2 }}>
        Retour à la boutique
      </Button>

      <Typography variant="h4" gutterBottom>
        Votre panier
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Votre panier est vide</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.productId}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: 100, height: 100, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">
                      Taille: {item.size}
                    </Typography>
                    <Typography variant="body2">
                      Adaptation: {item.adaptation}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "red" }}>
                      {item.price}€ TTC
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    onClick={() => handleQuantityChange(item.productId, -1)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton
                    onClick={() => handleQuantityChange(item.productId, 1)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>

                <IconButton onClick={() => handleRemove(item.productId)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Divider sx={{ my: 2 }} />
            </Grid>
          ))}

          <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
            <Box sx={{ border: "1px solid #ddd", padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Récapitulatif de la commande
              </Typography>
              <Typography>
                Total articles : {getTotal().toFixed(2)} €
              </Typography>
              <Typography>Frais de livraison : 3.99 €</Typography>
              <Typography variant="h6">
                Total : {(getTotal() + 3.99).toFixed(2)} €
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate("/login")}
              >
                Se connecter pour payer
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Panier;