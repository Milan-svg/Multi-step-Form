import { configureStore } from "@reduxjs/toolkit";
import productFormReducer from "../components/productForm/productFormSlice";
export const store = configureStore({
  reducer: {
    productForm: productFormReducer,
  },
});
