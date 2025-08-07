import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
import { replaceField } from "./productFormSlice";
function FAQ({ onNext }) {
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
      additionalProductTitle: existingForm.additionalProductTitle,
      additionalProducts: existingForm.additionalProducts,
    },
  });

  const {
    fields: faqFields,
    append: faqAppend,
    remove: faqRemove,
  } = useFieldArray({
    control,
    name: "faqs",
  });
  const {
    fields: additionalProductsFields,
    append: additionalProductsAppend,
    remove: additionalProductsRemove,
  } = useFieldArray({
    control,
    name: "additionalProducts",
  });
  useEffect(() => {
    if (additionalProductsFields.length === 0) {
      additionalProductsAppend("");
    }
  }, [additionalProductsFields.length]);

  const onSubmit = (data) => {
    dispatch(replaceField({ field: "faqs", value: data.faqs }));
    dispatch(
      replaceField({
        field: "additionalProductTitle",
        value: data.additionalProductTitle,
      })
    );
    dispatch(
      replaceField({
        field: "additionalProducts",
        value: data.additionalProducts,
      })
    );
    onNext();
  };

  return (
    <div className="bg-base-200 p-8 rounded-xl shadow-2xl">
      <h1 className="text-center mb-4 font-bold text-2xl">FAQ</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="space-y-4">
          <h1 className="text-xl font-semibold">FAQ</h1>
          {faqFields.map((field, index) => (
            <div key={field.id} className="flex items-end gap-10">
              <label className="floating-label">
                <span>Question</span>
                <input
                  type="text"
                  className="input input-lg"
                  placeholder="Enter Question"
                  {...register(`faqs.${index}.question`, {
                    required: "Field is Required",
                  })}
                />
              </label>
              <label className="floating-label">
                <span>Answer</span>
                <textarea
                  type="text"
                  className="input input-lg"
                  placeholder="Enter Answer"
                  {...register(`faqs.${index}.answer`, {
                    required: "Field is Required",
                  })}
                />
              </label>
              {faqFields.length > 1 && (
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={() => faqRemove(index)}
                >
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() => faqAppend({ question: "", answer: "" })}
          >
            Add another FAQ
          </button>
        </fieldset>
        <fieldset className="space-y-4">
          <h1 className="text-xl font-semibold">Additional Product Display</h1>
          <label className="floating-label">
            <span>Select Title</span>
            <input
              type="text"
              className="input input-lg"
              placeholder="Enter Title"
              {...register("additionalProductTitle", {
                required: "Field is Required",
              })}
            />
          </label>
          {additionalProductsFields.map((field, index) => (
            <div key={field.id} className="flex space-x-4 items-center">
              <label className="floating-label">
                <span>Add a Product</span>
                <input
                  type="text"
                  className="input input-lg"
                  placeholder="Add a Product"
                  {...register(`additionalProducts.${index}`, {
                    required: "Field is Required",
                  })}
                />
              </label>
              {additionalProductsFields.length > 1 && (
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={() => additionalProductsRemove(index)}
                >
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() => additionalProductsAppend("")}
          >
            Add Another Item
          </button>
        </fieldset>
        <button className="btn btn-success" type="submit" disabled={!isValid}>
          Next
        </button>
      </form>
    </div>
  );
}

export default FAQ;
