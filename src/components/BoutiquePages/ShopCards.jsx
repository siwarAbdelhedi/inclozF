// import { Card, CardContent, CardMedia, Button, Typography, Grid, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/material/styles";
// import tShirt from "../../assets/tshirt.png";
// import Jogging from "../../assets/jogging.png";
// import Short from "../../assets/short.png";
// import Veste from "../../assets/veste.png";

// const StyledCard = styled(Card)({
//   backgroundColor: "white",
//   borderRadius: "10px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   overflow: "visible",
//   position: "relative",
// });

// // Updated ImageContainer proprieties
// const ImageContainer = styled(Box)({
//   backgroundColor: "#FD5C35",
//   borderTopLeftRadius: "10px",
//   borderTopRightRadius: "10px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "180px",
//   width: "100%",
//   marginBottom: "0",
// });

// const AddButton = styled(Button)({
//   backgroundColor: "#FD4802",
//   color: "#fff",
//   width: "40px",
//   height: "40px",
//   borderRadius: "50%",
//   minWidth: "0",
//   padding: "0",
//   fontSize: "24px",
//   position: "absolute",
//   bottom: "-20px",
//   left: "50%",
//   transform: "translateX(-50%)",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   "&:hover": {
//     backgroundColor: "#e54402",
//   },
// });

// const items = [
//   {
//     title: "T-SHIRT",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
//     imgSrc: tShirt,
//   },
//   {
//     title: "Jogging",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
//     imgSrc: Jogging,
//   },
//   {
//     title: "Short",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
//     imgSrc: Short,
//   },
//   {
//     title: "Veste",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
//     imgSrc: Veste,
//   },
// ];

// const ShopCards = () => {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     navigate("/panier");
//   };

//   return (
//     <Box sx={{ backgroundColor: "#14235E", py: 6, px: 2 }}>
//       <Typography
//         variant="h3"
//         align="center"
//         sx={{
//           color: "#FFE5CF",
//           marginBottom: 6,
//           fontSize: { xs: "2rem", md: "2.5rem" },
//           fontWeight: "bold",
//         }}
//       >
//         Notre boutique
//       </Typography>

//       <Grid container spacing={4} maxWidth="1200px" margin="0 auto">
//         {items.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <StyledCard>
//               <ImageContainer>
//                 <CardMedia
//                   component="img"
//                   image={item.imgSrc}
//                   alt={item.title}
//                   sx={{
//                     width: "auto",
//                     height: "70%",
//                     objectFit: "contain",
//                     padding: "20px",
//                   }}
//                 />
//               </ImageContainer>
//               <CardContent
//                 sx={{
//                   pt: 3,
//                   pb: 4,
//                   textAlign: "center",
//                   px: 2,
//                   backgroundColor: "white",
//                   borderBottomLeftRadius: "10px",
//                   borderBottomRightRadius: "10px",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: "#14235E",
//                     fontWeight: "bold",
//                     mb: 1,
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "#14235E",
//                     opacity: 0.8,
//                     fontSize: "0.875rem",
//                     lineHeight: 1.5,
//                   }}
//                 >
//                   {item.description}
//                 </Typography>
//                 <AddButton
//                   onClick={handleAddToCart}
//                   variant="contained"
//                 >
//                   +
//                 </AddButton>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>

//       <Box sx={{ textAlign: "center", mt: 6 }}>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#FFE5CF",
//             color: "#14235E",
//             borderRadius: "25px",
//             padding: "10px 30px",
//             textTransform: "none",
//             fontSize: "1rem",
//             fontWeight: "bold",
//             "&:hover": {
//               backgroundColor: "#ffd6b3",
//             },
//           }}
//         >
//           Je découvre la boutique
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ShopCards;

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
import tShirt from "../../assets/tshirt.png";
import Jogging from "../../assets/jogging.png";
import Short from "../../assets/short.png";
import Veste from "../../assets/veste.png";

// Card Styles
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "visible",
  position: "relative",
  width: "100%",
  maxWidth: "250px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "200px",
  },
}));

// Image Section
const ImageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FD5C35",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "160px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "140px",
  },
}));

// Add Button
const AddButton = styled(Button)(() => ({
  backgroundColor: "#FD4802",
  color: "#fff",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  minWidth: "0",
  fontSize: "20px",
  position: "absolute",
  bottom: "-18px",
  left: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "#e54402",
  },
}));

const items = [
  {
    title: "T-SHIRT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    imgSrc: tShirt,
  },
  {
    title: "Jogging",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    imgSrc: Jogging,
  },
  {
    title: "Short",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    imgSrc: Short,
  },
  {
    title: "Veste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    imgSrc: Veste,
  },
];

const ShopCards = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/panier");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#14235E",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: "#FFE5CF",
          marginBottom: { xs: 4, md: 6 },
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: "bold",
        }}
      >
        Notre boutique
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <StyledCard>
              {/* Image Section */}
              <ImageContainer>
                <CardMedia
                  component="img"
                  image={item.imgSrc}
                  alt={item.title}
                  sx={{
                    width: "auto",
                    height: "65%",
                    objectFit: "contain",
                    padding: "15px",
                  }}
                />
              </ImageContainer>

              {/* Text Content */}
              <CardContent
                sx={{
                  pt: 3,
                  pb: 4,
                  textAlign: "center",
                  px: { xs: 1.5, md: 2 },
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
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#14235E",
                    opacity: 0.8,
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </Typography>

                {/* Add to Cart Button */}
                <AddButton onClick={handleAddToCart} variant="contained">
                  +
                </AddButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      <Box sx={{ textAlign: "center", mt: { xs: 5, md: 6 } }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFE5CF",
            color: "#14235E",
            borderRadius: "25px",
            padding: "10px 30px",
            textTransform: "none",
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ffd6b3",
            },
          }}
        >
          Je découvre la boutique
        </Button>
      </Box>
    </Box>
  );
};

export default ShopCards;
