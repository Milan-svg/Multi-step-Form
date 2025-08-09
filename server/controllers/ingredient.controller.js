import Ingredient from "../models/ingredients.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";

const getIngredients = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find({}).lean();
  if (ingredients.length === 0) {
    throw new ApiError(404, "No Ingredients found");
  }
  return res.status(200).json({
    success: true,
    message: "Ingredients fetched!",
    data: ingredients,
  });
});

export { getIngredients };
