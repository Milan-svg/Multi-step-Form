import React, { useState } from "react";
import GeneralInfo from "./Step1_GeneralInfo";
import Benefits from "./Step2_Benefits";
import Properties from "./Step3_Properties";
import FAQ from "./Step4_FAQ";
import Overview from "./Step5_Overview";
function MainForm() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <GeneralInfo />;
      case 2:
        return <Benefits />;
      case 3:
        return <Properties />;
      case 4:
        return <FAQ />;
      case 5:
        return <Overview />;
      default:
        return <GeneralInfo />;
    }
  };
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {renderStep()}
      <div>
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 5 && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default MainForm;
