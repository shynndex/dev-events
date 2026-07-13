"use client";

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleClick = () => {
    console.log("Clicked!");
    posthog.capture("explore_events_clicked");
  };

  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={handleClick}
    >
      <a href="#event">
        {" "}
        Explore Events{" "}
        <Image
          src="/icons/arrow-down.svg"
          alt="Arrow Icon"
          width={24}
          height={24}
        /> 
      </a>
    </button>
  );
};

export default ExploreBtn;
