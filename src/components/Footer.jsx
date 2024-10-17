import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF6EB', 
  padding: theme.spacing(6, 0),
  fontFamily: 'Decalotype, sans-serif', 
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  color: '#14235E', 
  fontFamily: 'Decalotype, sans-serif',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#14235E', 
  textDecoration: 'none',
  fontFamily: 'Decalotype, sans-serif',
  '&:hover': {
    color: '#FD4802', 
    textDecoration: 'underline',
  },
}));

const NewsletterButton = styled('button')(({ theme }) => ({
  backgroundColor: '#FD4802', 
  color: '#FFF6EB', 
  border: 'none',
  padding: theme.spacing(1, 2),
  cursor: 'pointer',
  fontFamily: 'Decalotype, sans-serif',
  '&:hover': {
    backgroundColor: '#14235E', 
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Colonne 1: Logo */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#FD4802', fontFamily: 'Decalotype, sans-serif' }}>
              INCLOZ
            </Typography>
          </Grid>
          
          {/* Colonne 2: Inci9z */}
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Incloz</FooterTitle>
            <Box display="flex" flexDirection="column">
              <FooterLink href="#">Notre histoire</FooterLink>
              <FooterLink href="#">Notre équipe</FooterLink>
              <FooterLink href="#">Nos partenaires</FooterLink>
              <FooterLink href="#">La boutique</FooterLink>
              <FooterLink href="#">Notre blog</FooterLink>
            </Box>
          </Grid>
          
          {/* Colonne 3: Conditions */}
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Conditions</FooterTitle>
            <Box display="flex" flexDirection="column">
              <FooterLink href="#">Mentions légales</FooterLink>
              <FooterLink href="#">Conditions générales d&apos;utilisation</FooterLink>
              <FooterLink href="#">Conditions générales de vente</FooterLink>
              <FooterLink href="#">Politique de confidentialité</FooterLink>
            </Box>
          </Grid>
          
          {/* Colonne 4: Aide et réseaux sociaux */}
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Aide</FooterTitle>
            <Box display="flex" flexDirection="column">
              <FooterLink href="#">Centre d&apos;aide</FooterLink>
              <FooterLink href="#">Livraison et Expédition</FooterLink>
              <FooterLink href="#">Retours et remboursement</FooterLink>
            </Box>
            
            <Box mt={2}>
              <Typography variant="subtitle1" fontWeight="bold" color="#14235E" fontFamily="Decalotype, sans-serif">
                Nous contacter
              </Typography>
              <NewsletterButton>S&apos;abonner à la newsletter</NewsletterButton>
            </Box>
            
            <Box mt={2} display="flex">
              <IconButton aria-label="Instagram" sx={{ color: '#14235E' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Facebook" sx={{ color: '#14235E' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ color: '#14235E' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
