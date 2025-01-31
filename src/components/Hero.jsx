// import { Box, Typography, Button, Grid } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Athlete from "../assets/home.png";

// // Conteneur principal
// const HeroContainer = styled(Box)(() => ({
//   backgroundColor: "#FD5C35",
//   padding: "80px 0",
//   display: "flex",
//   alignItems: "center",
// }));

// // Conteneur du texte bien aligné à gauche
// const TextContainer = styled(Box)(({ theme }) => ({
//   textAlign: "left",
//   maxWidth: "700px",
//   [theme.breakpoints.down("md")]: {
//     textAlign: "left",
//     maxWidth: "50%",
//   },
// }));

// // Image bien alignée à droite
// const HeroImage = styled("img")(({ theme }) => ({
//   width: "100%",
//   maxWidth: "500px",
//   height: "auto",
//   display: "block",
//   marginLeft: "auto",
//   [theme.breakpoints.down("md")]: {
//     margin: "0 auto",
//   },
// }));

// // Bouton
// const StyledButton = styled(Button)(() => ({
//   backgroundColor: "white",
//   color: "#232A45",
//   fontWeight: "bold",
//   fontSize: "18px",
//   textTransform: "none",
//   padding: "12px 24px",
//   borderRadius: "30px",
//   boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
//   "&:hover": {
//     backgroundColor: "#FFE5CF",
//   },
// }));

// const Hero = () => {
//   return (
//     <HeroContainer>
//       <Box sx={{ width: 1, padding: "20px" }}>
//         <Grid container alignItems="center" sx={{ position: "relative" }}>
//           {/* ✅ Texte à gauche */}
//           <Grid item xs={12} md={6}>
//             <TextContainer>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#232A45",
//                   fontFamily: "Decalotype, sans-serif",
//                   marginLeft: 10
//                 }}
//               >
//                 Votre marque de vêtements de sport <br />
//                 <span style={{ color: "#232A45" }}>100% adaptable</span>
//               </Typography>
//               <StyledButton sx={{ mt: 3 }} style={{marginLeft: 90}}>Qui sommes nous ?</StyledButton>
//             </TextContainer>
//           </Grid>

//           {/* ✅ Image à droite */}
//           <Grid item xs={12} md={6} sx={{ position: "absolute", right: -23 }}>
//             <HeroImage src={Athlete} alt="Athlète en fauteuil roulant" />
//           </Grid>
//         </Grid>
//       </Box>
//     </HeroContainer>
//   );
// };

// export default Hero;

import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Athlete from "../assets/home.png";

const HeroContainer = styled(Box)(() => ({
  backgroundColor: "#FD5C35",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  width: "100vw",
  position: "relative",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  overflow: "hidden",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: "left",
  maxWidth: "700px",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    maxWidth: "100%",
    padding: "0 20px",
  },
}));

const HeroImage = styled("img")(({ theme }) => ({
  width: "auto",
  height: "70vh", // Reduced from 90vh to 70vh
  display: "block",
  marginLeft: "auto",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "80%", // Reduced from 100% to 80%
    maxWidth: "400px", // Added max-width for better control
    margin: "2rem auto 0",
    position: "relative",
    right: "0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%", // Even smaller on mobile
    maxWidth: "300px", // Smaller max-width for mobile
  },
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "white",
  color: "#232A45",
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "none",
  padding: "12px 24px",
  borderRadius: "30px",
  boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "#FFE5CF",
  },
}));

const Hero = () => {
  return (
    <HeroContainer>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: {
            xs: "20px",
            md: "40px",
          },
        }}
      >
        <Grid
          container
          alignItems="center"
          spacing={0}
          direction={{ xs: "column", md: "row" }}
        >
          {/* Text section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 }, // Text comes second on mobile
              mt: { xs: 4, md: 0 },
            }}
          >
            <TextContainer>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#232A45",
                  fontFamily: "Decalotype, sans-serif",
                  fontSize: {
                    xs: "1.75rem",
                    sm: "2rem",
                    md: "3rem",
                  },
                  marginLeft: { xs: 0, md: 10 }, // Remove left margin on mobile
                  textAlign: { xs: "center", md: "left" }, // Center text on mobile
                }}
              >
                Votre marque de vêtements de sport <br />
                <span style={{ color: "#232A45" }}>100% adaptable</span>
              </Typography>
              <StyledButton
                sx={{
                  mt: 3,
                  marginLeft: { xs: 0, md: 10 },
                  display: "block",
                  margin: { xs: "20px auto", md: "24px 0 0 80px" },
                }}
              >
                Qui sommes nous ?
              </StyledButton>
            </TextContainer>
          </Grid>

          {/* Image section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
              position: { md: "relative" },
              right: { md: "-23px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <HeroImage src={Athlete} alt="Athlète en fauteuil roulant" />
          </Grid>
        </Grid>
      </Box>
    </HeroContainer>
  );
};

export default Hero;
