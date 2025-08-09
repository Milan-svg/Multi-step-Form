import {} from "dotenv/config";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

connectDB() // kyuki ye async method hai, itll obv return a promise.
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED", error);
  });
