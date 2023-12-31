"use client";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiChevronRightCircle } from "react-icons/bi";

const Compass: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* circles */}
      <div className="flex justify-center items-center border-[30px] border-[#BFC3D1] rounded-full w-[620px] h-[620px]">
        <div className="border-[11px] border-[#989CAB] rounded-full w-[570px] h-[570px]">
          <div className=" border-[15px] border-[#F7F6F7] rounded-full w-[550px] h-[550px] flex justify-center items-center">
            <div className=" border-[27px] border-[#E0E1E4] rounded-full w-[380px] h-[380px] flex justify-center items-center">
              <div className=" border-[9px] border-[#72A840] rounded-full w-[120px] h-[120px] flex justify-center items-center z-10">
                <div className=" border-[30px] border-[#DDDDE0] rounded-full w-[102px] h-[102px] flex justify-center items-center">
                  <div className=" border-[30px] border-[#C5C3C5] rounded-full w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* green line */}
      <div className="absolute top-[6.2rem] left-[15rem] w-1 h-56 bg-[#72A840] z-20 transform rotate-[-31deg]"></div>
      {/* triangles */}
      <div className="absolute">
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-[-71deg] absolute top-24 left-[-10rem]"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#75A741] transform rotate-[-124deg] absolute top-52 left-[-5rem]"></div>
        <div className="custom_clip_path w-36 h-56 bg-[#BFC3D1] transform rotate-[-20deg] absolute top-20 left-[-2rem]"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#75A741] transform rotate-[44deg] absolute top-4 left-28"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-[135deg] absolute top-52 left-24"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BEC2D1] transform rotate-90 absolute top-32 left-36"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#989CAB]"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-180"></div>
      </div>

      {/* profiles */}
      <div className="absolute top-60 z-50">
        {/* yellow background */}
        <div className="absolute top-[-9rem] left-[-10rem]">
          <span className="absolute top-[-8px] right-0 bg-[#B7911D] text-[0.4rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            43
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#FFCF2E] text-xs text-black py-2 pr-6 pl-3 rounded-2xl font-bold whitespace-nowrap">
            Baker
          </span>
          <span className="absolute bottom-[-8px] left-0">
            <BiChevronRightCircle color="#298dac" fontSize="19" />
          </span>
        </div>
        <div className="absolute top-[-6rem] left-36">
          <span className="absolute top-[-8px] right-0 bg-[#B7911D] text-[0.5rem] text-white font-bold w-4 h-4 flex justify-center items-center rounded-full">
            3
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#FFCF2E] text-xs text-black py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            IT Manager
          </span>
          <span className="absolute bottom-[-8px] left-0">
            <BiChevronRightCircle color="#298dac" fontSize="19" />
          </span>
        </div>
        {/* black box */}
        <div className="absolute -top-44 left-40 transform rotate-[33deg] ">
          <div className="w-44 h-8 bg-gradient-to-r from-black via-gray-600 to-black rounded-t-2xl rounded-b-md flex items-center justify-between border-b p-2">
            <p className="text-[0.6rem] text-white font-semibold flex gap-1">
              <span className="text-black bg-gray-200 px-1">?</span> IT Mgr
              (Apple, Brussels){" "}
            </p>
            <BiChevronRightCircle color="#298dac" fontSize="15" />
          </div>
          <div className="w-44 h-8 bg-gradient-to-r from-black via-gray-600 to-black rounded-t-md rounded-b-2xl flex items-center justify-between text-right p-2">
            <p className="text-[0.6rem] text-white font-semibold flex gap-1">
              <span className="text-black bg-gray-200  px-1">?</span> IT Mgr
              (IBM Brugge){" "}
            </p>
            <BiChevronRightCircle color="#298dac" fontSize="15" />
          </div>
        </div>
        {/* curved line */}
        <div className="absolute top-[-12.4rem] right-48 -mt-1 border-t-2 border-l-2 border-gray-800 border-dashed rounded-full w-12 h-32 transform rotate-[-88deg] origin-center"></div>
        {/* colored oval shapes */}
        <p className="text-[0.6rem] absolute -top-64  right-80 font-bold">
          <span className="whitespace-nowrap"> Not Required -</span>
          <span className="">Yet Acquired</span>
        </p>
        <p className="text-[0.6rem] absolute -top-64   right-32   font-bold">
          Required - <span className="whitespace-nowrap ">To Acquire</span>
        </p>
        <p className="text-[0.6rem] absolute -top-[11.5rem] right-52 font-bold">
          <span className="whitespace-nowrap">Required &</span> Acquired
        </p>
        <div className="absolute -top-[16.5rem] right-60 transform rotate-[-25deg] ">
          <span className="bg-[#049CF7] w-20 h-14 absolute right-8  custom-border-radius"></span>
          <span className="bg-[#5CD235] w-16 h-12 transform rotate-[6deg] absolute right-0 top-5 custom-round-border-radius z-10 border border-gray-600"></span>
          <span className="bg-[#EC7167] w-20 h-14 absolute -left-10 top-8 custom-border-radius"></span>
        </div>
        {/* blue background */}
        <div className="absolute top-14 left-[-16rem]">
          <span className="absolute top-[-8px] right-0 bg-[#08B0E5] text-[0.3rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            99+
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#2ECCFC] text-xs text-black py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            Node.js Backend
          </span>
        </div>
        <div className="absolute top-64 left-36">
          <span className="absolute top-[-8px] right-0 bg-[#08B0E5] text-[0.4rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            20
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#2ECCFC] text-xs text-black py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            React Developer
          </span>
        </div>
        <div className="absolute top-24 left-40">
          <span className="absolute top-[-8px] right-0 bg-[#08B0E5] text-[0.4rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            20
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#2ECCFC] text-xs text-black py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            Backend Developer
          </span>
        </div>
        <div className="absolute top-80 left-[-5rem]">
          <span className="absolute top-[-8px] right-0 bg-[#08B0E5] text-[0.4rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            15
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#2ECCFC] text-xs text-black py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            Full Stack Developer
          </span>
        </div>
        <div className="absolute top-[16.5rem] right-32">
          <span className="absolute top-[-8px] right-0 bg-[#08B0E5] text-[0.4rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            10
          </span>
          <span className="absolute bottom-[-8px] right-0">
            <AiOutlineMinusCircle color="#C83327" />
          </span>
          <span className="bg-[#2ECCFC] text-xs text-black py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            HTML Programmer
          </span>
        </div>
        {/* green background */}
        <div className="absolute top-[11rem] left-[-4rem]">
          <span className="absolute top-[-8px] right-0 bg-[#5A743E] text-[0.4rem] text-white w-4 h-4 flex justify-center items-center  font-bold p-1 rounded-full">
            20
          </span>
          <span className="bg-[#75A741] text-xs text-white py-2 px-4 rounded-2xl font-bold whitespace-nowrap">
            Web Developer
          </span>
        </div>
        {/* normal border */}
        <div className="absolute top-[-5rem] left-[-9rem]">
          <span className="absolute top-[-14px] right-0  text-[0.6rem] text-black font-bold ">
            76(%)
          </span>
          <span className="border border-[#75A741] bg-white text-[#75A741] text-xs py-1 px-2 rounded-md font-bold whitespace-nowrap">
            Baking cakes
          </span>
        </div>
        <div className="absolute top-5 left-[4rem]">
          <span className="absolute top-[-14px] right-0 text-[0.6rem] text-black font-bold ">
            46(%)
          </span>
          <span className="border border-[#75A741] bg-white text-[#75A741] text-xs py-1 px-2 rounded-md font-bold whitespace-nowrap">
            C++
          </span>
        </div>
        <div className="absolute top-[-2rem] left-28">
          <span className="absolute top-[-14px] right-0 text-[0.6rem] text-black font-bold ">
            20(%)
          </span>
          <span className="border border-[#75A741] bg-white text-[#75A741] text-xs py-1 px-2 rounded-md font-bold whitespace-nowrap">
            UML
          </span>
        </div>
        {/* Dotted border */}
        <div className="absolute top-0 left-[-5rem]">
          <span className="absolute top-[-14px] right-0 text-[0.6rem] text-black font-bold ">
            43(%)
          </span>
          <span className="border border-[#75A741] border-dashed bg-white text-[#75A741] text-xs py-1 px-2 rounded-md font-bold whitespace-nowrap">
            French
          </span>
        </div>
      </div>
    </div>
  );
};

export default Compass;
