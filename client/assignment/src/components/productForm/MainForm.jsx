import React, { useState } from "react";
import GeneralInfo from "./Step1_GeneralInfo";
import Benefits from "./Step2_Benefits";
import Properties from "./Properties";
import FAQ from "./FAQ";
import Overview from "./Overview";
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
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {renderStep()}
      {step > 1 && (
        <button className="btn" onClick={handleBack}>
          Back
        </button>
      )}
    </div>
  );
}

export default MainForm;
