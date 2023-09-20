"use client";

import React, { useState } from "react";
import { jobSuggestions } from "../../utils/data";
import PercentageBar from "@/components/PercentageBar";
import ToggleSwitch from "@/components/ToggleSwitch";

const Alternative: React.FC = (suggestions) => {
  const [selectedSuggestions, setSelectedSuggestions] = useState<number[]>([]);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

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
        <div className="border border-custom_blue rounded-sm p-2">
          <h3 className="text-xs mb-3 font-semibold">
            Select Domain (-s) for Job Suggestions
          </h3>
          <div className="flex gap-2 items-center flex-wrap">
            {jobSuggestions.map((suggestion) => (
              <span
                key={suggestion.id}
                onClick={() => toggleSelection(suggestion.id)}
                className={`cursor-pointer rounded-2xl mx-[1px] py-1 px-[6px] text-[0.70rem] ${
                  selectedSuggestions.includes(suggestion.id)
                    ? "bg-dark_custom_blue text-white border-2 border-dark_custom_blue font-medium"
                    : "bg-transparent text-black border-2 border-custom_blue"
                }`}
              >
                {suggestion.title}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-t-0 border-custom_blue rounded-sm p-2">
          <p className="text-[0.70rem] font-medium mb-1">
            How good a fit should an Alternative Now be with your current
            skillset?
          </p>
          <p className="text-[0.70rem] font-medium">
            Setting this will allow an accepted gap you are ready to bridge.
          </p>

          <PercentageBar />
        </div>

        <div>
          <h3 className="text-xs mb-1 font-semibold mt-5">Common</h3>
          <div className="border border-custom_green rounded-sm p-2 ">
            <p className="text-xs font-normal">
              Example Jobs need to comply with my job preference
            </p>
            <ToggleSwitch
              id="exampleJobs"
              checked={isChecked1}
              onChange={setIsChecked1}
            />
          </div>

          <div className="border border-t-0 border-custom_green p-2 ">
            <p className="text-xs font-normal">
              Share Possible Futures with potential Employeers
            </p>
            <ToggleSwitch
              id="possibleJobs"
              checked={isChecked2}
              onChange={setIsChecked2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alternative;
