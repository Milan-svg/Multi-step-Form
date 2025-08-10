import React, { useEffect, useState } from "react";
import GeneralInfo from "../components/productForm/GeneralInfo";
import Benefits from "../components/productForm/Benefits";
import Properties from "../components/productForm/Properties";
import FAQ from "../components/productForm/FAQ";
import Overview from "../components/productForm/Overview";
import { useDispatch, useSelector } from "react-redux";
import {
  resetImages,
  resetForm,
  setStep,
} from "../components/productForm/productFormSlice";
import toast from "react-hot-toast";
import { submitData } from "../utils/submitData";

const Steps = ({ currentStep }) => {
  const steps = [
    "General Information",
    "Benefits",
    "Properties",
    "FAQ",
    "Overview",
  ];
  return (
    <div className="mb-6 mt-[-40px]">
      <ul className="steps w-full">
        {steps.map((label, index) => (
          <li
            key={label}
            className={`step ${index + 1 <= currentStep ? "step-success" : ""}`}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

function MainProductForm() {
  const dispatch = useDispatch();
  const step = useSelector((s) => s.productForm.step);
  const formData = useSelector((s) => s.productForm);
  // here i clear blob image urls from redux state on hard refresh
  useEffect(() => {
    if (performance.navigation.type === 1) {
      dispatch(resetImages());
    }
  }, []);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <GeneralInfo onNext={handleNext} />;
      case 2:
        return <Benefits onNext={handleNext} />;
      case 3:
        return <Properties onNext={handleNext} />;
      case 4:
        return <FAQ onNext={handleNext} />;
      case 5:
        return <Overview onNext={handleNext} handleSubmit={handleSubmit} />;
      default:
        return <GeneralInfo onNext={handleNext} />;
    }
  };
  const handleNext = () => dispatch(setStep(step + 1));
  const handleBack = () => dispatch(setStep(step - 1));

  const handleSubmit = async () => {
    const result = await submitData(formData);
    if (result.success) {
      console.log("submitted");
      dispatch(resetForm());
      dispatch(setStep(1));
      toast.success("Product Added!");
    } else {
      console.error("Failed to dispatch product to database:", result.error);
      toast.error("Failed to add Product");
    }
  };
  return (
    <div>
      <Steps currentStep={step} />
      {renderStep()}
      {step > 1 && (
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-error mt-4"
            onClick={() => {
              if (confirm("Are you sure you want to clear the form?")) {
                dispatch(resetForm());
                dispatch(setStep(1));
                toast.success("Form cleared!");
              }
            }}
          >
            Clear Form
          </button>
        </div>
      )}
    </div>
  );
}

export default MainProductForm;
