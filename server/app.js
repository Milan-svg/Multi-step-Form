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

app.use(express.static("public")); //3. Middleware,  used to serve static files to the client (html/css/js/imgs/pdfs/etc) directly from the directory("public" in this case) instead of generating em via the server.

//app.use(cookieParser())

export default app;
