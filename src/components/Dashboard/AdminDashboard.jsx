import { Box, Typography, Paper } from '@mui/material';

const AdminDashboard = ({ user }) => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#FCDAAF', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Decalotype', color: '#14235E', mb: 3 }}>
        Bienvenue, {user.name}
      </Typography>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Decalotype', color: '#232A45', mb: 2 }}>
          Commandes récentes
        </Typography>
        <Typography sx={{ fontFamily: 'Decalotype', color: '#14235E' }}>
          Vous pourrez afficher ici un tableau des commandes avec statut, montant, client, etc.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;