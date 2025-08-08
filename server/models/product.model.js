import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    pricing: [
      {
        weight: { type: String, required: true },
        duration: { type: String, required: true },
        quantity: { type: String, required: true },
        price: { type: String, required: true },
      },
    ],
    primaryBenefits: [{ type: String, required: true }],
    secondaryBenefits: [{ type: String, required: true }],
    dosage: [{ type: String, required: true }],
    usage: [
      {
        field1: { type: String, required: true },
        field2: { type: String, required: true },
      },
    ],
    primaryIngredients: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    duration: [{ type: String, required: true }],

    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    additionalProductTitle: {
      type: String,
      required: true,
    },
    additionalProducts: [{ type: String, required: true }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
