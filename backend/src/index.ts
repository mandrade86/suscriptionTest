import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./controllers/task.controller";

const SERVER_PORT = 3002;

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/", taskRoutes);

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port: ${SERVER_PORT}`)
);