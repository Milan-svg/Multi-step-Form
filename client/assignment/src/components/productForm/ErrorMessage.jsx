import React from "react";

function ErrorMessage({ errors, fieldName }) {
  if (!errors?.[fieldName]?.message) return null;
  return <p className="text-error text-sm mt-1">{errors[fieldName].message}</p>;
}

export default ErrorMessage;
