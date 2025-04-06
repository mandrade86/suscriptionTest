import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB_NAME,
} = process.env;

if (!MONGO_HOST || !MONGO_PORT || !MONGO_DB_NAME) {
  throw new Error("Database configuration is missing in .env");
}

const hasAuth = MONGO_USER && MONGO_PASS;
const MONGO_URI = hasAuth
  ? `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin`
  : `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to:", MONGO_URI);
  } catch (err) {
    console.error("Connection error:", err);
    throw new Error("Failed to connect to database");
  }
};
