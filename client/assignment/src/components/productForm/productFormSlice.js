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
  usage: [{ field1: "", field2: "" }],
  primaryIngredients: [],
  allIngredients: [],
  duration: [""],
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
    setImages: (state, action) => {
      //if an array is passed, replace the redux state array, else if an individual image is passed, then push it toe the existing state array.
      if (Array.isArray(action.payload)) {
        state.images = action.payload;
      } else {
        state.images.push(action.payload);
      }
    },
    addPricing: (state, action) => {
      state.pricing.push(action.payload);
    },
    updatePricing: (state, action) => {
      state.pricing[action.payload.index] = action.payload.value;
    },
    replacePricing: (state, action) => {
      state.pricing = action.payload;
    },
    deletePricing: (state, action) => {
      const { field, index } = action.payload;
      state[field].splice(index, 1);
    },
    addArrayItem: (state, action) => {
      const { field, value } = action.payload;
      state[field].push(value);
    },
    deleteArrayItem: (state, action) => {
      const { field, index } = action.payload;
      state[field].splice(index, 1);
    },
    updateArrayItem: (state, action) => {
      const { field, index, value } = action.payload;
      state[field][index] = value;
    },
    replaceField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});
export const {
  setField,
  setImages,
  addPricing,
  updatePricing,
  deletePricing,
  replacePricing,
  addArrayItem,
  updateArrayItem,
  deleteArrayItem,
  replaceField,
  resetForm,
} = productFormSlice.actions;

export default productFormSlice.reducer;
