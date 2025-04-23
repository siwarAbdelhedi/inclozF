import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import axios from "axios";

const StyledCard = styled(Card)({
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "visible",
  position: "relative",
});

const ImageContainer = styled(Box)({
  backgroundColor: "#FD5C35",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "180px",
  width: "100%",
  marginBottom: "0",
});

const AddButton = styled(Button)({
  backgroundColor: "#FD4802",
  color: "#fff",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  minWidth: "0",
  padding: "0",
  fontSize: "24px",
  position: "absolute",
  bottom: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "#e54402",
  },
});

const ShopCards = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const IMG_URL = import.meta.env.VITE_IMG_URL;


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products`);
        setItems(data);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#14235E",
        py: 6,
        px: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          width: "100%",
          margin: "0 auto",
          maxWidth: { xs: "100%", sm: "90%", md: "1200px" },
        }}
      >
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item._id}>
            <StyledCard>
              <ImageContainer>
                <CardMedia
                  component="img"
                  image={`${IMG_URL}/${item.image}`}
                  alt={item.title}
                  sx={{
                    width: "auto",
                    height: "70%",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />
              </ImageContainer>
              <CardContent
                sx={{
                  pt: 3,
                  pb: 4,
                  textAlign: "center",
                  px: 2,
                  backgroundColor: "white",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#14235E",
                    fontWeight: "bold",
                    mb: 1,
                    fontSize: "1.1rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#14235E",
                    opacity: 0.8,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </Typography>
                <AddButton
                  onClick={() => handleAddToCart(item._id)}
                  variant="contained"
                >
                  +
                </AddButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopCards;
