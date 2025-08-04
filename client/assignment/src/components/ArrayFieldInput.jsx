import React from "react";

export function ArrayFieldInput({
  arrayField,
  name,
  entryName,
  register,
  arrayRemove,
  arrayAppend,
}) {
  return (
    <fieldset className="space-y-4">
      <h1>{name}</h1>
      {arrayField.map((field, index) => (
        <div key={field.id} className="flex space-x-4 items-center">
          <input
            type="text"
            className="input"
            {...register(`${entryName}.${index}`, {
              required: "Field is Required",
            })}
          />
          {arrayField.length > 1 && (
            <button
              type="button"
              className="btn btn-error"
              onClick={() => arrayRemove(index)}
            >
              X
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => arrayAppend("")}>
        Add Another Item
      </button>
    </fieldset>
  );
}
