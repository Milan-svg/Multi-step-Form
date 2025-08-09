import Product from "../models/product.model.js";
import { cloudinaryUpload } from "../utils/cloudinaryService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";

const addProduct = asyncHandler(async (req, res) => {
  //console.log("REQ.FILES : ", req.files);

  let {
    name,
    subtitle,
    description,
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
  } = req.body;

  //parsing
  const parse = (str) => {
    return JSON.parse(str);
  };
  pricing = parse(pricing);
  primaryBenefits = parse(primaryBenefits);
  secondaryBenefits = parse(secondaryBenefits);
  dosage = parse(dosage);
  usage = parse(usage);
  primaryIngredients = parse(primaryIngredients);
  duration = parse(duration);
  faqs = parse(faqs);
  additionalProducts = parse(additionalProducts);

  //validating simple string fields

  if (
    [name, subtitle, description, additionalProductTitle].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  //validating arrays of simple strings.
  if (
    [
      primaryBenefits,
      secondaryBenefits,
      dosage,
      duration,
      additionalProducts,
    ].some(
      (arr) =>
        !Array.isArray(arr) || arr.length === 0 || arr.some((a) => !a.trim())
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Validate Pricing data
  if (
    !Array.isArray(pricing) ||
    pricing.length === 0 ||
    pricing.some((p) => !p.weight || !p.duration || !p.quantity || !p.price)
  ) {
    throw new ApiError(400, "Invalid Pricing Data");
  }
  // validate usage data
  if (
    !Array.isArray(usage) ||
    usage.length === 0 ||
    usage.some((u) => !u.field1 || !u.field2)
  ) {
    throw new ApiError(400, "Invalid Usage Data");
  }
  //validate primaryIngredients
  if (
    !Array.isArray(primaryIngredients) ||
    primaryIngredients.length === 0 ||
    primaryIngredients.some(
      (ingredient) => !ingredient.name || !ingredient.image
    )
  ) {
    throw new ApiError(400, "Invalid Primary Ingredients Data");
  }
  //validate faqs
  if (
    !Array.isArray(faqs) ||
    faqs.length === 0 ||
    faqs.some((faq) => !faq.question || !faq.answer)
  ) {
    throw new ApiError(400, "Invalid FAQ Data");
  }

  if (!req.files || req.files.length === 0) {
    throw new ApiError(400, "No image data recieved");
  }
  //IMAGE UPLOAD

  // 1.  get path of each item of req.files.images,
  // 2.  pass these paths to cloudinary for upload, and just get only the urls from the resulting array.

  const imagePaths = req.files.map((imgObj) => imgObj.path);

  const uploadedImages = await Promise.all(
    imagePaths.map((path) => cloudinaryUpload(path))
  );
  if (!uploadedImages) {
    throw new ApiError(500, "Cloudinary upload failed!");
  }
  const uploadedUrls = uploadedImages.map((img) => img.url);

  const createdProduct = await Product.create({
    name,
    subtitle,
    description,
    images: uploadedUrls,
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
    throw new ApiError(
      500,
      "Something went wrong while registering the product in database"
    );
  }
  return res
    .status(200)
    .json({ success: true, message: "Product Created!", data: createdProduct });
});

//bug: accidently wrote (res,req) instead of (req,res)
const getAllProducts = asyncHandler(async (req, res) => {
  // get all products, and omit timestamps, lean is used so that unneccesary prototype chain and mongoose specific methods are omitted
  const products = await Product.find(
    {},
    { createdAt: 0, updatedAt: 0 }
  ).lean();
  if (products.length === 0) {
    throw new ApiError(404, "No products found");
  }
  return res
    .status(200)
    .json({ success: true, message: "Products fetched!", data: products });
});
export { addProduct, getAllProducts };
