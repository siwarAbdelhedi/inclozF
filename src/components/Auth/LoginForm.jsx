import { useState } from "react";
import { Box, TextField, Button, Typography, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));0
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    //   const res = await fetch("http://localhost:5000/api/users/login", {
      const res = await fetch("https://api.incloz.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
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
    <StyledForm component="form" onSubmit={handleLogin}>
      <Typography variant="h5" color="#14235E" fontWeight="bold" gutterBottom>
        Connexion
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

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

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Link
          to="/forgot-password"
          style={{ color: "#FD5C35", fontSize: "0.85rem" }}
        >
          Mot de passe oublié ?
        </Link>
      </Box>

      <StyledButton fullWidth type="submit">
        Se connecter
      </StyledButton>

      <Box mt={2} textAlign="center">
        <Typography variant="body2" color="#232A45">
          Vous n&apos;avez pas de compte ?{" "}
          <Link
            to="/register"
            style={{ color: "#FD5C35", fontWeight: "bold" }}
          >
            Inscrivez-vous
          </Link>
        </Typography>
      </Box>
    </StyledForm>
  );
};

export default LoginForm;
