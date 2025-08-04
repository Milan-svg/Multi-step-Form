import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { replaceField } from "./productFormSlice";
import { ArrayFieldInput } from "../arrayFieldInput";
function Properties({ onNext }) {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      dosage: existingForm.dosage,
      usage: existingForm.usage,
      primaryIngredients: existingForm.primaryIngredients,
      allIngredients: existingForm.allIngredients,
      duration: existingForm.duration,
    },
  });
  const {
    fields: dosageFields,
    append: dosageAppend,
    remove: dosageRemove,
  } = useFieldArray({
    control,
    name: "dosage",
  });
  const {
    fields: usageFields,
    append: usageAppend,
    remove: usageRemove,
  } = useFieldArray({
    control,
    name: "usage",
  });
  const {
    fields: durationFields,
    append: durationAppend,
    remove: durationRemove,
  } = useFieldArray({
    control,
    name: "duration",
  });
  useEffect(() => {
    if (dosageFields.length < 1) {
      dosageAppend("");
    }
  }, [dosageFields.length]);

  useEffect(() => {
    if (usageFields.length < 1) {
      usageAppend("");
    }
  }, [usageFields.length]);

  useEffect(() => {
    if (durationFields.length < 1) {
      durationAppend("");
    }
  }, [durationFields.length]);

  const onSubmit = (data) => {
    dispatch(replaceField({ field: "dosage", value: data.dosage }));
    dispatch(replaceField({ field: "usage", value: data.usage }));
    dispatch(replaceField({ field: "duration", value: data.duration }));

    reset();
    onNext();
  };
  //console.log("AFTER: ", existingForm.usage);
  return (
    <div className="card bg-base-100 w-full max-w-md p-6">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <ArrayFieldInput
          register={register}
          name="Dosage"
          arrayField={dosageFields}
          entryName="dosage"
          arrayAppend={dosageAppend}
          arrayRemove={dosageRemove}
        />

        <fieldset className="space-y-4">
          <h1>Usage</h1>
          {usageFields.map((field, index) => (
            <div key={field.id} className="flex space-x-4 items-center">
              <input
                type="text"
                className="input"
                {...register(`usage.${index}.field1`, {
                  required: "Field is Required",
                })}
              />
              <input
                type="text"
                className="input"
                {...register(`usage.${index}.field2`, {
                  required: "Field is Required",
                })}
              />
              {usageFields.length > 1 && (
                <button
                  className="btn btn-error"
                  onClick={() => usageRemove(index)}
                >
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => usageAppend({ field1: "", field2: "" })}
          >
            Add Another Item
          </button>
        </fieldset>

        {/* <fieldset>
          <h1>Primary Ingredients</h1>
        </fieldset> */}
        <ArrayFieldInput
          register={register}
          name="Duration"
          arrayField={durationFields}
          entryName="duration"
          arrayAppend={durationAppend}
          arrayRemove={durationRemove}
        />
        <button className="btn btn-success" type="submit" disabled={!isValid}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Properties;
