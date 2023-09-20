"use client";

import React, { useState } from "react";
import { jobSuggestions } from "../../utils/data";
import PercentageBar from "@/components/PercentageBar";

const Alternative: React.FC = (suggestions) => {
  const [selectedSuggestions, setSelectedSuggestions] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedSuggestions((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((suggestionId) => suggestionId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-sm font-bold mb-2">Alternative Now</h2>
      <div>
        <div className="border border-custom_blue p-2">
          <h3 className="text-xs mb-3 font-semibold">
            Select Domain (-s) for Job Suggestions
          </h3>
          <div className="flex gap-2 items-center flex-wrap">
            {jobSuggestions.map((suggestion) => (
              <span
                key={suggestion.id}
                onClick={() => toggleSelection(suggestion.id)}
                className={`cursor-pointer rounded-2xl mx-[1px] py-1 px-[6px] text-xs font-normal ${
                  selectedSuggestions.includes(suggestion.id)
                    ? "bg-dark_custom_blue text-white border-2 border-dark_custom_blue" // Apply your selected color class
                    : "bg-transparent text-black border-2 border-custom_blue" // Apply your default color class
                }`}
              >
                {suggestion.title}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-t-0 border-custom_blue p-2">
          <p className="text-xs font-medium">
            How good a fit should an Alternative Now be with your current
            skillset?
          </p>
          <p className="text-xs font-medium">
            Setting this will allow an accepted gap you are ready to bridge.
          </p>

          <PercentageBar />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Alternative;
{
  /* <span>Adminstration & Managemen</span>
<span>Communication</span>
<span>Culture, Sports and Entertainment</span>
<span>IT</span>
<span>land & Sea & Air</span>
<span>land & Sea & Air</span>
<span>Life & Death</span>
<span>Manufacturing and Working with Materials</span>
<span>Sales and Marketing</span>
<span>Services</span>
<span>STEM, Science, Technology, Engineering, Math</span> */
}
