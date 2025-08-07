import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Benefits from "./Benefits";
import Properties from "./Properties";
import FAQ from "./FAQ";
import Overview from "./Overview";

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

function MainForm() {
  const [step, setStep] = useState(1);

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
        return <Overview onNext={handleNext} />;
      default:
        return <GeneralInfo onNext={handleNext} />;
    }
  };
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
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

export default MainForm;
