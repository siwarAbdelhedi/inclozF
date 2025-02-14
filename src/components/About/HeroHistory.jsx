import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroContainer = styled(Box)(() => ({
  backgroundColor: "#FD5C35", 
  padding: "80px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Decalotype, sans-serif",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#FFE5CF", 
  color: "#14235E", 
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  fontFamily: "Decalotype, sans-serif",
  borderRadius: "20px",
  marginTop: "20px",
  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "#FFD4A3",
  },
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <Typography variant="h4" fontWeight="bold" color="#232A45" sx={{ fontFamily: "Decalotype, sans-serif" }}>
        Incloz, le style qui vous suit.
      </Typography>
      <Typography variant="body1" color="#232A45" sx={{ mt: 1, fontStyle: "italic", fontFamily: "Decalotype, sans-serif" }}>
        Nous mettons au cœur de nos design les <br></br> besoins et les désirs de chacun
      </Typography>
      <StyledButton>Je découvre Incloz</StyledButton>
    </HeroContainer>
  );
};

export default HeroSection;
