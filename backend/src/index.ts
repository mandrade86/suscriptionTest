import express from "express";
import cors from "cors";

import { connectDB } from "./Config/db";
import taskRoutes from "./Tasks/task.routes";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
