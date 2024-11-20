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
import tShirt from "../../assets/tshirt.png";
import Jogging from "../../assets/jogging.png";
import Short from "../../assets/short.png";
import Veste from "../../assets/veste.png";

const items = [
  {
    title: "T-SHIRT",
    description: "Lorem ipsum dolor sit amet.",
    imgSrc: [tShirt],
  },
  {
    title: "Jogging",
    description: "Lorem ipsum dolor sit amet.",
    imgSrc: [Jogging],
  },
  {
    title: "Short",
    description: "Lorem ipsum dolor sit amet.",
    imgSrc: [Short],
  },
  {
    title: "Veste",
    description: "Lorem ipsum dolor sit amet.",
    imgSrc: [Veste],
  },
];

const ShopCards = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/panier");
  };

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        style={{ color: "#14235E", margin: "20px 0" }}
      >
        La boutique
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        width={"80%"}
        mx={"auto"}
      >
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card style={{ backgroundColor: "#FFF6EB", borderRadius: "10px" }}>
              <CardMedia
                sx={{
                  objectFit: "contain",
                  width: "auto",
                  height: "150px",
                  marginX: "auto",
                }}
                component="img"
                image={item.imgSrc}
                alt={item.title}
                // style={{ backgroundColor: '#FD4802' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  style={{ color: "#14235E" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{ color: "#14235E" }}
                >
                  {item.description}
                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <Button
                    variant="contained"
                    color="warning"
                    style={{
                      backgroundColor: "#FD4802",
                      color: "#fff",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      minWidth: "0",
                      padding: "0",
                      fontSize: "24px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={handleAddToCart}
                  >
                    +
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShopCards;
