// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme"; // You should export your theme from a separate file

// const AddToCartDialog = ({ open, onClose, onViewCart, product, size, adaptation, price }) => {
//   const getAdaptationLabel = (adaptation) => {
//     switch(adaptation) {
//       case "pression": return "Pression";
//       case "auto-grippant": return "Auto-agrippant";
//       case "aimants": return "Aimants";
//       default: return "";
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Dialog
//         open={open}
//         onClose={onClose}
//         PaperProps={{
//           sx: {
//             borderRadius: "4px",
//             maxWidth: "400px",
//             width: "100%",
//             p: 3,
//           }
//         }}
//       >
//         <DialogTitle sx={{ 
//           color: "secondary.main", 
//           fontWeight: "bold", 
//           p: 0,
//           mb: 2,
//           fontSize: "1.25rem"
//         }}>
//           Ajout au panier
//         </DialogTitle>
        
//         <DialogContent sx={{ p: 0, mb: 3 }}>
//           <Typography variant="body1" fontWeight="bold" color="secondary.main" mb={1}>
//             Nouvel article ajouté au panier
//           </Typography>
          
//           <Typography variant="body1" color="secondary.main">
//             {product.title}
//           </Typography>
          
//           <Typography variant="subtitle1" color="secondary.main" mb={1}>
//             {product.subtitle}
//           </Typography>
          
//           <Typography variant="body1" fontWeight="bold" color="secondary.main" mb={2}>
//             {price.toFixed(2).replace(".", ",")} €
//           </Typography>
          
//           <Typography variant="body2" color="secondary.main">
//             Taille {size} - {getAdaptationLabel(adaptation)}
//           </Typography>
//         </DialogContent>
        
//         <DialogActions sx={{ 
//           p: 0,
//           justifyContent: "space-between",
//           flexDirection: "row-reverse"
//         }}>
//           <Button
//             variant="contained"
//             onClick={onViewCart}
//             sx={{
//               ml: 2,
//             }}
//           >
//             Voir le panier
//           </Button>
//           <Button
//             variant="outlined"
//             onClick={onClose}
//             sx={{
//               color: "secondary.main",
//               borderColor: "secondary.main",
//             }}
//           >
//             Continuer
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </ThemeProvider>
//   );
// };

// export default AddToCartDialog;