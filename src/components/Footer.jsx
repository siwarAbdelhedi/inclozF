import { Box, Container, Grid, Typography, Link, IconButton, } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo2 from "../assets/logo2.png";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFE5CF",
  padding: theme.spacing(6, 2),
  fontFamily: "Decalotype, sans-serif",
  display: "flex",
  alignItems: "flex-end",
  bottom: 0,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 2),
  },
}));

const VerticalDivider = styled(Box)(({ theme }) => ({
  width: "1px",
  backgroundColor: "#14235E",
  height: "180px",
  margin: "0 60px",
  opacity: 0.4,
  alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const FooterTitle = styled(Typography)(() => ({
  fontWeight: "600",
  marginBottom: "16px",
  color: "#14235E",
  fontFamily: "Decalotype, sans-serif",
  fontSize: "1rem",
}));

const FooterLink = styled(Link)(() => ({
  color: "#232A45",
  textDecoration: "none",
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.875rem",
  lineHeight: "2",
  display: "block",
  "&:hover": {
    color: "#FD5C35",
  },
}));

const NewsletterLink = styled(Link)(() => ({
  color: "#FD5C35",
  fontWeight: "bold",
  textDecoration: "none",
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.875rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          flexWrap="wrap"
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100px",
              justifyContent: "center",
            }}
          >
            <img src={Logo2} alt="Incloz Logo" style={{ height: "60px" }} />
          </Box>

          <VerticalDivider />

          {/* Content  */}
          <Grid
            container
            spacing={4}
            flex={1}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            {/* Incloz Section */}
            <Grid item xs={12} sm={4}>
              <Box>
                <FooterTitle>Incloz</FooterTitle>
                <Box display="flex" flexDirection="column">
                  <FooterLink href="#">Notre histoire</FooterLink>
                  <FooterLink href="#">Notre équipe</FooterLink>
                  <FooterLink href="#">Nos partenaires</FooterLink>
                  <FooterLink href="#">La boutique</FooterLink>
                  <FooterLink href="#">Notre blog</FooterLink>
                </Box>
              </Box>
            </Grid>

            {/* Conditions Section */}
            <Grid item xs={12} sm={4}>
              <Box>
                <FooterTitle>Conditions</FooterTitle>
                <Box display="flex" flexDirection="column">
                  <FooterLink href="#">Mentions légales</FooterLink>
                  <FooterLink href="#">
                    Conditions générales d&apos;utilisation
                  </FooterLink>
                  <FooterLink href="#">
                    Conditions générales de vente
                  </FooterLink>
                  <FooterLink href="#">Politique de confidentialité</FooterLink>
                </Box>
              </Box>
            </Grid>

            {/* Aide Section */}
            <Grid item xs={12} sm={4}>
              <Box>
                <FooterTitle>Aide</FooterTitle>
                <Box display="flex" flexDirection="column">
                  <FooterLink href="#">Centre d&apos;aide</FooterLink>
                  <FooterLink href="#">Livraison et Expédition</FooterLink>
                  <FooterLink href="#">Retours et remboursement</FooterLink>

                  <Box mt={3}>
                    <FooterTitle>Nous contacter</FooterTitle>
                    <NewsletterLink href="#">
                      S&apos;abonner à la newsletter
                    </NewsletterLink>
                  </Box>

                  <Box mt={2} display="flex" gap={1.5}>
                    <IconButton
                      aria-label="Instagram"
                      sx={{
                        color: "#14235E",
                        padding: 0,
                        "&:hover": { color: "#FD5C35" },
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Facebook"
                      sx={{
                        color: "#14235E",
                        padding: 0,
                        "&:hover": { color: "#FD5C35" },
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="LinkedIn"
                      sx={{
                        color: "#14235E",
                        padding: 0,
                        "&:hover": { color: "#FD5C35" },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
