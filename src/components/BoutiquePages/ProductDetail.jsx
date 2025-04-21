import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("S");
  const [adaptation, setAdaptation] = useState("pression");
//   const [quantity, setQuantity] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getProduct = async () => {
    const res = await axios.get(`http://localhost:5000/api/products/${id}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleAddToCart = async () => {
    await axios.post("http://localhost:5000/api/cart", {
      productId: product._id,
      size,
      adaptation,
      quantity,
    });

    setDialogOpen(true);
  };

  if (!product) return <div>Chargement...</div>;

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
        <Button component={Link} to="/boutique" sx={{ color: '#14235E', mb: 2 }}>
          Retourner à la boutique
        </Button>
        <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.title} width="100%" />

        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" color="#14235E">
            {product.title}
          </Typography>
          <Typography fontStyle="italic" mb={1}>
            {product.subtitle}
          </Typography>
          <Typography color="#14235E" fontSize="1.5rem" fontWeight="bold">
            {product.price}€
          </Typography>
          <Typography mt={2}>{product.description}</Typography>

          <Box mt={3}>
            <Typography fontWeight="bold" mb={1}>
              Taille :
            </Typography>
            <ToggleButtonGroup
              value={size}
              exclusive
              onChange={(e, newSize) => setSize(newSize)}
              color="primary"
            >
              {["XS", "S", "M", "L", "XL", "XXL"].map((t) => (
                <ToggleButton key={t} value={t}>
                  {t}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          <Box mt={3}>
            <Typography fontWeight="bold" mb={1}>
              Choix de l’adaptation :
            </Typography>
            <ToggleButtonGroup
              value={adaptation}
              exclusive
              onChange={(e, newAdap) => setAdaptation(newAdap)}
              color="primary"
            >
              {["pression", "auto-grippant", "aimants"].map((adap) => (
                <ToggleButton key={adap} value={adap}>
                  {adap}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FD5C35",
              borderRadius: "25px",
              mt: 4,
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleAddToCart}
          >
            Ajouter au panier
          </Button>
        </Grid>
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Produit ajouté au panier !</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Continuer</Button>
          <Button
            variant="contained"
            onClick={() => navigate("/panier")}
            sx={{ backgroundColor: "#FD5C35" }}
          >
            Voir le panier
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductDetail;
