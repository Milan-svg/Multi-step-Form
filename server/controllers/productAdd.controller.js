import Product from "../models/product.model.js";
import { cloudinaryUpload } from "../utils/cloudinaryService.js";

const addProduct = async (req, res) => {
  const {
    name,
    subtitle,
    description,
    images, //array
    pricing, // array of objs
    primaryBenefits, // array
    secondaryBenefits, //array
    dosage, //array
    usage, //array of objs
    primaryIngredients, //array of objs
    duration, //array
    faqs, //array of objs
    additionalProductTitle,
    additionalProducts, //array
  } = req.body;

  if (
    [name, subtitle, description, additionalProductTitle].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new Error("All fields are required");
  }
  if (
    [
      //pricing,
      primaryBenefits,
      secondaryBenefits,
      dosage,
      //usage,
      //primaryIngredients,
      duration,
      //faqs,
      additionalProducts,
    ].some(
      (arr) =>
        !Array.isArray(arr) || arr.length === 0 || arr.some((a) => !a.trim())
    )
  ) {
    throw new Error("All fields are required");
  }
  // pricing is array? then is its length 0??
  //then, is all of the pricing items's keys there?
  if (
    !Array.isArray(pricing) ||
    pricing.length === 0 ||
    pricing.some((p) => !p.weight || !p.duration || !p.quantity || !p.price)
  ) {
    throw new Error("Invalid Pricing Data");
  }

  let imagesLocalPathArray;
  if (
    req.files &&
    Array.isArray(req.files.images) &&
    req.files.images.length > 0
  ) {
    imagesLocalPathArray = req.files.images;
  }
  const uploadedImages = await imagesLocalPathArray.every((path) =>
    cloudinaryUpload(path)
  );
  if (!uploadedImages || uploadedImages.length === "") {
    throw new Error("Atleast 1 image is required");
  }

  const createdProduct = await Product.create({
    name,
    subtitle,
    description,
    images: uploadedImages,
    pricing,
    primaryBenefits,
    secondaryBenefits,
    dosage,
    usage,
    primaryIngredients,
    duration,
    faqs,
    additionalProductTitle,
    additionalProducts,
  });
  if (!createdProduct) {
    throw new Error(
      "Something went wrong while registering the product in database"
    );
  }
  //idk how to return response.
};

export { addProduct };
