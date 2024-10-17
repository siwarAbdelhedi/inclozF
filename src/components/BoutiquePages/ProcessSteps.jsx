import { Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StoreIcon from '@mui/icons-material/Store';

const steps = [
  { icon: <LocalShippingIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'LIVRAISON OFFERTE' },
  { icon: <PaymentIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'PAIEMENT SÉCURISÉ' },
  { icon: <ThreeSixtyIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'PAIEMENT 3x SANS FRAIS' },
  { icon: <SwapHorizIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'RETOURS & ÉCHANGES' },
  { icon: <StoreIcon fontSize="large" style={{ color: '#FD4802' }} />, text: 'POINT RELAY' }
];

const ProcessSteps = () => {
  return (
    <Grid container justifyContent="center" spacing={3} style={{ marginTop: '40px' }}>
      {steps.map((step, index) => (
        <Grid item xs={12} sm={6} md={2} key={index} style={{ textAlign: 'center' }}>
          {step.icon}
          <Typography variant="body1" style={{ marginTop: '10px', color: '#14235E' }}>
            {step.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProcessSteps;
