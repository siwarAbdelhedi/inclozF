// // import { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Typography,
// //   Button,
// //   ToggleButton,
// //   ToggleButtonGroup,
// //   Grid,
// //   Dialog,
// //   DialogTitle,
// //   DialogActions,
// //   Radio,
// //   Container,
// //   ThemeProvider,
// //   createTheme,
// // } from "@mui/material";
// // import { useParams, useNavigate, Link } from "react-router-dom";
// // import axios from "axios";
// // import MiniCartConfirmation from "./MiniCartConfirmation";

// // // Create a custom theme
// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: "#FD5C35",
// //     },
// //     secondary: {
// //       main: "#14235E",
// //     },
// //     background: {
// //       default: "#FFF6EB",
// //     },
// //   },
// //   typography: {
// //     fontFamily: '"Decalotype", "Roboto", "Arial", sans-serif',
// //     h5: {
// //       fontWeight: 700,
// //       color: "#14235E",
// //     },
// //     subtitle1: {
// //       fontStyle: "italic",
// //     },
// //   },
// //   components: {
// //     MuiToggleButton: {
// //       styleOverrides: {
// //         root: {
// //           border: "1px solid #14235E",
// //           color: "#14235E",
// //           width: "48px",
// //           height: "36px",
// //           "&.Mui-selected": {
// //             backgroundColor: "#14235E",
// //             color: "white",
// //             "&:hover": {
// //               backgroundColor: "#14235E",
// //               opacity: 0.9,
// //             },
// //           },
// //         },
// //       },
// //     },
// //     MuiButton: {
// //       styleOverrides: {
// //         contained: {
// //           backgroundColor: "#FD5C35",
// //           color: "white",
// //           borderRadius: "4px",
// //           padding: "10px 30px",
// //           textTransform: "none",
// //           fontWeight: "bold",
// //           "&:hover": {
// //             backgroundColor: "#e64d2e",
// //           },
// //         },
// //       },
// //     },
// //   },
// // });

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [product, setProduct] = useState(null);
// //   const [size, setSize] = useState("S");
// //   const [adaptation, setAdaptation] = useState("pression");
// //   const [dialogOpen, setDialogOpen] = useState(false);
// //   const [addedProduct, setAddedProduct] = useState(null);
// //   const [confirmationOpen, setConfirmationOpen] = useState(false);

// //   useEffect(() => {
// //     const getProduct = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:5000/api/products/${id}`);
// //         setProduct(res.data);
// //       } catch (error) {
// //         console.error("Erreur lors du chargement du produit", error);
// //       }
// //     };
  
// //     getProduct();
// //   }, [id]);

// // // Ajout panier
// // const handleAddToCart = async () => {
// //     await axios.post("http://localhost:5000/api/cart", {
// //       productId: product._id,
// //       size,
// //       adaptation,
// //     });
  
// //     setAddedProduct({
// //       title: product.title,
// //       size,
// //       adaptation,
// //     });
// //     setDialogOpen(true);
// //   };
  
// //   // Dans le JSX
// //   <MiniCartConfirmation
// //     open={dialogOpen}
// //     onClose={() => setDialogOpen(false)}
// //     product={addedProduct}
// //   />

// //   if (!product) return (
// //     <ThemeProvider theme={theme}>
// //       <Box sx={{ backgroundColor: "#FFF6EB", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
// //         <Typography>Chargement...</Typography>
// //       </Box>
// //     </ThemeProvider>
// //   );

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Box sx={{ backgroundColor: "#FFF6EB", minHeight: "100vh", py: 4 }}>
// //                     {/* Back button to return to the shop */}
// //                     <Button component={Link} to="/boutique" sx={{ color: '#14235E', mb: 2 }}>
// //                 Retourner à la boutique
// //             </Button>
// //         <Container maxWidth="lg">
// //           <Grid container spacing={6}>
// //             {/* Left column with image */}
// //             <Grid item xs={12} md={5} lg={4}>
// //               <Box sx={{
// //                 position: "relative",
// //                 height: "200px",
// //                 width: "100%",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //               }}>
// //                 {/* Orange background rectangle */}
// //                 <Box sx={{
// //                   backgroundColor: "#FD5C35",
// //                   width: "50%",
// //                   height: "100%",
// //                   position: "absolute",
// //                   left: 0,
// //                   top: 0,
// //                   zIndex: 1,
// //                   borderRadius: "0px",
                  
// //                 }} />

// //                 {/* Product image on top */}
// //                 <Box
// //                   component="img"
// //                   src={`http://localhost:5000/uploads/${product.image}`}
// //                   alt={product.title}
// //                   sx={{
// //                       height: "100%",
// //                       width: "auto",
// //                       scale: 0.95,
// //                     flex: 1,
// //                     maxWidth: { xs: "220px", md: "280px" },
// //                     position: "relative",
// //                     zIndex: 2,
// //                     objectFit: "cover",
                    
