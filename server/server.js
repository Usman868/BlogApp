import express from "express";
import "dotenv/config.js";
import cors from "cors";
import dns from "dns";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
connectDB()

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin",adminRouter)
app.use("/api/blog",blogRouter)
app.get("/", (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;
