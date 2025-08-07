import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setField,
  setImages,
  replaceField,
  resetForm,
} from "./productFormSlice";
import ErrorMessage from "./ErrorMessage";

function GeneralInfo({ onNext }) {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);
  //console.log("data: ", existingForm);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: existingForm.name,
      subtitle: existingForm.subtitle,
      description: existingForm.description,
      images: existingForm.images,
      pricing: existingForm.pricing,
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "pricing",
  });
  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    previews.forEach((p) => dispatch(setImages(p)));
    e.target.value = "";
  };
  const onSubmit = (data) => {
    // dispatch normal fields
    dispatch(setField({ field: "name", value: data.name }));
    dispatch(setField({ field: "subtitle", value: data.subtitle }));
    dispatch(setField({ field: "description", value: data.description }));
    //dispatch pricing array
    dispatch(replaceField({ field: "pricing", value: data.pricing }));
    // move to next step
    onNext();
  };
  return (
    <div className="bg-base-200 p-8 rounded-xl shadow-2xl">
      <h1 className="text-center mb-4 font-bold text-2xl">
        General Information
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-semibold">Product Name</h1>
        <label className="floating-label">
          <span>Product Name</span>
          <input
            type="text"
            placeholder="Product name"
            className="input input-lg"
            {...register("name", {
              required: "Product name is required",
              minLength: {
                value: 3,
                message: "Must be of at least 3 characters",
              },
              maxLength: {
                value: 100,
                message: "Name can not contain more than 100 characters",
              },
            })}
          />
          <ErrorMessage errors={errors} fieldName="name" />
        </label>
        <h1 className="text-xl font-semibold">Subtitle</h1>
        <label className="floating-label">
          <span>Subtitle</span>
          <input
            type="text"
            className="input input-lg"
            placeholder="Subtitle.."
            {...register("subtitle", {
              required: "Subtitle is required",
              maxLength: {
                value: 150,
                message: "Subtitle cannot exceed 150 characters",
              },
            })}
          />
          <ErrorMessage errors={errors} fieldName="subtitle" />
        </label>

        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Pricing Variants</h1>
          {fields.map((field, index) => (
            <div className="flex items-end gap-10" key={field.id}>
              <label className="floating-label">
                <span>Enter Weight</span>
                <input
                  type="number"
                  className="input input-lg"
                  placeholder="Enter Weight"
                  {...register(`pricing.${index}.weight`, {
                    required: "Weight is required",
                    min: { value: 1, message: "Must be atleast 1 gram" },
                  })}
                  defaultValue={field.weight}
                />
                {errors.pricing?.[index]?.weight && (
                  <p className="text-error text-sm mt-1">
                    {errors.pricing[index].weight.message}
                  </p>
                )}
              </label>
              <label className="floating-label">
                <span>Month</span>
                <input
                  type="number"
                  className="input input-lg"
                  placeholder="Month"
                  {...register(`pricing.${index}.duration`, {
                    required: "Duration is required",
                  })}
                  defaultValue={field.duration}
                />
                {errors.pricing?.[index]?.duration && (
                  <p className="text-error text-sm mt-1">
                    {errors.pricing[index].duration.message}
                  </p>
                )}
              </label>
              <label className="floating-label">
                <span>Jar</span>
                <input
                  type="number"
                  className="input input-lg"
                  placeholder="Jar"
                  {...register(`pricing.${index}.quantity`, {
                    required: "Quantity is required",
                  })}
                  defaultValue={field.quantity}
                />
                {errors.pricing?.[index]?.quantity && (
                  <p className="text-error text-sm mt-1">
                    {errors.pricing[index].quantity.message}
                  </p>
                )}
              </label>
              <label className="floating-label">
                <span>Add Price</span>
                <input
                  type="number"
                  className="input input-lg"
                  placeholder="Add Price"
                  {...register(`pricing.${index}.price`, {
                    required: "Price is required",

                    min: { value: 1, message: "Must be atleast 1 ₹" },
                  })}
                  defaultValue={field.price}
                />
                {errors.pricing?.[index]?.price && (
                  <p className="text-error text-sm mt-1">
                    {errors.pricing[index].price.message}
                  </p>
                )}
              </label>
              {fields.length > 1 && (
                <button
                  className="btn btn-error text-white"
                  type="button"
                  onClick={() => remove(index)}
                >
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              append({ weight: "", duration: "", quantity: "", price: "" })
            }
          >
            Add variant
          </button>
        </div>
        <h1 className="text-xl font-semibold">Product Description</h1>
        <label className="floating-label">
          <span>Description</span>
          <textarea
            className="textarea"
            placeholder="Product Description"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
              maxLength: {
                value: 500,
                message: "Description can't exceed 500 characters",
              },
            })}
          />
          <ErrorMessage errors={errors} fieldName="description" />
        </label>
        <div>
          <input
            type="file"
            multiple
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={handleImages}
          />
          <div className="flex gap-8 mt-4">
            {existingForm.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                style={{ width: 60, height: 60, objectFit: "cover" }}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-success self-start">
          Next
        </button>
      </form>
    </div>
  );
}

export default GeneralInfo;
