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
              })}
            />
          </label>
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
      <button type="button" className="btn" onClick={() => arrayAppend("")}>
        Add Another Item
      </button>
    </fieldset>
  );
}
