import { Router } from "express";
import { getIngredients } from "../controllers/ingredient.controller.js";

const ingredientRoute = Router();

ingredientRoute.route("/").get(getIngredients);

export default ingredientRoute;
