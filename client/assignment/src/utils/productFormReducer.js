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

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELDS":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_IMAGE":
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case "SET_PRICING":
      return {
        ...state,
        pricing: [...state.pricing, action.payload],
      };
    case "UPDATE_PRICING":
      const currentPricing = [...state.pricing];
      currentPricing[action.index] = action.payload;
      return {
        ...state,
        pricing: currentPricing,
      };
    case "ADD_FAQ":
      return {
        ...state,
        faqs: [...state.faqs, action.payload],
      };
    case "UPDATE_FAQ":
      const currentFaq = [...state.faqs];
      currentFaq[action.index] = action.payload;
      return {
        ...state,
        faqs: currentFaq,
      };
    case "ADD_ARRAY_ITEM":
      return {
        ...state,
        [action.field]: [...state[action.field], action.payload],
      };
    case "UPDATE_ARRAY_ITEM":
      return {
        ...state,
      };
    case "DELETE_ARRAY_ITEM":
      return {};
  }
};
