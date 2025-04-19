"use client";
import { useState, type Dispatch, type SetStateAction } from "react";
import StepFive from "./steps/five";
import StepFour from "./steps/four";
import StepOne from "./steps/one";
import StepThree from "./steps/three";
import StepTwo from "./steps/two";

interface Props {
  setIsChaosOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ChaosMenu({ setIsChaosOpen }: Props) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  const done = () =>
    setStep(
      (prevStep) => (prevStep < 7 ? ++prevStep : prevStep) as typeof step
    );

  function cancel() {
    setIsChaosOpen(false);
    setStep(1);
  }

  return (
    <div className="border border-gray-400 rounded-md mt-2 bg-white">
      {step === 1 && <StepOne done={done} cancel={cancel} />}
      {step === 2 && <StepTwo done={done} cancel={cancel} />}
      {step === 3 && <StepThree done={done} />}
      {step === 4 && <StepFour done={done} />}
      {step === 5 && <StepFive cancel={cancel} />}
    </div>
  );
}
