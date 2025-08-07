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
    <div className="bg-base-200 p-8 rounded-xl shadow-2xl">
      <h1 className="text-center mb-4 font-bold text-2xl">
        General Information
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="floating-label">
          <span>Product Name</span>
          <input
            type="text"
            placeholder="Product name"
            className="input input-lg"
            {...register("name", { required: "Product name is required" })}
          />
        </label>
        <label className="floating-label">
          <span>Subtitle</span>
          <input
            type="text"
            className="input input-lg"
            placeholder="Subtitle.."
            {...register("subtitle", { required: "Subtitle is required" })}
          />
        </label>

        <div className="space-y-4">
          <h1 className="text-xl">Pricing Variants</h1>
          {fields.map((field, index) => (
            <div className="flex items-end gap-10" key={field.id}>
              <label className="floating-label">
                <span>Enter Weight</span>
                <input
                  type="text"
                  className="input input-lg"
                  placeholder="Enter Weight"
                  {...register(`pricing.${index}.weight`, {
                    required: "Weight is required",
                  })}
                  defaultValue={field.weight}
                />
              </label>
              <label className="floating-label">
                <span>Month</span>
                <input
                  type="text"
                  className="input input-lg"
                  placeholder="Month"
                  {...register(`pricing.${index}.duration`, {
                    required: "Duration is required",
                  })}
                  defaultValue={field.duration}
                />
              </label>
              <label className="floating-label">
                <span>Jar</span>
                <input
                  type="text"
                  className="input input-lg"
                  placeholder="Jar"
                  {...register(`pricing.${index}.quantity`, {
                    required: "Quantity is required",
                  })}
                  defaultValue={field.quantity}
                />
              </label>
              <label className="floating-label">
                <span>Add Price</span>
                <input
                  type="text"
                  className="input input-lg"
                  placeholder="Add Price"
                  {...register(`pricing.${index}.price`, {
                    required: "Price is required",
                  })}
                  defaultValue={field.price}
                />
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

        <label className="floating-label">
          <span>Product Description</span>
          <textarea
            className="textarea"
            placeholder="Product Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
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

        <button
          type="submit"
          className="btn btn-success self-start"
          disabled={!isValid}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default GeneralInfo;
