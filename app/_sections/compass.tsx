"use client";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const Compass: React.FC = () => {
  const options = {
    chart: {
      id: "jobCompass",
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      categories: [
        "Baker",
        "IT Manager",
        "Backend Developer",
        "React Developer",
        "Full Stack Developer",
        "HTML Programmer",
        "NodeJS Backend",
        "HTML Programmer",
      ],
    },
    stroke: {
      show: true,
      width: 7,
      colors: ["#73A83E", "#FFCE2E", "#FF0000"],
      dashArray: 0,
    },
    plotOptions: {
      radar: {
        size: 200,
        polygons: {
          strokeColor: "#FF0000",

          fill: {
            colors: ["#fff", "#C5C3C5", "#fff"],
          },
        },
      },
    },
    fill: {
      opacity: 0.1,
      colors: ["#fff"],
    },
  };

  const series = [
    {
      name: "",
      data: [30, 70, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "",
      data: [50, 70, 45, 100, 20, 60, 80, 10],
    },
  ];

  return (
    <div className="mt-14">
      <div className="row">
        <div className="mixed-chart" id="jobCompass">
          <Chart options={options} series={series} type="radar" />
        </div>
      </div>
    </div>
  );
};

export default Compass;
