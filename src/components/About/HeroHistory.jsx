import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroContainer = styled(Box)(() => ({
  backgroundColor: "#FD5C35",
  padding: "80px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#FFE5CF",
  color: "#14235E",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "20px",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#FFD4A3",
  },
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <Typography variant="h4" fontWeight="bold" color="white">
        Incloz, le style qui vous suit.
      </Typography>
      <Typography variant="body1" color="white" sx={{ mt: 1, fontStyle: "italic" }}>
        Nous mettons au cœur de nos design les besoins et les désirs de chacun
      </Typography>
      <StyledButton>Je découvre Incloz</StyledButton>
    </HeroContainer>
  );
};

export default HeroSection;
