import express from "express";
import "dotenv/config.js";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
app.get("/", (req, res) => res.send("API is working"));

export default app;
