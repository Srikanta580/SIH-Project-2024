/* eslint-disable react/prop-types */
// import React from "react";

import React from "react";

const ProgressTracker = ({ steps, className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`relative rounded-full size-14 text-xs flex justify-center items-center ${
              step.status === "done"
                ? "text-white bg-green-500"
                : "text-black bg-gray-300"
            }`}
          >
            {step.stepno}
            <span
              className={`absolute font-medium ${
                step.status === "done" ? "text-green-500" : "text-black"
              } -bottom-6`}
            >
              {step.details}
            </span>
          </div>
          {index !== steps.length - 1 && (
            <span
              className={`block w-[8rem] h-[0.250rem] ${
                steps[index + 1].status === "done"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressTracker;
