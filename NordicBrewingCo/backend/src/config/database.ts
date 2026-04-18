import mongoose from "mongoose";
import { env } from "./env";

const getSafeDatabaseErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    if ("name" in error && error.name === "MongoServerError") {
      return "MongoDB authentication failed. Check your database username and password.";
    }

    return error.message;
  }

  return "Unknown database error";
};

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(
      `Could not connect to MongoDB: ${getSafeDatabaseErrorMessage(error)}`,
    );
    process.exit(1);
  }
};
