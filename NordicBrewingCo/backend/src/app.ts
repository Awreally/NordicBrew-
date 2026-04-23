import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import { env } from "./config/env";
import productRouter from "./api/products/product.routes";

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
  }),
);

app.use(express.json());
app.use("/api/products", productRouter);

app.use(errorHandler);

export default app;
