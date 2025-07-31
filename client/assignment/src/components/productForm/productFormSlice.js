import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  subtitle: "",
  description: "",
  images: [],
  pricing: [{ weight: "", duration: "", quantity: "", price: "" }],
  primaryBenefits: [""],
  secondaryBenefits: [""],
  dosage: [""],
  usage: [""],
  primaryIngredients: [],
  allIngredients: [],
  duration: "",
  faqs: [{ question: "", answer: "" }],
  relatedProducts: [],
};

const productFormSlice = createSlice({
  name: "productForm",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    setImage: (state, action) => {
      state.images.push(action.payload);
    },
    addPricing: (state, action) => {
      state.pricing.push(action.payload);
    },
    updatePricing: (state, action) => {
      state.pricing[action.payload.index] = action.payload.value;
    },
    deletePricing: (state, action) => {
      const { field, index } = action.payload;
      state[field].splice(index, 1);
    },
    addArrayItem: (state, action) => {
      state[action.payload.field].push(action.payload.value);
    },
    deleteArrayItem: (state, action) => {
      const { field, index } = action.payload;
      state[field].splice(index, 1);
    },
    updateArrayItem: (state, action) => {
      const { field, index, value } = action.payload;
      state[field][index] = value;
    },
    resetForm: () => initialState,
  },
});
export const {
  setField,
  setImage,
  addPricing,
  updatePricing,
  deletePricing,
  addArrayItem,
  updateArrayItem,
  deleteArrayItem,
  resetForm,
} = productFormSlice.actions;

export default productFormSlice.reducer;
