import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/SignupPage.jsx";
import Login from "./pages/LoginPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import MainNavbar from "./components/MainNavbar.jsx";
import "./App.css";

function Dashboard() {
  return (
    <>
      <MainNavbar />
      <div className="dashboard">
        <h1>Welcome to Cafe Love ☕</h1>
      </div>
    </>
  );
}

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Public Auth Pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />

      {/* Default → Landing */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
