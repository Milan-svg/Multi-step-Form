import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "32kb" }));

app.use(express.urlencoded({ limit: "16kb" }));

app.use(express.static("public"));

//Routes import

import productRoute from "./routes/product.routes.js";

//routes declaration

app.use("/api/v1/products", productRoute);

export default app;
