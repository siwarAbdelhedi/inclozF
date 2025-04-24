import { Box, Typography, TextField, Button, Grid, MenuItem } from "@mui/material";
import { useState } from "react";
import bgPattern from "../../assets/photo2.png";
import axios from "axios";

const CustomRequest = () => {
  const [formData, setFormData] = useState({
    nom: "", prenom: "", email: "", telephone: "",
    rue: "", ville: "", codePostal: "", typeVetement: "",
    taille: "", hanches: "", cuisse: "", entrejambe: "",
    photos: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      await axios.post("http://localhost:5000/api/custom-request", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Demande envoyée !");
    } catch (err) {
      console.error("Erreur", err);
    }
  };

  return (
    <Box sx={{
      backgroundColor: "#FFF6EB",
      backgroundImage: `url(${bgPattern})`,
      backgroundRepeat: "repeat",
      px: 4, py: 10,
    }}>
      <Typography variant="h4" fontWeight="bold" color="#14235E" mb={4}>
        Fiche de renseignement
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {[
            { label: "Nom", name: "nom" },
            { label: "Prénom", name: "prenom" },
            { label: "Mail", name: "email", type: "email" },
            { label: "Téléphone", name: "telephone" },
            { label: "Rue", name: "rue" },
            { label: "Ville", name: "ville" },
            { label: "Code Postal", name: "codePostal" },
          ].map((field, idx) => (
            <Grid item xs={12} sm={field.name === "ville" || field.name === "codePostal" ? 6 : 12} key={idx}>
              <TextField
                fullWidth variant="outlined" label={field.label}
                name={field.name} value={formData[field.name]}
                type={field.type || "text"} onChange={handleChange}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              select fullWidth label="Type de vêtements"
              name="typeVetement" value={formData.typeVetement}
              onChange={handleChange}
            >
              <MenuItem value="tshirt">T-shirt fitness</MenuItem>
              <MenuItem value="short">Short fitness</MenuItem>
              <MenuItem value="jogging">Jogging fitness</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" color="#14235E">Mesures</Typography>
          </Grid>

          {[
            { label: "Tour de taille (en cm)", name: "taille" },
            { label: "Largeur des hanches (en cm)", name: "hanches" },
            { label: "Cuisse (en cm)", name: "cuisse" },
            { label: "Entrejambe (en cm)", name: "entrejambe" },
          ].map((field, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <TextField
                fullWidth type="number" variant="outlined"
                label={field.label} name={field.name}
                value={formData[field.name]} onChange={handleChange}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography color="#14235E" fontWeight="bold" mt={2}>
              Partagez des photos complémentaires*
            </Typography>
            <Button
              variant="contained" component="label"
              sx={{ mt: 1, backgroundColor: "#14235E" }}
            >
              Télécharger des images...
              <input type="file" hidden name="photos" onChange={handleChange} />
            </Button>
            <Typography variant="caption" ml={2}>Formats : png, jpeg, pdf</Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#FD4802", borderRadius: 2, mt: 4, px: 5 }}
            >
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CustomRequest;
