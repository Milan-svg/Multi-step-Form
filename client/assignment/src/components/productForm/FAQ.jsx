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
    <div className="bg-base-100 card w-full max-w-md p-6">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="space-y-2">
          <h1>FAQ</h1>
          {faqFields.map((field, index) => (
            <div key={field.id} className="flex space-x-4 items-center">
              <input
                type="text"
                className="input"
                placeholder="Enter Question"
                {...register(`faqs.${index}.question`, {
                  required: "Field is Required",
                })}
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Answer"
                {...register(`faqs.${index}.answer`, {
                  required: "Field is Required",
                })}
              />
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
          <h1 className="mb-4">Additional Product Display</h1>
          <label>Select Title</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Title"
            {...register("additionalProductTitle", {
              required: "Field is Required",
            })}
          />
          {additionalProductsFields.map((field, index) => (
            <div key={field.id} className="flex space-x-4 items-center">
              <input
                type="text"
                className="input"
                placeholder="Add a Product"
                {...register(`additionalProducts.${index}`, {
                  required: "Field is Required",
                })}
              />
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
          <button type="button" onClick={() => additionalProductsAppend("")}>
            Add Another Item
          </button>
        </fieldset>
        <button className="btn btn-success" type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default FAQ;
