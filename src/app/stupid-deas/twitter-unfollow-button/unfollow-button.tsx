"use client";
import { useMemo, useState } from "react";
import ChaosMenu from "./chaos-menu";

export default function UnfollowButton() {
  const [isHovering, setIsHovering] = useState(false);
  const [isChaosOpen, setIsChaosOpen] = useState(false);

  const buttonText = useMemo(() => {
    if (isHovering) return "Unfollow";

    return "Following";
  }, [isHovering]);

  return (
    <>
      <button
        type="button"
        className={`border rounded-full px-6 text-lg font-bold h-fit p-2 duration-200 ${
          buttonText === "Following"
            ? "text-twitter-blue border-twitter-blue"
            : "text-red-500 border-red-500"
        }`}
        disabled={isChaosOpen}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsChaosOpen(true)}
      >
        {buttonText}
      </button>
      {isChaosOpen && (
        <div className="absolute">
          <ChaosMenu setIsChaosOpen={setIsChaosOpen} />
        </div>
      )}
    </>
  );
}
