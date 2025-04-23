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
  Radio,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Create a custom theme to match the design
const theme = createTheme({
  palette: {
    primary: {
      main: "#FD5C35",
    },
    secondary: {
      main: "#14235E",
    },
    background: {
      default: "#FFF6EB",
    },
  },
  typography: {
    fontFamily: '"Decalotype", "Roboto", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
      color: "#14235E",
    },
    subtitle1: {
      fontStyle: "italic",
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: "1px solid #14235E",
          color: "#14235E",
          width: "48px",
          height: "36px",
          "&.Mui-selected": {
            backgroundColor: "#14235E",
            color: "white",
            "&:hover": {
              backgroundColor: "#14235E",
              opacity: 0.9,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#FD5C35",
          color: "white",
          borderRadius: "4px",
          padding: "10px 30px",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#e64d2e",
          },
        },
      },
    },
  },
});

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("S");
  const [adaptation, setAdaptation] = useState("pression");
  const [dialogOpen, setDialogOpen] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const IMG_URL = import.meta.env.VITE_IMG_URL;


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement du produit", error);
      }
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      productId: product._id,
      title: product.title,
      image: `${IMG_URL}/${product.image}`,
      price: product.price,
      size,
      adaptation,
      quantity: 1,
    };

    const existingIndex = cart.findIndex(
      (item) =>
        item.productId === newItem.productId &&
        item.size === newItem.size &&
        item.adaptation === newItem.adaptation
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setDialogOpen(true);
  };

  if (!product)
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "#FFF6EB", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography>Chargement...</Typography>
        </Box>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#FFF6EB", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={5} lg={4}>
              <Box sx={{ position: "relative", height: "200px", display: "flex", justifyContent: "center" }}>
                <Box sx={{ backgroundColor: "#FD5C35", width: "50%", height: "100%", position: "absolute", left: 0, top: 0, zIndex: 1 }} />
                <Box
                  component="img"
                  src={`${IMG_URL}/${product.image}`}
                  alt={product.title}
                  sx={{ position: "relative", zIndex: 2, height: "100%", objectFit: "contain", maxWidth: "280px" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
              <Typography variant="h5">{product.title}</Typography>
              <Typography variant="subtitle1">{product.subtitle}</Typography>
              <Typography color="secondary.main" fontSize="1.75rem" fontWeight="bold" mb={3}>
                {product.price} €
              </Typography>
              <Typography color="secondary.main" mb={4} fontSize="0.9rem" lineHeight={1.5} maxWidth="600px">
                {product.description}
              </Typography>

              <Box mb={4}>
                <ToggleButtonGroup
                  value={size}
                  exclusive
                  onChange={(e, newSize) => newSize && setSize(newSize)}
                  aria-label="taille"
                >
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((t) => (
                    <ToggleButton key={t} value={t} aria-label={t}>
                      {t}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              <Box mb={4}>
                <Typography fontWeight="bold" mb={2}>Choix de l&apos;adaptation :</Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["pression", "auto-grippant", "aimants"].map((option) => (
                    <Box
                      key={option}
                      onClick={() => setAdaptation(option)}
                      sx={{
                        border: "1px solid #14235E",
                        borderRadius: "2px",
                        width: "110px",
                        height: "110px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        backgroundColor: adaptation === option ? "rgba(20, 35, 94, 0.1)" : "transparent",
                      }}
                    >
                      <Typography>{option}</Typography>
                      <Radio checked={adaptation === option} value={option} name="adaptation-radio" />
                    </Box>
                  ))}
                </Box>
              </Box>

              <Button onClick={handleAddToCart} variant="contained">Ajouter au panier</Button>
            </Grid>
          </Grid>

          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Produit ajouté au panier !</DialogTitle>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Continuer</Button>
              <Button variant="contained" onClick={() => navigate("/panier")}>Voir le panier</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProductDetail;
