import React, { useEffect } from "react";
import { replaceField } from "./productFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
function Benefits({ onNext }) {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      primaryBenefits:
        Array.isArray(existingForm.primaryBenefits) &&
        existingForm.primaryBenefits.length > 0
          ? existingForm.primaryBenefits
          : [""],
      secondaryBenefits:
        Array.isArray(existingForm.secondaryBenefits) &&
        existingForm.secondaryBenefits.length > 0
          ? existingForm.secondaryBenefits
          : [""],
    },
    shouldUnregister: false,
  });
  const {
    fields: primaryFields,
    append: primaryAppend,
    remove: primaryRemove,
  } = useFieldArray({
    control,
    name: "primaryBenefits",
  });

  const {
    fields: secondaryFields,
    append: secondaryAppend,
    remove: secondaryRemove,
  } = useFieldArray({
    control,
    name: "secondaryBenefits",
  });

  useEffect(() => {
    if (primaryFields.length === 0) {
      primaryAppend("");
    }
  }, [primaryFields.length, primaryAppend]);

  useEffect(() => {
    if (secondaryFields.length === 0) {
      secondaryAppend("");
    }
  }, [secondaryFields.length, secondaryAppend]);

  const onSubmit = (data) => {
    //console.log("primary benefits: ", data.primaryBenefits);
    dispatch(
      replaceField({ field: "primaryBenefits", value: data.primaryBenefits })
    );
    dispatch(
      replaceField({
        field: "secondaryBenefits",
        value: data.secondaryBenefits,
      })
    );
    onNext();
  };

  console.log("existingForm.primaryBenefits", existingForm.primaryBenefits);
  // console.log("primaryFields", primaryFields);
  // console.log("secondaryFields", secondaryFields);
  return (
    <div className="card bg-base-100 w-full max-w-md p-6">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="space-y-2">
          <h1>Primary Benefits</h1>

          <div className="flex flex-col">
            {primaryFields.map((field, index) => (
              <div key={field.id} className="flex space-x-4  items-center">
                <input
                  type="text"
                  className="input"
                  placeholder="Primary Benefits"
                  {...register(`primaryBenefits.${index}`, {
                    required: "This field is required",
                  })}
                />
                {primaryFields.length > 1 && (
                  <button
                    className="btn btn-error"
                    type="button"
                    onClick={() => primaryRemove(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            className="btn btn-active"
            type="button"
            onClick={() => primaryAppend("")}
          >
            Add Another Benefit
          </button>
        </fieldset>

        <fieldset className="space-y-2">
          <h1>Secondary Benefits</h1>
          <div className="flex flex-col">
            {secondaryFields.map((field, index) => (
              <div className="flex space-x-4 items-center" key={field.id}>
                <input
                  type="text"
                  className="input"
                  placeholder="Secondary Benefits"
                  {...register(`secondaryBenefits.${index}`, {
                    required: "This field is required",
                  })}
                />
                {secondaryFields.length > 1 && (
                  <button
                    className="btn btn-error"
                    type="button"
                    onClick={() => secondaryRemove(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-active"
            onClick={() => secondaryAppend("")}
          >
            Add Another Benefit
          </button>
        </fieldset>

        <button type="submit" className="btn btn-success m-3">
          Next
        </button>
      </form>
    </div>
  );
}

export default Benefits;