// //                   }}
// //                 />
// //               </Box>
// //             </Grid>

// //             {/* Right column with product info */}
// //             <Grid item xs={12} md={7} lg={8}>
// //               <Box sx={{ pl: { md: 4 } }}>
// //                 <Typography variant="h5" fontSize="1.75rem" fontWeight="bold" color="secondary.main">
// //                   {product.title || "T-shirt Fitness"}
// //                 </Typography>
// //                 <Typography variant="subtitle1" color="secondary.main" mb={0.5}>
// //                   {product.subtitle || "T-shirt 100% adaptable"}
// //                 </Typography>
// //                 <Typography color="secondary.main" fontSize="1.75rem" fontWeight="bold" mb={3}>
// //                   {product.price || "38,00"} €
// //                 </Typography>
// //                 <Typography color="secondary.main" mb={4} fontSize="0.9rem" lineHeight={1.5} maxWidth="600px">
// //                   {product.description || "T-shirt en coton alliant style, confort et facilité d'utilisation, permettant à chacun de s'habiller en toute autonomie. Pratiquez votre activité physique sans souci."}
// //                 </Typography>

// //                 {/* Size selection */}
// //                 <Box mb={4}>
// //                   <ToggleButtonGroup
// //                     value={size}
// //                     exclusive
// //                     onChange={(e, newSize) => newSize && setSize(newSize)}
// //                     aria-label="taille"
// //                     sx={{ mb: 2 }}
// //                   >
// //                     {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((t) => (
// //                       <ToggleButton 
// //                         key={t} 
// //                         value={t} 
// //                         aria-label={t}
// //                         sx={{ 
// //                           mx: 0.5, 
// //                           border: "1px solid #14235E",
// //                           borderRadius: "2px",
// //                           "&:first-of-type": { ml: 0 }
// //                         }}
// //                       >
// //                         {t}
// //                       </ToggleButton>
// //                     ))}
// //                   </ToggleButtonGroup>
// //                 </Box>

// //                 {/* Adaptation selection */}
// //                 <Box mb={4}>
// //                   <Typography fontWeight="bold" mb={2} color="secondary.main">
// //                     Choix de l`&apos;`adaptation :
// //                   </Typography>
// //                   <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
// //                     {[
// //                       { value: "pression", label: "PRESSION", icon: "⚪⚪" },
// //                       { value: "auto-grippant", label: "AUTO-AGRIPPANT", icon: "≈≈" },
// //                       { value: "aimants", label: "AIMANTS", icon: "🧲" }
// //                     ].map((option) => (
// //                       <Box
// //                         key={option.value}
// //                         onClick={() => setAdaptation(option.value)}
// //                         sx={{
// //                           border: "1px solid #14235E",
// //                           borderRadius: "2px",
// //                           width: "110px",
// //                           height: "110px",
// //                           display: "flex",
// //                           flexDirection: "column",
// //                           justifyContent: "center",
// //                           alignItems: "center",
// //                           cursor: "pointer",
// //                           backgroundColor: "transparent",
// //                           '&:hover': {
// //                             backgroundColor: "rgba(20, 35, 94, 0.03)"
// //                           },
// //                           p: 2
// //                         }}
// //                       >
// //                         <Box sx={{ 
// //                           fontSize: "28px", 
// //                           mb: 2,
// //                           display: "flex",
// //                           justifyContent: "center",
// //                           height: "40px"
// //                         }}>
// //                           {/* Using adaptation icons from design */}
// //                           {option.value === "pression" && (
// //                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// //                               <circle cx="20" cy="12" r="6" stroke="#14235E" strokeWidth="1.5"/>
// //                               <circle cx="20" cy="28" r="6" stroke="#14235E" strokeWidth="1.5"/>
// //                             </svg>
// //                           )}
// //                           {option.value === "auto-grippant" && (
// //                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// //                               <path d="M10 15L30 15M10 25L30 25" stroke="#14235E" strokeWidth="1.5"/>
// //                             </svg>
// //                           )}
// //                           {option.value === "aimants" && (
// //                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
// //                               <path d="M20 10C25 10 30 15 30 20C30 25 25 30 15 30C10 30 10 25 10 20C10 15 15 10 20 10Z" stroke="#14235E" strokeWidth="1.5"/>
// //                               <path d="M30 18C32 20 32 22 30 24" stroke="#14235E" strokeWidth="1.5"/>
// //                             </svg>
// //                           )}
// //                         </Box>
// //                         <Typography fontSize="0.7rem" color="secondary.main" textAlign="center">
// //                           {option.label}
// //                         </Typography>
// //                         <Radio
// //                           checked={adaptation === option.value}
// //                           value={option.value}
// //                           name="adaptation-radio"
// //                           sx={{ 
// //                             p: 0.5,
// //                             mt: 1,
// //                             '& .MuiSvgIcon-root': {
// //                               fontSize: 16,
// //                             }
// //                           }}
// //                         />
// //                       </Box>
// //                     ))}
// //                   </Box>
// //                   <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "right", mt: 1, fontSize: "0.7rem" }}>
// //                     En savoir plus sur les adaptations
// //                   </Typography>
// //                 </Box>

