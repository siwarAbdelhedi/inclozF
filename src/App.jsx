import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme";

//Import components
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
import CustomRequest from "./components/Forms/CustomRequest";

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
          <Route path="custom-request" element={<CustomRequest />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
