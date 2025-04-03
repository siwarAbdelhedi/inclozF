// UserDashboard.jsx
import { Box, Typography } from '@mui/material';
import Sidebar from './Sidebar';

const UserDashboard = ({ user }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', fontFamily: 'Decalotype' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#FCDAAF' }}>
        <Typography variant="h4" sx={{ color: '#14235E', mb: 2 }}>
          Bonjour, {user.name}
        </Typography>
        <Typography sx={{ color: '#232A45' }}>
          Vous pourrez consulter votre historique de commandes ici prochainement.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserDashboard;
