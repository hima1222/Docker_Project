import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function Home() {
  const navigate = useNavigate();

  // Check if user is logged in
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null; // prevent rendering
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Welcome to CafeLove ☕</h1>
        <p>You are successfully logged in!</p>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
