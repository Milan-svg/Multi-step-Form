import React, { useEffect } from "react";
import { replaceField } from "./productFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
import { ArrayFieldInput } from "../arrayFieldInput";
function Benefits({ onNext }) {
  const dispatch = useDispatch();
  const existingForm = useSelector((s) => s.productForm);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
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
  }, [primaryFields.length]);

  useEffect(() => {
    if (secondaryFields.length === 0) {
      secondaryAppend("");
    }
  }, [secondaryFields.length]);

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

  //console.log("existingForm.primaryBenefits", existingForm.primaryBenefits);
  // console.log("primaryFields", primaryFields);
  // console.log("secondaryFields", secondaryFields);
  return (
    <div className="bg-base-200 p-8 rounded-xl shadow-2xl">
      <h1 className="text-center mb-4 font-bold text-2xl">Benefits</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <ArrayFieldInput
          register={register}
          arrayField={primaryFields}
          entryName="primaryBenefits"
          name="Primary Benefits"
          arrayAppend={primaryAppend}
          arrayRemove={primaryRemove}
        />

        <ArrayFieldInput
          register={register}
          arrayField={secondaryFields}
          entryName="secondaryBenefits"
          name="Secondary Benefits"
          arrayAppend={secondaryAppend}
          arrayRemove={secondaryRemove}
        />
        <button type="submit" className="btn btn-success" disabled={!isValid}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Benefits;
