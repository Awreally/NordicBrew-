import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";
import { errorHandler } from "./middleware/errorHandler";
import { env } from "./config/env";

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
  }),
);

app.use(express.json());
app.use("/api/products", productsRouter);

app.use(errorHandler);

export default app;
