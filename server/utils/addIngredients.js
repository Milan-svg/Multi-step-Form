// just a quick script to add ingredients to the DB, ill use these for mapping primaryIngredients in the frontend, in Properties.jsx.

import mongoose from "mongoose";
import dotenv from "dotenv";
import Ingredient from "../models/ingredients.model.js";

dotenv.config();

const ingredients = [
  { name: "Bhringraj", image: "/images/bhringraj.png" },
  { name: "Sariva", image: "/images/sariva.png" },
  { name: "Gudahal", image: "/images/gudahal.png" },
  { name: "Jatamansi", image: "/images/jatamansi.png" },
];

mongoose
  .connect(process.env.MONGODB_URL)
  .then(async () => {
    await Ingredient.insertMany(ingredients);
    console.log("Ingredients added!");
    process.exit();
  })
  .catch((err) => console.log("error while adding ingredients", err));
