import React, { useState } from "react";
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
import Logo from "../../assets/Logo.png";

const pages = [
  { label: "La boutique", path: "/boutique" },
  { label: "Blog", path: "/blog" },
  { label: "Qui sommes nous ?", path: "/about" },
  { label: "Contact", path: "/ContactForm" },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFF6EB",
  color: "#14235E",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const NavButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "none", // Cache les boutons sur les écrans petits
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#14235E",
  fontFamily: "Decalotype, sans-serif",
  "&:hover": {
    backgroundColor: "#FCDAAF",
  },
}));

const ConnectButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FD4802",
  color: "#FFF6EB",
  fontFamily: "Decalotype, sans-serif",
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
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={Logo} alt="Incloz Logo" style={{ height: "40px" }} />
        </Box>

        {/* Desktop Navigation Buttons */}
        <NavButtons>
          {pages.map((page) => (
            <StyledButton key={page.label} component={Link} to={page.path}>
              {page.label}
            </StyledButton>
          ))}
        </NavButtons>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ color: "#14235E" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu Items */}
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
                  }}
                >
                  {page.label}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Actions (Login Button + Cart Icon) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ConnectButton
            variant="contained"
            sx={{ display: { xs: "none", md: "block" } }} // Cache sur mobile
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
