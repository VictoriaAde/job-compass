"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { possibleJobs } from "../../utils/data";
import { BiPlusCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
import useDebouncedEventHandler from "../../utils/debounce";

const PossibleFuture: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debounceDelay = 100;

  const handleSearchQueryChange = useDebouncedEventHandler((query: string) => {
    setSearchQuery(query);
  }, debounceDelay);

  const filteredJobs = possibleJobs.filter((job) =>
    job.profile.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-center">
      <h2 className="text-sm font-bold mb-2">Possible Future</h2>
      <div className="border border-custom_yellow p-2 rounded-sm">
        <h3 className="text-xs mb-3 font-semibold">
          Discover new profiles and get tailored career advice
        </h3>
        <form action="" className="px-1 flex">
          <input
            type="search"
            name=""
            id=""
            placeholder="Enter a Profile name"
            className="w-full appearance-none py-[4px] px-[3px] text-xs font-medium rounded-sm border border-gray-300 outline-none focus:border-gray-300  focus:ring-0 placeholder:text-xs search"
            value={searchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
          />
          <span className="f bg-gray-500 px-1 flex justify-center items-center cursor-text">
            <AiOutlineSearch color="#fff" />
          </span>
        </form>

        <div className="border border-gray-300 rounded-sm mt-3 h-[29rem] overflow-y-scroll">
          {filteredJobs.length === 0 ? (
            <div className="text-center p-3 mt-8">
              <p className="text-xs text-gray-700">
                No matching profiles found.
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="flex justify-between items-center border-b border-gray-300 p-3"
              >
                <div className="flex flex-col items-start">
                  <h3 className="text-[11px] font-semibold mb-1 text-start">
                    {job.profile}
                  </h3>
                  <div className="flex">
                    <p className="text-[9px] px-1 py-[1px] bg-light_green rounded-xl mr-1">
                      <span className="font-semibold"> {job.missingSkill}</span>{" "}
                      missing skill(s)
                    </p>
                    <p className="text-[9px] bg-light_yellow px-1 py-[1px] rounded-xl">
                      <span className="font-semibold">{job.availableJobs}</span>{" "}
                      job(s)
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 cursor-pointer">
                  <BiPlusCircle color="#BDC161" fontSize="19" />
                  <BiChevronRightCircle color="#298dac" fontSize="19" />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="my-5">
          <h3 className="text-sm font-medium mb-2">Skills legend</h3>
          <p className="inline-flex text-xs border-2 border-yellowish_green mb-2 py-1 px-2">
            Skills relevant for the Profile
          </p>
          <p className="inline-flex text-xs border-2 border-dashed border-yellowish_green py-1 px-2">
            Skills relevant for other reasons
          </p>
        </div>
      </div>
    </div>
  );
};

export default PossibleFuture;
