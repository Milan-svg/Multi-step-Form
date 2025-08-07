import React from "react";
import ErrorMessage from "./productForm/ErrorMessage";
export function ArrayFieldInput({
  arrayField,
  name,
  entryName,
  register,
  arrayRemove,
  arrayAppend,
  errors,
}) {
  return (
    <fieldset className="space-y-4">
      <h1 className="text-xl font-semibold">{name}</h1>
      {arrayField.map((field, index) => (
        <div key={field.id} className="flex items-end gap-10">
          <label className="floating-label">
            <span>{name}</span>
            <input
              type="text"
              className="input input-lg"
              placeholder={name}
              {...register(`${entryName}.${index}`, {
                required: "Field is Required",
                minLength: {
                  value: 3,
                  message: "Field must be of at least 3 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Field can not contain more than 100 characters",
                },
              })}
            />
            {errors?.[entryName]?.[index] && (
              <p className="text-error text-sm mt-1">
                {errors[entryName][index]?.message}
              </p>
            )}
          </label>
          {arrayField.length > 1 && (
            <button
              type="button"
              className="btn btn-error text-white"
              onClick={() => arrayRemove(index)}
            >
              X
            </button>
          )}
        </div>
      ))}
      <button type="button" className="btn" onClick={() => arrayAppend("")}>
        Add Another Item
      </button>
    </fieldset>
  );
}
