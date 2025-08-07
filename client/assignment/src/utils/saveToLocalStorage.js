export const loadState = () => {
  try {
    const getFormState = localStorage.getItem("productFormState");
    if (getFormState === null) return undefined;
    return JSON.parse(getFormState);
  } catch (err) {
    console.warn("Failed to load form state from Local Storage", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const setFormState = JSON.stringify(state);
    localStorage.setItem("productFormState", setFormState);
  } catch (error) {
    console.warn("failed to set form state to Local Storage", err);
  }
};
