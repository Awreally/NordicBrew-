import app from "./app";
import { connectToDatabase } from "./config/database";
import { env } from "./config/env";

const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown startup error";
    console.error(`Server failed to start: ${message}`);
    process.exit(1);
  }
};

startServer();
