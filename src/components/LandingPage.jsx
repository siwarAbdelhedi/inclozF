import { Container, Typography, Box, TextField, Button, Grid, Checkbox, FormControlLabel, Paper, useMediaQuery, useTheme,} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import athleteImage from '../assets/basket.png';

// Custom styled components
const OrangeSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#FD4802',
  color: '#fff',
  padding: theme.spacing(6, 2),
  textAlign: 'center',
}));

const CreamSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF5EB',
  padding: theme.spacing(6, 2),
}));

const StepCard = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '15px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: active ? '#14235E' : '#FD4802',
  color: '#fff',
  position: 'relative',
  minHeight: '150px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'inherit',
    zIndex: -1,
  }
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
      borderRadius: '5px',
    },
    '&:hover fieldset': {
      borderColor: '#FD4802',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FD4802',
    },
  },
  marginBottom: '15px',
  backgroundColor: 'white',
});

const RoundButton = styled(Button)({
  backgroundColor: '#FD4802',
  color: 'white',
  borderRadius: '25px',
  padding: '8px 20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#e03e00',
  },
});

const FooterLink = styled(Typography)({
  color: '#14235E',
  fontSize: '0.9rem',
  marginBottom: '5px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const StepNumber = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  fontWeight: 'bold',
  fontSize: '1.5rem',
});

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#FFF5EB',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#FD4802',
            fontFamily: 'sans-serif',
          }}
        >
          INCLOZ
        </Typography>
      </Box>

      {/* Hero Section */}
      <OrangeSection>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#14235E',
              fontSize: { xs: '1.8rem', md: '2.2rem' },
            }}
          >
            Votre marque de vêtements de sport 100% adaptable
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
          >
            Parce que chaque personne est unique, Incloz vous propose un service unique
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#14235E',
              borderRadius: '20px',
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Comment ça marche ?
          </Button>
        </Container>
      </OrangeSection>

      {/* About Section */}
      <CreamSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  color: '#14235E',
                }}
              >
                Qui sommes nous ?
              </Typography>
              <Typography
                paragraph
                sx={{ color: '#14235E', mb: 2 }}
              >
                Chez Incloz, nous croyons que chacun mérite de se sentir{' '}
                <Typography component="span" sx={{ color: '#FD4802', fontWeight: 'bold' }}>
                  valorisé.e et confortable
                </Typography>{' '}
                dans ses vêtements. Nous avons créé cette collection en nous inspirant de notre expérience personnelle et de l&apos;observation des besoins de ces personnes tous qui se sentent passionné par le basket, a montré l&apos;importance d&apos;une{' '}
                <Typography component="span" sx={{ color: '#FD4802', fontWeight: 'bold' }}>
                  adaptation vestimentaire
                </Typography>.
              </Typography>
              <Typography paragraph sx={{ color: '#14235E', mb: 2 }}>
                Nos vêtements allient style, confort et facilité d&apos;utilisation, permettant à chacun de s&apos;habiller en toute autonomie. Incloz, c&apos;est plus qu&apos;une marque ; c&apos;est un engagement pour la{' '}
                <Typography component="span" sx={{ color: '#FD4802', fontWeight: 'bold' }}>
                  dignité et l&apos;indépendance de tous
                </Typography>.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: '#14235E',
                  mb: 4,
                }}
              >
                Marina Oliveira, Fondatrice d&apos;Incloz
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={athleteImage}
                alt="Athlete in wheelchair"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </CreamSection>

      {/* How it Works Section */}
      <CreamSection sx={{ pt: 0 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 6,
              fontWeight: 'bold',
              color: '#14235E',
              textAlign: 'center',
            }}
          >
            Comment ça marche ?
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <StepCard>
                <StepNumber>01</StepNumber>
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                  Choix du vêtement
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  Parmi notre collection
                </Typography>
              </StepCard>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <StepCard>
                <StepNumber>02</StepNumber>
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                  Choix de l&apos;adaptation
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  Parmi nos suggestions
                </Typography>
              </StepCard>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <StepCard active={true}>
                <StepNumber>03</StepNumber>
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                  Une demande plus précise ?
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  Envoie de la demande de devis
                </Typography>
              </StepCard>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <StepCard>
                <StepNumber>04</StepNumber>
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
                  Livraison
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  Où vous l&apos;avez commandé
                </Typography>
              </StepCard>
            </Grid>
          </Grid>
        </Container>
      </CreamSection>

      {/* Newsletter Section */}
      <CreamSection sx={{ pt: 0 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mb: 1,
                fontWeight: 'bold',
                color: '#14235E',
              }}
            >
              Incloz arrive très prochainement...
            </Typography>
            <Typography variant="body1" sx={{ color: '#14235E', fontStyle: 'italic' }}>
              Inscrivez-vous dès maintenant à notre newsletter
            </Typography>
            <Typography variant="body1" sx={{ color: '#14235E', fontStyle: 'italic' }}>
              on vous informera du lancement d&apos;Incloz
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box component="form">
                <Typography sx={{ mb: 1, color: '#14235E' }}>Votre nom</Typography>
                <StyledTextField fullWidth placeholder="Nom" size="small" />

                <Typography sx={{ mb: 1, color: '#14235E' }}>Votre prénom</Typography>
                <StyledTextField fullWidth placeholder="Prénom" size="small" />

                <Typography sx={{ mb: 1, color: '#14235E' }}>Votre adresse mail</Typography>
                <StyledTextField fullWidth placeholder="Mail" size="small" />

                <Typography sx={{ mb: 1, color: '#14235E' }}>Vous souhaitez nous dire quelque chose ?</Typography>
                <StyledTextField
                  fullWidth
                  placeholder="Votre message"
                  multiline
                  rows={4}
                  size="small"
                />

                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <Typography variant="body2" sx={{ color: '#14235E' }}>
                      J&apos;accepte les conditions générales d&apos;utilisation et la politique de confidentialité
                    </Typography>
                  }
                  sx={{ mb: 2 }}
                />

                <RoundButton variant="contained" sx={{ mt: 2 }}>
                  Envoyer
                </RoundButton>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 }, mt: { xs: 4, md: 0 } }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: '#14235E',
                  }}
                >
                  Restez informé
                </Typography>

                <Typography paragraph sx={{ color: '#14235E', mb: 3 }}>
                  Adaptez vos vêtements à votre vie !
                </Typography>

                <Typography paragraph sx={{ color: '#14235E', mb: 4 }}>
                  Chez Incloz, on s&apos;adapte à votre mobilité et à vos envies. Pour toute demande de devis ou d&apos;informations complémentaires, contactez-nous!
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: '#FD4802', mr: 1 }} />
                  <Typography sx={{ color: '#14235E' }}>
                    40 rue du chemin vert,
                    <br />
                    Paris 75011
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ color: '#FD4802', mr: 1 }} />
                  <Typography sx={{ color: '#14235E' }}>01.84.43.16.76</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ color: '#FD4802', mr: 1 }} />
                  <Typography sx={{ color: '#14235E' }}>incloz.conf@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CreamSection>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#FFF5EB', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/logo.png" 
                alt="Incloz Logo"
                sx={{ height: '60px', mr: 1 }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#FD4802',
                }}
              >
                IN
                <br />
                CLOZ
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: '#14235E',
                }}
              >
                Conditions
              </Typography>
              <FooterLink>Mentions légales</FooterLink>
              <FooterLink>Conditions générales d&apos;utilisation</FooterLink>
              <FooterLink>Conditions générales de vente</FooterLink>
              <FooterLink>Politique de confidentialité</FooterLink>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ color: '#14235E', mr: 1, fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: '#14235E' }}>
                    40 rue du chemin vert,
                    <br />
                    Paris 75011
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ color: '#14235E', mr: 1, fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: '#14235E' }}>
                    01.84.43.16.76
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ color: '#14235E', mr: 1, fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ color: '#14235E' }}>
                    incloz.conf@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <InstagramIcon sx={{ color: '#14235E', fontSize: '2rem' }} />
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 4, color: '#14235E', fontSize: '0.8rem' }}
          >
            © Incloz 2025, tous droits réservés
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;