// //                 {/* Add to cart button */}
// //                 <Button
// //                   variant="contained"
// //                   sx={{
// //                     mt: 2,
// //                     width: { xs: "100%", sm: "220px" },
// //                     backgroundColor: "#FD5C35",
// //                   }}
// //                   onClick={handleAddToCart}
// //                 >
// //                   Ajouter au panier
// //                 </Button>
// //               </Box>
// //             </Grid>
// //           </Grid>

// //           {/* Confirmation Dialog */}
// //           <Dialog
// //             open={dialogOpen}
// //             onClose={() => setDialogOpen(false)}
// //             PaperProps={{
// //               sx: {
// //                 borderRadius: "4px",
// //                 p: 1
// //               }
// //             }}
// //           >
// //             <DialogTitle sx={{ color: "secondary.main" }}>Produit ajouté au panier !</DialogTitle>
// //             <DialogActions>
// //               <Button 
// //                 onClick={() => setDialogOpen(false)}
// //                 sx={{ color: "secondary.main" }}
// //               >
// //                 Continuer
// //               </Button>
// //               <Button
// //                 variant="contained"
// //                 onClick={() => navigate("/panier")}
// //               >
// //                 Voir le panier
// //               </Button>
// //             </DialogActions>
// //           </Dialog>
// //         </Container>
// //       </Box>

// //       <MiniCartConfirmation
// //   open={confirmationOpen}
// //   onClose={() => setConfirmationOpen(false)}
// //   product={{ title: product.title, size, adaptation }}
// // />
// //     </ThemeProvider>
// //   );
// // };

// // export default ProductDetail;

// // ✅ ProductDetail.jsx (localStorage-based cart system)
// import { useState, useEffect } from "react";
// import {
//   Box, Typography, Button, ToggleButton, ToggleButtonGroup, Grid, Dialog, DialogTitle, DialogActions, Radio
// } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [size, setSize] = useState("S");
//   const [adaptation, setAdaptation] = useState("pression");
//   const [dialogOpen, setDialogOpen] = useState(false);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(res.data);
//       } catch (error) {
//         console.error("Error loading product", error);
//       }
//     };
//     getProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//     const item = {
//       productId: product._id,
//       title: product.title,
//       image: product.image,
//       price: product.price,
//       size,
//       adaptation,
//       quantity: 1,
//     };

//     const updatedCart = [...existingCart, item];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setDialogOpen(true);
//   };

//   if (!product) return <div>Chargement...</div>;

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.title} width="100%" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5">{product.title}</Typography>
//           <Typography>{product.subtitle}</Typography>
//           <Typography fontWeight="bold">{product.price} €</Typography>

//           <ToggleButtonGroup value={size} exclusive onChange={(e, val) => setSize(val)}>
//             {["XS", "S", "M", "L", "XL"].map((s) => <ToggleButton key={s} value={s}>{s}</ToggleButton>)}
//           </ToggleButtonGroup>

//           <Box mt={3}>
//             <Typography fontWeight="bold">Choix de l&apos;adaptation :</Typography>
//             {["pression", "auto-grippant", "aimants"].map((type) => (
//               <Box key={type} onClick={() => setAdaptation(type)}>
//                 <Radio checked={adaptation === type} /> {type}
//               </Box>
//             ))}
//           </Box>

//           <Button onClick={handleAddToCart} variant="contained" sx={{ mt: 3 }}>Ajouter au panier</Button>
//         </Grid>
//       </Grid>

//       <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
//         <DialogTitle>Produit ajouté au panier !</DialogTitle>
//         <DialogActions>
//           <Button onClick={() => setDialogOpen(false)}>Continuer vos achats</Button>
//           <Button onClick={() => navigate("/panier")} variant="contained">Voir le panier</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default ProductDetail;

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

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
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
      image: `http://localhost:5000/uploads/${product.image}`,
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
                  src={`http://localhost:5000/uploads/${product.image}`}
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
                <Typography fontWeight="bold" mb={2}>Choix de l'adaptation :</Typography>
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
