import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Navbar/Header";
import HomeScreen from "./components/HomeScreen/Home";
import Footer from "./components/Footer";
import BoutiquePage from "./pages/BoutiquePage";
import Panier from "./components/BoutiquePages/Panier";
import ContactForm from "./components/Cantact/ContactForm";
import Blog from "./components/Blog/Blog";
import HistoryPage from "./pages/HistoryPage";
import DashboardPage from "./pages/DashboardPage";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import ProductDetail from "./components/BoutiquePages/ProductDetail";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<HistoryPage />}  />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
