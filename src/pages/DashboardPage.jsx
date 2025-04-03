import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import UserDashboard from "../components/Dashboard/UserDashboard";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) navigate("/login");
    else setUser(userData);
  }, [navigate]);

  if (!user) return <div>Chargement...</div>;

  return user.role === "admin" ? <AdminDashboard user={user} /> : <UserDashboard user={user} />;
};

export default DashboardPage;