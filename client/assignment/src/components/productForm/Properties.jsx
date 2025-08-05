import React, { useEffect, useState } from "react";
import { set, useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { replaceField } from "./productFormSlice";
import { ArrayFieldInput } from "../arrayFieldInput";
const ingredientOptions = [
  { name: "Bhringraj", image: "/images/bhringraj.png" },
  { name: "Sariva", image: "/images/sariva.png" },
  { name: "Gudahal", image: "/images/gudahal.png" },
  { name: "Jatamansi", image: "/images/jatamansi.png" },
];
function Properties({ onNext }) {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      dosage: existingForm.dosage,
      usage: existingForm.usage,
      primaryIngredients: existingForm.primaryIngredients.filter(
        (item) => item.name
      ),
      duration: existingForm.duration,
    },
  });
  const [searchTerm, setSearchTerm] = useState("");

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
  const {
    fields: primaryIngredientFields,
    append: primaryAppend,
    remove: primaryRemove,
  } = useFieldArray({
    control,
    name: "primaryIngredients",
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

  const handleSelectIngredient = (ingredient) => {
    primaryAppend(ingredient);
    setSearchTerm("");
  };
  const selectedIngredients = watch("primaryIngredients").map((i) => i.name);

  const filteredIngredients = ingredientOptions.filter(
    (opt) =>
      opt.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedIngredients.includes(opt.name)
  );

  const onSubmit = (data) => {
    dispatch(replaceField({ field: "dosage", value: data.dosage }));
    dispatch(replaceField({ field: "usage", value: data.usage }));
    dispatch(replaceField({ field: "duration", value: data.duration }));
    console.log("igredients: ", data.primaryIngredients);
    //reset();
    //onNext();
  };
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

        <fieldset className="space-y-4">
          <h1>Primary Ingredients</h1>
          {/* search bar */}
          <div className="dropdown w-full">
            <input
              type="text"
              placeholder="Search Ingredient"
              className="input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && filteredIngredients.length > 0 && (
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full mt-2 z-10 max-h-60 overflow-y-auto"
              >
                {filteredIngredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    <a onClick={() => handleSelectIngredient(ingredient)}>
                      <img
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-8 h-8 object-cover rounded mr-2"
                      />

                      {ingredient.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-y-2 pt-2">
            {primaryIngredientFields.map((field, index) => (
              <div
                key={field.id}
                className="flex items-center justify-between  p-2 rounded-lg"
              >
                <h1 className="font-medium">{field.name}</h1>
                <button
                  type="button"
                  className="btn btn-ghost btn-xs btn-circle"
                  onClick={() => primaryRemove(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </fieldset>
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
