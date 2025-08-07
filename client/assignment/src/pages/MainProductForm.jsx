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
} from "../components/productForm/productFormSlice";
import toast from "react-hot-toast";

const Steps = ({ currentStep }) => {
  const steps = [
    "General Information",
    "Benefits",
    "Properties",
    "FAQ",
    "Overview",
  ];
  return (
    <div className="mb-10">
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
  const [step, setStep] = useState(1);
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
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = () => {
    console.log("submitted");
    dispatch(resetForm());
    setStep(1);
    toast.success("Product Added!");
  };
  return (
    <div>
      <Steps currentStep={step} />
      {renderStep()}
      {step > 1 && (
        <button className="btn btn-primary mt-4" onClick={handleBack}>
          Back
        </button>
      )}
    </div>
  );
}

export default MainProductForm;
