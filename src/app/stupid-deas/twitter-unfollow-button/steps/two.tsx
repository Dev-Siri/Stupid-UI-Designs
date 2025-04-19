"use client";
import { useState } from "react";

// @ts-expect-error
import ClientCaptcha from "react-client-captcha";

interface Props {
  cancel(): void;
  done(): void;
}

export default function StepTwo({ done, cancel }: Props) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptchaValue, setGeneratedCaptchaValue] = useState("");

  function verify() {
    if (captchaValue === generatedCaptchaValue) return done();

    cancel();
  }

  return (
    <div>
      <div className="p-4">
        <p>Verify you are a human</p>
      </div>
      <div className="flex items-center justify-center">
        <ClientCaptcha
          captchaCode={(code: string) => setGeneratedCaptchaValue(code)}
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          value={captchaValue}
          onChange={(e) => setCaptchaValue(e.target.value)}
          className="p-4 rounded-md outline-none"
          placeholder="Type what you see"
        />
        <button
          type="button"
          className="p-4 bg-twitter-blue text-white font-bold"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
      <div className="p-4 flex items-end justify-end">
        <button
          type="button"
          onClick={verify}
          className="text-gray-400 text-xs p-0"
        >
          Verify Captcha
        </button>
      </div>
    </div>
  );
}
