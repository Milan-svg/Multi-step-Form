import React from "react";
import { ArrayFieldInput } from "../arrayFieldInput";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
function FAQ() {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      faqs: existingForm.faqs,
    },
  });

  const {} = useFieldArray({});
  return (
    <div className="bg-base-100 card w-full max-w-md p-6">
      <form className="space-y-4"></form>
    </div>
  );
}

export default FAQ;
