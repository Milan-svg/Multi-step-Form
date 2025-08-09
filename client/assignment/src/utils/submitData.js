const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const submitData = async (reduxFormData) => {
  const formData = new FormData();

  // add text fields

  formData.append("name", reduxFormData.name);
  formData.append("subtitle", reduxFormData.subtitle);
  formData.append("description", reduxFormData.description);
  formData.append(
    "additionalProductTitle",
    reduxFormData.additionalProductTitle
  );

  // add arrays

  formData.append("pricing", JSON.stringify(reduxFormData.pricing));
  formData.append(
    "primaryBenefits",
    JSON.stringify(reduxFormData.primaryBenefits)
  );

  formData.append(
    "secondaryBenefits",
    JSON.stringify(reduxFormData.secondaryBenefits)
  );
  formData.append("dosage", JSON.stringify(reduxFormData.dosage));
  formData.append("usage", JSON.stringify(reduxFormData.usage));

  formData.append(
    "primaryIngredients",
    JSON.stringify(reduxFormData.primaryIngredients)
  );

  formData.append("duration", JSON.stringify(reduxFormData.duration));

  formData.append("faqs", JSON.stringify(reduxFormData.faqs));
  formData.append(
    "additionalProducts",
    JSON.stringify(reduxFormData.additionalProducts)
  );

  //add image files
  reduxFormData.imageFiles.forEach((file) => formData.append("images", file));

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/products/add-product`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log("response from backend: ", data);
    if (!response.ok) {
      throw new Error(data.message || "Failed to add product");
    }
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
};
export { submitData };
