"use client";

import { useState } from "react";

interface Props {
  done(): void;
}

const mathQuestion = `
  <math>
    <mfrac>
      <mtext>2xy + 3</mtext>
      <mtext>x² + 5</mtext>
    </mfrac>
    <mo>-</mo>
    <mfrac>
      <mtext>y² + 2</mtext>
      <mtext>2x + 1</mtext>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mtext>1</mtext>
      <mtext>x</mtext>
    </mfrac>
  </math>
`;

const answer = {
  x: "-1/2",
  y: "-3/2",
};

export default function StepFour({ done }: Props) {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  return (
    <div className="p-4">
      <p className="mb-4">Find the value of x and y in this math problem</p>
      <div dangerouslySetInnerHTML={{ __html: mathQuestion }} />
      <div className="flex mt-4">
        <input
          type="text"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="Value for x"
          className="w-40 outline-none"
        />
        <input
          type="text"
          value={y}
          onChange={(e) => setY(e.target.value)}
          placeholder="Value for y"
          className="w-40 outline-none"
        />
      </div>
      <div className="flex items-end justify-end">
        {y === answer.y && x === answer.x && (
          <button type="button" onClick={done} className="text-gray-500">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
