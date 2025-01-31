import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Athlete from "../assets/home.png";

const HeroContainer = styled(Box)(() => ({
  backgroundColor: "#FD5C35",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  width: "100vw",
  position: "relative",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  overflow: "hidden",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: "left",
  maxWidth: "700px",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    maxWidth: "100%",
    padding: "0 20px",
  },
}));

const HeroImage = styled("img")(({ theme }) => ({
  width: "auto",
  height: "70vh",
  display: "block",
  marginLeft: "auto",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "80%",
    maxWidth: "400px",
    margin: "2rem auto 0",
    position: "relative",
    right: "0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    maxWidth: "300px",
  },
}));

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
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: {
            xs: "20px",
            md: "40px",
          },
        }}
      >
        <Grid
          container
          alignItems="center"
          spacing={0}
          direction={{ xs: "column", md: "row" }}
        >
          {/* Text section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 },
              mt: { xs: 4, md: 0 },
            }}
          >
            <TextContainer>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#232A45",
                  fontFamily: "Decalotype, sans-serif",
                  fontSize: {
                    xs: "1.75rem",
                    sm: "2rem",
                    md: "3rem",
                  },
                  marginLeft: { xs: 0, md: 10 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Votre marque de vêtements de sport <br />
                <span style={{ color: "#232A45" }}>100% adaptable</span>
              </Typography>
              <StyledButton
                sx={{
                  mt: 3,
                  marginLeft: { xs: 0, md: 10 },
                  display: "block",
                  margin: { xs: "20px auto", md: "24px 0 0 80px" },
                }}
              >
                Qui sommes nous ?
              </StyledButton>
            </TextContainer>
          </Grid>

          {/* Image section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
              position: { md: "relative" },
              right: { md: "-23px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <HeroImage src={Athlete} alt="Athlète en fauteuil roulant" />
          </Grid>
        </Grid>
      </Box>
    </HeroContainer>
  );
};

export default Hero;
