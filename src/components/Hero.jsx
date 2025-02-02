import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Athlete from "../assets/home.png";

const HeroContainer = styled(Box)(() => ({
  backgroundColor: "#FD5C35",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  overflow: "hidden",
}));

// Limite la largeur pour bien gérer les écrans larges
const HeroContent = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1600px",
  padding: "0 80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  "@media (max-width: 960px)": {
    flexDirection: "column",
    padding: "40px 20px",
    textAlign: "center",
  },
}));

// Texte bien aligné à gauche
const TextContainer = styled(Box)(() => ({
  maxWidth: "600px",
  "@media (max-width: 960px)": {
    textAlign: "center",
  },
}));

// Image alignée à droite
const HeroImage = styled("img")(() => ({
  width: "auto",
  maxWidth: "500px",
  height: "80vh",
  objectFit: "contain",
  "@media (max-width: 960px)": {
    height: "auto",
    maxWidth: "80%",
    marginTop: "20px",
  },
}));

// Bouton stylisé
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
      <HeroContent>
        {/* ✅ Texte à gauche */}
        <TextContainer>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#14235E",
              fontFamily: "Decalotype, sans-serif",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Votre marque de vêtements de sport <br />
            <span style={{ color: "#14235E" }}>100% adaptable</span>
          </Typography>
          <StyledButton sx={{ mt: 3 }}>Qui sommes nous ?</StyledButton>
        </TextContainer>

        {/* ✅ Image bien alignée à droite */}
        <HeroImage src={Athlete} alt="Athlète en fauteuil roulant" />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
