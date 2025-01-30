import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Navbar/Header";
import HomeScreen from "./components/HomeScreen/Home";
import Footer from "./components/Footer";
import BoutiquePage from "./pages/BoutiquePage";
import Panier from "./components/BoutiquePages/Panier";
import ContactForm from "./components/Cantact/ContactForm";

const theme = createTheme({
  palette: {
    primary: { main: "#FD4802" },
    secondary: { main: "#14235E" },
    background: { default: "#FFF6EB" },
    text: { primary: "#14235E" },
  },
  typography: { fontFamily: "Decalotype" },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
