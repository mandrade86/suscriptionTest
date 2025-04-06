import { connectToDatabase } from "./db";
import { createServer } from "./server";
import config from "./config";

const startServer = async () => {
  try {
    await connectToDatabase();

    const server = createServer();
    server.listen(config.port, () => {
      console.log(`Server running on ${config.port}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

startServer();
