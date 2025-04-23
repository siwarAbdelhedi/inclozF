import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MiniCartConfirmation = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "10px",
          padding: 2,
          minWidth: 300,
        },
      }}
    >
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <CheckCircleIcon color="success" />
        <Typography variant="h6" fontWeight="bold" color="#14235E">
          Produit ajouté au panier
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ my: 1 }}>
          <Typography>
            <strong>Produit :</strong> {product.title}
          </Typography>
          <Typography>
            <strong>Taille :</strong> {product.size}
          </Typography>
          <Typography>
            <strong>Adaptation :</strong> {product.adaptation}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", px: 3 }}>
        <Button variant="text" onClick={onClose} sx={{ color: "#14235E" }}>
          Continuer mes achats
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FD5C35" }}
          href="/panier"
        >
          Voir le panier
        </Button>
      </DialogActions>
    </Dialog>
  );
};

MiniCartConfirmation.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    size: PropTypes.string,
    adaptation: PropTypes.string,
  }),
};

export default MiniCartConfirmation;
