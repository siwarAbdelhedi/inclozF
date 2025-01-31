import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Conteneur principal
const StepsContainer = styled(Box)(() => ({
  backgroundColor: "#FFE5CF",
  padding: "50px 0",
  textAlign: "center",
}));

// Style des cartes avec effet de superposition
const StepCard = styled(Paper)(() => ({
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  position: "relative",
  boxShadow: "5px 5px 15px rgba(0,0,0,0.1)",
  backgroundColor: "white",
  "&:nth-of-type(odd)": {
    transform: "translateY(-15px)",
  },
  "&:nth-of-type(even)": {
    transform: "translateY(15px)",
  },
}));

// Style du texte des étapes
const StepNumber = styled(Typography)({
  color: "#FD5C35",
  fontWeight: "bold",
  fontSize: "24px",
  fontFamily: "Decalotype, sans-serif",
});

const StepTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "18px",
  fontFamily: "Decalotype, sans-serif",
  color: "#14235E",
});

const StepDescription = styled(Typography)({
  fontSize: "16px",
  fontFamily: "Decalotype, sans-serif",
  color: "#14235E",
});

// Style du bouton "Remplir la fiche de renseignement"
const StyledButton = styled(Button)(({}) => ({
  backgroundColor: "#14235E",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "none",
  padding: "12px 24px",
  borderRadius: "30px",
  boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "#FD5C35",
  },
}));

// Données des étapes
const steps = [
  {
    number: "01",
    title: "Choix du vêtement",
    description: "Parmi notre collection",
  },
  {
    number: "02",
    title: "Choix de l'adaptation",
    description: "Parmi nos adaptations",
  },
  {
    number: "03",
    title: "Une demande plus précise ?",
    description: "Faites votre demande de devis",
  },
  { number: "04", title: "Livraison", description: "On vous livre chez vous" },
];

const ProcessSteps = () => {
  return (
    <StepsContainer>
      {/* Titre principal */}
      <Typography
        variant="h4"
        sx={{
          color: "#14235E",
          fontWeight: "bold",
          fontFamily: "Decalotype, sans-serif",
          marginBottom: 4,
        }}
      >
        Comment ça marche ?
      </Typography>

      {/* Grille des étapes */}
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StepCard elevation={3}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          </Grid>
        ))}
      </Grid>

      {/* Texte sous les étapes */}
      <Typography
        variant="h5"
        sx={{
          color: "#14235E",
          fontWeight: "semibold",
          fontFamily: "Decalotype, sans-serif",
          marginTop: 5,
        }}
      >
        Vous souhaitez une adaptation sur mesure ?
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#14235E",
          fontFamily: "Decalotype, sans-serif",
          fontStyle: "italic",
        }}
      >
        Incloz vous fait un devis*
      </Typography>

      {/* Bouton bien stylisé */}
      <StyledButton sx={{ mt: 3 }}>
        Remplir la fiche de renseignement
      </StyledButton>

      {/* Texte en bas */}
      <Typography
        variant="h5"
        sx={{
          color: "#14235E",
          fontFamily: "Decalotype, sans-serif",
          fontStyle: "italic",
          mt: 2,
          textAlign: "right",
          marginRight: 20
        }}
      >
        *Réponse sous 48H
      </Typography>
    </StepsContainer>
  );
};

export default ProcessSteps;
