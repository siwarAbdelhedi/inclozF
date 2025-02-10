import { TextField, Button, Typography, Box } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        padding:{ xs: "1rem", md: "2rem" },
        backgroundColor: "#FFFF",
      }}
    >
      {/* Left: Form Section */}
      <Box
        component="form"
        sx={{
          width: "80%",
          maxWidth: { xs: "100%", md: "500px" },
          "& .MuiTextField-root": { marginBottom: "1rem" },
          fontFamily: "'Decalotype', sans-serif",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted!");
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#000000",
            fontWeight: "400",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Votre nom
        </Typography>
        <TextField
          label="Nom"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{
            sx: {
              fontFamily: "'Poppins', sans-serif",
              color: "#FD5C35",
            },
          }}
        />

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#000000",
            fontWeight: "400",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Votre Prénom
        </Typography>

        <TextField
          label="Prénom"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{
            sx: {
              fontFamily: "'Poppins', sans-serif",
              color: "#FD5C35",
            },
          }}
        />

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#000000",
            fontWeight: "400",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Votre Sujet
        </Typography>
        <TextField
          label="Sujet"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            sx: {
              fontFamily: "'Poppins', sans-serif",
              color: "#FD5C35",
            },
          }}
        />

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#000000",
            fontWeight: "400",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Votre message
        </Typography>
        <TextField
          label="Votre message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          InputLabelProps={{
            sx: {
              fontFamily: "'Poppins', sans-serif",
              color: "#FD5C35",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          Width
          sx={{
            backgroundColor: "#FD4802",
            color: "FFFFFF",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            "&:hover": {
              backgroundColor: "#FD5C35",
            },
          }}
        >
          Envoyez un message
        </Button>
      </Box>

      {/* Right: Contact Information Section */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "400px" }, 
          textAlign: { xs: "center", md: "left" },
          marginTop: { xs: "2rem", md: "0" },
          fontFamily: "'Decalotype', sans-serif",
          color: "#000000",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#FD4802",
            fontWeight: "Regular",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Contactez-nous
        </Typography>
        <Typography variant="body1" gutterBottom>
          Adaptez vos vêtements à votre vie !
        </Typography>
        <Typography variant="body2" gutterBottom>
          Chez Incloz, on s’adapte à votre mobilité et à vos envies. Pour toute
          demande de devis ou d’informations complémentaires, contactez notre
          équipe !
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <span style={{ marginRight: "8px" }}>📍</span>
          <Typography>40 rue du chemin vert, Paris 75011</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <span style={{ marginRight: "8px" }}>📞</span>
          <Typography>01.81.44.36.76</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <span style={{ marginRight: "8px" }}>📧</span>
          <Typography>incloz.fr@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
