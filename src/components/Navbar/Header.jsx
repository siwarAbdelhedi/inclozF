import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const pages = [
  { label: 'Qui sommes nous ?', path: '/about' },
  { label: 'La boutique', path: '/boutique' },
  { label: 'Blog', path: '/blog' },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFF6EB', 
  color: '#14235E', 
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#14235E',
  fontFamily: 'Decalotype, sans-serif',
  '&:hover': {
    backgroundColor: '#FCDAAF',
  },
}));

const ConnectButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FD4802',
  color: '#FFF6EB',
  fontFamily: 'Decalotype, sans-serif',
  '&:hover': {
    backgroundColor: '#14235E',
  },
}));

function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography
          variant="h6"
          noWrap
          component={Link}  
          to="/"          
          sx={{ 
            fontWeight: 'bold', 
            color: '#FD4802', 
            flexGrow: 0,
            fontFamily: 'Decalotype, sans-serif',
            textDecoration: 'none',
          }}
        >
          INCLOZ
        </Typography>
        
        {/* Navigation Buttons */}
        <NavButtons>
          {pages.map((page) => (
            <StyledButton key={page.label} component={Link} to={page.path}>
              {page.label}
            </StyledButton>
          ))}
        </NavButtons>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ConnectButton variant="contained">
            Se connecter
          </ConnectButton>
          <IconButton sx={{ color: '#14235E' }}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;

