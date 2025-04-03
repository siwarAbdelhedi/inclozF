import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledForm = styled(Box)(({ theme }) => ({
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "#FFF6EB",
  padding: theme.spacing(4),
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  fontFamily: "Decalotype, sans-serif",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#FD4802",
  color: "#FFF6EB",
  borderRadius: "25px",
  textTransform: "none",
  fontWeight: "bold",
  marginTop: "16px",
  "&:hover": {
    backgroundColor: "#14235E",
  },
}));

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      localStorage.setItem("userInfo", JSON.stringify(data));

      // Redirection selon rôle
      if (data.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <StyledForm component="form" onSubmit={handleRegister}>
      <Typography variant="h5" color="#14235E" fontWeight="bold" gutterBottom>
        Créer un compte
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <TextField
        fullWidth
        label="Nom complet"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Adresse mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Mot de passe"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.isAdmin}
            onChange={handleChange}
            name="isAdmin"
            color="primary"
          />
        }
        label="Je suis un administrateur"
      />

      <StyledButton fullWidth type="submit">
        S’inscrire
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
