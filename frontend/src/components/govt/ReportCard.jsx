/* eslint-disable react/prop-types */
// import React from "react";
import { GrDownload } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const icons = `btn-primary px-2 font-bold text-base cursor-pointer`;

const ReportCard = ({
  report_heading,
  report_type,
  startup_type,
  id,
  name,
  date,
}) => {
  return (
    <div className="dashboard-box w-full flex flex-col justify-between gap-y-2 capitalize">
      <h1 className="text-xl font-medium h-10 whitespace-nowrap">
        {report_heading}
      </h1>
      <div className="h-[7rem]">
        <span className="text-violet-500 font-medium underline">
          {report_type}
        </span>
        <span className="block bg-gray-200 px-2 py-1 rounded my-2 w-fit">
          {startup_type}
        </span>
        <p className="text-md uppercase">
          Application ID : <span className="font-medium">{id}</span>
        </p>
        <p className="text-md uppercase">
          Startup Name : <span className="font-medium">{name}</span>
        </p>
      </div>
      <div className="w-full flex items-center gap-x-5 border-t border-gray-200 py-3 cursor-pointer">
        <span className="flex-1 text-sm">
          <span className="font-medium">Date : </span>
          {date}
        </span>
        <button className={icons}>
          <IoEyeOutline />
        </button>
        <button className={icons}>
          <GrDownload />
        </button>
        <button className={icons}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
