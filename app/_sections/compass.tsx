"use client";
// import React, { useEffect } from "react";
// import Chart from "react-apexcharts";

const Compass: React.FC = () => {
  // const options = {
  //   chart: {
  //     id: "jobCompass",
  //     toolbar: {
  //       show: false,
  //     },
  //   },

  //   yaxis: [
  //     {
  //       seriesName: "s1",
  //     },
  //     {
  //       seriesName: "s2",
  //     },
  //     {
  //       seriesName: "s3",
  //     },
  //     {
  //       seriesName: "s4",
  //     },
  //     {
  //       seriesName: "s5",
  //     },
  //     {
  //       seriesName: "s6",
  //     },
  //     {
  //       seriesName: "s7",
  //     },
  //     {
  //       seriesName: "s8",
  //     },
  //   ],
  //   xaxis: {
  //     // categories: [
  //     //   "Doctor, Lawyer, President, Teacher, Cook, Fashion, Cashier (s1)",
  //     //   "Teacher, Cook, Fashion, Cashier (s2)",
  //     // ],
  //     categories: [
  //       "Baker",
  //       "IT Manager",
  //       "Backend Developer",
  //       "React Developer",
  //       "Full Stack Developer",
  //       "HTML Programmer",
  //       "NodeJS Backend",
  //       "HTML Programmer",
  //     ],
  //   },
  //   stroke: {
  //     show: true,
  //     width: 7,
  //     colors: ["#C5C3C5", "#C5C3C5", "#C5C3C5"],
  //     dashArray: 0,
  //   },
  //   plotOptions: {
  //     radar: {
  //       size: 200,
  //       polygons: {
  //         strokeColor: "#FF0000",

  //         fill: {
  //           colors: ["#fff", "#C5C3C5", "#fff"],
  //         },
  //       },
  //     },
  //   },
  //   fill: {
  //     // opacity: ,
  //     colors: ["#fff"],
  //   },
  // };

  // const series = [
  //   {
  //     name: "s1",
  //     data: [30, 70, 45, 50, 49, 60, 70, 91],
  //   },
  //   {
  //     name: "s2",
  //     data: [50, 70, 45, 100, 20, 60, 80, 10],
  //   },
  //   {
  //     name: "s3",
  //     data: [60, 20, 10, 10, 50, 70, 50, 70],
  //   },
  //   {
  //     name: "s4",
  //     data: [60, 80, 45, 80, 45, 100, 50, 70],
  //   },
  //   {
  //     name: "s5",
  //     data: [60, 80, 45, 50, 49, 45, 100, 20],
  //   },
  //   {
  //     name: "s6",
  //     data: [60, 80, 45, 100, 20, 10, 50, 70],
  //   },
  //   {
  //     name: "s7",
  //     data: [30, 70, 45, 50, 49, 60, 70, 91],
  //   },
  //   {
  //     name: "s8",
  //     data: [60, 80, 45, 50, 49, 45, 100, 20],
  //   },
  // ];

  return (
    <div className="relative mt-14 flex justify-center items-center">
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

      <div className="absolute">
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-[-71deg] absolute top-24 left-[-10rem]"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-[-124deg] absolute top-52 left-[-5rem]"></div>
        <div className="custom_clip_path w-36 h-56 bg-[#BFC3D1] transform rotate-[-20deg] absolute top-20 left-[-2rem]"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-[44deg] absolute top-4 left-28"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-[135deg] absolute top-52 left-24"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-90 absolute top-32 left-36"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1]"></div>
        <div className="custom_clip_path w-40 h-64 bg-[#BFC3D1] transform rotate-180"></div>
      </div>
      {/* <div className="row">
        <div className="mixed-chart" id="jobCompass">
          <Chart options={options} series={series} type="radar" />
        </div>
      </div> */}
    </div>
  );
};

export default Compass;
