import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FounderImage from "../../assets/founder.jpg"; 

const StoryContainer = styled(Box)(() => ({
  backgroundColor: "#FFF6EB",
  padding: "60px 20px",
  display: "flex",
  justifyContent: "center",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: "#14235E",
  fontSize: "18px",
  lineHeight: "1.6",
  maxWidth: "600px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const HighlightedText = styled("span")(() => ({
  color: "#FD5C35",
  fontWeight: "bold",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#14235E",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "20px",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#0F1C4F",
  },
}));

const FounderStory = () => {
  return (
    <StoryContainer>
      <Grid container spacing={4} alignItems="center" maxWidth="1200px">
        {/* Left Section - Text */}
        <Grid item xs={12} md={6}>
          <StyledText>
            Chez Incloz, nous croyons que chacun mérite de se sentir{" "}
            <HighlightedText>autonome</HighlightedText> et{" "}
            <HighlightedText>confortable</HighlightedText> dans ses vêtements.
            Nous avons créé cette collection en nous inspirant de l’histoire de
            mon cousin, qui, après avoir perdu l’usage de ses jambes tout en
            restant passionné de basket, a montré l’importance d’une{" "}
            <HighlightedText>adaptation vestimentaire</HighlightedText>.
          </StyledText>
          <StyledText>
            Nos vêtements allient style, confort et facilité d’utilisation,
            permettant à chacun de s’habiller en toute autonomie. Incloz, c’est
            plus qu’une marque : c’est un engagement pour{" "}
            <HighlightedText>la dignité et l’indépendance de tous</HighlightedText>.
          </StyledText>
          <Typography fontWeight="bold" sx={{ mt: 2 }}>
            Marina Oliveira, Fondatrice d’Incloz
          </Typography>
        </Grid>

        {/* Right Section - Founder Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={FounderImage}
            alt="Founder of Incloz"
            sx={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "10px",
              boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>

        {/* CTA Button - Full width under text */}
        <Grid item xs={12} textAlign="center">
          <Typography variant="h5" fontWeight="bold" color="#14235E">
            Vous souhaitez une adaptation sur mesure ?
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
            Incloz vous fait un devis*
          </Typography>
          <StyledButton>Remplir la fiche de renseignement</StyledButton>
        </Grid>
      </Grid>
    </StoryContainer>
  );
};

export default FounderStory;
