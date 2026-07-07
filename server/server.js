import express from "express";
import "dotenv/config";
import cors from "cors";
import dns from "dns";
import connectDB from "./configs/db.js";
dns.setServers(["1.1.1.1", "8.8.8.8"]);



const app = express();
await connectDB()

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;
