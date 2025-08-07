import { configureStore } from "@reduxjs/toolkit";
import productFormReducer from "../components/productForm/productFormSlice";
import { loadState, saveState } from "../utils/saveToLocalStorage";

const persistedState = {
  productForm: loadState() || undefined,
};
export const store = configureStore({
  reducer: {
    productForm: productFormReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const stateToBeSaved = store.getState();
  saveState(stateToBeSaved.productForm);
});
