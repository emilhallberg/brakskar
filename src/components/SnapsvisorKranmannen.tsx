"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SnapsvisorKranmannen = () => {
  const figureRef = useRef<HTMLButtonElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isCheering, setIsCheering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollMotion = () => {
      animationFrameRef.current = null;

      const figure = figureRef.current;
      if (!figure) {
        return;
      }

      const scrollProgress = window.scrollY;
      const tilt = Math.sin(scrollProgress / 90) * 5;
      const lift = Math.cos(scrollProgress / 120) * 4;

      figure.style.setProperty("--kranmannen-tilt", `${tilt.toFixed(2)}deg`);
      figure.style.setProperty("--kranmannen-lift", `${lift.toFixed(2)}px`);
      setIsVisible(scrollProgress > 80);
    };

    const requestScrollMotion = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(updateScrollMotion);
      }
    };

    updateScrollMotion();
    window.addEventListener("scroll", requestScrollMotion, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestScrollMotion);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const cheer = () => {
    setIsCheering(true);
    window.setTimeout(() => setIsCheering(false), 700);
  };

  const jumpToSongList = () => {
    cheer();

    const section = document.getElementById("snapsvisor-list");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <button
      ref={figureRef}
      aria-label="Till vislistan"
      aria-hidden={!isVisible}
      className={`kranmannen fixed -bottom-2 -left-3 z-10 w-[clamp(110px,22vw,180px)] border-0 bg-transparent p-0 sm:-bottom-3 sm:-left-4 ${
        isCheering ? "kranmannen--cheering" : ""
      } ${isVisible ? "kranmannen--visible" : ""}`}
      onClick={jumpToSongList}
      onMouseEnter={cheer}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <Image
        alt=""
        className="h-auto w-full"
        height={252}
        priority
        src="/img/snapsvisor-kranmannen.png"
        width={220}
      />
    </button>
  );
};

export default SnapsvisorKranmannen;
