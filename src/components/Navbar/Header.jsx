import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const pages = [
  { label: "La boutique", path: "/boutique" },
  { label: "Blog", path: "/blog" },
  { label: "Qui sommes nous ?", path: "/about" },
  { label: "Contact", path: "/ContactForm" },
];

// ✅ Styles du Navbar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFF6EB",
  color: "#14235E",
  boxShadow: "none",
  //borderBottom: "3px solid #FD4802",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 4),
}));

const NavButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#14235E",
  fontFamily: "Decalotype, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FCDAAF",
  },
}));

const ConnectButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FD4802",
  color: "#FFF6EB",
  fontFamily: "Decalotype, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "none",
  padding: "8px 20px",
  borderRadius: "20px", // Bouton arrondi comme sur la maquette
  "&:hover": {
    backgroundColor: "#14235E",
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* ✅ Logo centré verticalement */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={Logo} alt="Incloz Logo" style={{ height: "45px" }} />
        </Box>

        {/* ✅ Boutons Desktop */}
        <NavButtons>
          {pages.map((page) => (
            <StyledButton key={page.label} component={Link} to={page.path}>
              {page.label}
            </StyledButton>
          ))}
        </NavButtons>

        {/* ✅ Menu Mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ color: "#14235E" }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                <Button
                  component={Link}
                  to={page.path}
                  sx={{
                    color: "#14235E",
                    fontFamily: "Decalotype, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {page.label}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* ✅ Bouton Se connecter + Icône Panier */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ConnectButton
            variant="contained"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Se connecter
          </ConnectButton>
          <IconButton sx={{ color: "#14235E" }}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
