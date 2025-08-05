import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setField, setImages, replaceField } from "./productFormSlice";

function GeneralInfo({ onNext }) {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
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
    <div className="card bg-base-100 p-6 flex flex-col max-w-md">
      <h1 className="card-title text-center">General Information</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product name"
          className="input"
          {...register("name", { required: "Product name is required" })}
        />

        <input
          type="text"
          className="input"
          placeholder="Subtitle.."
          {...register("subtitle", { required: "Subtitle is required" })}
        />

        <div className="space-y-4 flex flex-col">
          <h1>Pricing Variants</h1>
          {fields.map((field, index) => (
            <div className="flex space-x-4" key={field.id}>
              <input
                type="text"
                className="input"
                placeholder="Enter Weight"
                {...register(`pricing.${index}.weight`, {
                  required: "Weight is required",
                })}
                defaultValue={field.weight}
              />
              <input
                type="text"
                className="input"
                placeholder="Month"
                {...register(`pricing.${index}.duration`, {
                  required: "Duration is required",
                })}
                defaultValue={field.duration}
              />
              <input
                type="text"
                className="input"
                placeholder="Jar"
                {...register(`pricing.${index}.quantity`, {
                  required: "Quantity is required",
                })}
                defaultValue={field.quantity}
              />
              <input
                type="text"
                className="input"
                placeholder="Add Price"
                {...register(`pricing.${index}.price`, {
                  required: "Price is required",
                })}
                defaultValue={field.price}
              />
              {fields.length > 1 && (
                <button
                  className="btn"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              )}
              <button
                className="btn"
                onClick={() =>
                  append({ weight: "", duration: "", quantity: "", price: "" })
                }
              >
                Add variant
              </button>
            </div>
          ))}
        </div>

        <input
          type="text"
          className="input"
          placeholder="Product Description"
          {...register("description", {
            required: "Description is required",
          })}
        />
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

        <button
          type="submit"
          className="btn btn-success mt-5"
          disabled={!isValid}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default GeneralInfo;
