// import { Grid, Typography } from '@mui/material';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import PaymentIcon from '@mui/icons-material/Payment';
// import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
// import StoreIcon from '@mui/icons-material/Store';

// const steps = [
//   { icon: <LocalShippingIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'LIVRAISON OFFERTE' },
//   { icon: <PaymentIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'PAIEMENT SÉCURISÉ' },
//   { icon: <ThreeSixtyIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'PAIEMENT 3x SANS FRAIS' },
//   { icon: <SwapHorizIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'RETOURS & ÉCHANGES' },
//   { icon: <StoreIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'POINT RELAY' }
// ];

// const ProcessSteps = () => {
//   return (
//     <Grid container justifyContent="center" spacing={3} style={{ marginTop: '40px' }}>
//       {steps.map((step, index) => (
//         <Grid item xs={12} sm={6} md={2} key={index} style={{ textAlign: 'center' }}>
//           {step.icon}
//           <Typography variant="body1" style={{ marginTop: '10px', color: '#14235E' }}>
//             {step.text}
//           </Typography>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ProcessSteps;


import { Box, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StepContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFE5CF',
  padding: theme.spacing(8, 2),
  textAlign: 'center',
}));

const StepCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  padding: theme.spacing(3),
  borderRadius: 8,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  maxWidth: 200,
  margin: 'auto',
}));

const steps = [
  { number: '01', title: 'Choix du vêtement', description: 'Parmi notre collection' },
  { number: '02', title: 'Choix de l\'adaptation', description: 'Parmi nos adaptations' },
  { number: '03', title: 'Une demande plus précise ?', description: 'Faites votre demande de devis' },
  { number: '04', title: 'Livraison', description: 'On vous livre chez vous' },
];

const ProcessSteps = () => {
  return (
    <StepContainer>
      <Typography variant="h4" color="secondary" fontWeight="bold" mb={4}>
        Comment ça marche ?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StepCard>
              <Typography variant="h5" fontWeight="bold" color="primary">{step.number}</Typography>
              <Typography variant="h6" fontWeight="bold">{step.title}</Typography>
              <Typography>{step.description}</Typography>
            </StepCard>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: '#14235E',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        Remplir la fiche de renseignement
      </Button>
    </StepContainer>
  );
};

export default ProcessSteps;
