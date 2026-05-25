"use client";

import { useEffect, useState } from "react";
import TapIcon from "./TapIcon";

const SwipeDownIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => {
      setVisible(false);
    };

    window.addEventListener("mousedown", hide, { once: true });
    window.addEventListener("touchstart", hide, { once: true });

    return () => {
      window.removeEventListener("mousedown", hide);
      window.removeEventListener("touchstart", hide);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 z-50 grid place-content-center bg-black text-white transition-opacity ${
        visible
          ? "pointer-events-auto opacity-70"
          : "pointer-events-none opacity-0"
      }`}
    >
      <TapIcon
        width={64}
        height={64}
        className="animate-[backandforth_2s_ease_infinite]"
      />
      <h1 className="mt-12 text-center text-4xl font-bold">BRAKFEST</h1>
      <style jsx>{`
        @keyframes backandforth {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(58%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SwipeDownIndicator;
