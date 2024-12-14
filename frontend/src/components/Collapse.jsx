/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";
import { GrDocumentVerified } from "react-icons/gr";

const Collapse = forwardRef(
  ({ collapseText, document, className, children }, ref) => {
    const [isCollapseOpen, setCollapseOpen] = useState(false);

    const toggleCollapse = () => {
      setCollapseOpen((prev) => !prev);
    };
    return (
      <div className="relative w-full bg-gray-200 h-auto">
        <div
          className={`px-5 py-3 flex items-center justify-between ${className} cursor-pointer`}
          onClick={toggleCollapse}
        >
          <div className="flex items-center gap-x-6">
            <span>{collapseText}</span>
            {document && (
              <GrDocumentVerified
                className={`${
                  document === "under review"
                    ? "text-yellow-600"
                    : document === "verified"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              />
            )}
          </div>
          {!isCollapseOpen ? (
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
              ref={ref}
              id="collapse-icon"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          ) : (
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5l4-4 4 4"
              />
            </svg>
          )}
        </div>
        {isCollapseOpen && <div className="bg-white px-5 py-3">{children}</div>}
      </div>
    );
  }
);

export default Collapse;
