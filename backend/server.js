import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import { authMiddleware } from "./src/middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Example protected route
app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.email} to CafeLove Dashboard` });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Server is running!" });
});


app.use((req, res, next) => {
  console.log("Request URL:", req.url);
  next();
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
