/* eslint-disable react/no-unknown-property */
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Guide from "../../components/Guide";

const Status = () => {
  const navigate = useNavigate();
  const applications = [
    {
      id: "01apl",
      startup_name: "Yoga King",
      status: "wait for review",
      action_required: "document upload",
      last_upload_date: "20/03/2024",
    },
  ];

  const alerts = [
    {
      id: 1,
      icon: "⚠️",
      message: "Your application status has been updated to 'Under Review'.",
      timestamp: "2024-09-08 10:15 AM",
      status: "info",
    },
    {
      id: 2,
      icon: "🔔",
      message: "A new document has been requested for verification.",
      timestamp: "2024-09-08 09:50 AM",
      status: "warning",
    },
    {
      id: 3,
      icon: "✅",
      message: "Your application has been approved successfully!",
      timestamp: "2024-09-07 04:30 PM",
      status: "success",
    },
    {
      id: 4,
      icon: "📅",
      message: "Your next review meeting is scheduled for tomorrow.",
      timestamp: "2024-09-07 03:00 PM",
      status: "reminder",
    },
    {
      id: 5,
      icon: "📤",
      message: "Your submitted document has been successfully uploaded.",
      timestamp: "2024-09-07 02:10 PM",
      status: "success",
    },
    {
      id: 6,
      icon: "⏳",
      message:
        "Application processing time has exceeded the expected duration.",
      timestamp: "2024-09-06 11:45 AM",
      status: "delay",
    },
    {
      id: 7,
      icon: "🛑",
      message:
        "One of your required documents is missing. Please upload it promptly.",
      timestamp: "2024-09-06 08:20 AM",
      status: "error",
    },
    {
      id: 8,
      icon: "🔄",
      message: "Your application is being re-evaluated due to a recent update.",
      timestamp: "2024-09-05 05:15 PM",
      status: "info",
    },
    {
      id: 9,
      icon: "💬",
      message: "You have a new message from the application review team.",
      timestamp: "2024-09-05 01:30 PM",
      status: "message",
    },
    {
      id: 10,
      icon: "📈",
      message: "Your application review score has been updated.",
      timestamp: "2024-09-04 09:00 AM",
      status: "update",
    },
  ];

  const statusTracker = [
    {
      stage: "Application Submitted",
      date: "2024-09-01",
      status: "completed",
      report: true,
    },
    {
      stage: "Review Session",
      date: "2024-09-05",
      status: "completed",
      report: true,
    },
    {
      stage: "Document Verification",
      date: "2024-09-08",
      status: "in-progress",
    },
    { stage: "Final Approval", date: "", status: "pending" },
  ];

  const actionLogs = [
    { action: "Application Submitted", date: "2024-09-01 09:00 AM" },
    { action: "Initial Review Completed", date: "2024-09-05 01:20 PM" },
    { action: "Requested Additional Documents", date: "2024-09-06 11:00 AM" },
    {
      action: "Document Uploaded: Business Certificate",
      date: "2024-09-07 10:45 AM",
    },
    { action: "Document Verification Started", date: "2024-09-08 09:00 AM" },
  ];

  const startTour = () => {
    console.log("Tour started");
  };

  const openDocs = () => {
    console.log("Doc is opened");
    navigate("../support");
  };

  return (
    <div>
      <h1 className="welcomeText">application status</h1>
      <p className="welcomeSubText">
        Overview of all applications with their current status.
      </p>
      <Guide onDocsClick={openDocs} onTourClick={startTour} />
      {/* alerts */}
      <div className="dashboard-box mt-6">
        <h1 className="text-2xl">ALERTS</h1>
        <div className="alerts-container scrollbar">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`animate-scroll-Y ${
                alert.status === "success"
                  ? "approval-alert"
                  : alert.status === "info"
                  ? "status-alert"
                  : "reminder-alert"
              }`}
            >
              <span className="alert-icon">{alert.icon}</span>
              <span className="alert-text">{alert.message}</span>
              <span className="alert-time">{alert.timestamp}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-Y {
          animation: scroll-Y 2s linear infinite; /* Slower scroll */
        }

        @keyframes scroll-Y {
          0% {
            transform: translateY(20%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>

      <div className="grid grid-cols-5 grid-rows-2 gap-8 mt-6">
        {/* application details */}
        <div className="gridBox col-span-3 row-span-2">
          <h1 className="text-2xl">APPLICATION LIST</h1>
          <div className="w-full relative overflow-x-auto flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-sm text-gray-500 uppercase border-b">
                <tr>
                  <th scope="col" className="px-2 py-3">
                    Application ID
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Startup Name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-2 py-3">
                    last upload date
                  </th>
                  <th scope="col" className="px-2 py-3">
                    actions required
                  </th>
                  <th scope="col" className="px-2 py-3">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((appl, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <td className="px-2 py-4">{appl.id}</td>
                    <td className="px-2 py-4">{appl.startup_name}</td>
                    <td className="px-2 py-4">
                      <Link
                        to="#"
                        className={
                          appl.status === "approved"
                            ? "greenSign"
                            : appl.status === "pending"
                            ? "yellowSign"
                            : "redSign"
                        }
                      >
                        {appl.status}
                      </Link>
                    </td>
                    <td className="px-2 py-4">{appl.last_upload_date}</td>
                    <td className="px-2 py-4">{appl.action_required}</td>
                    <td className="px-2 py-4 flex gap-x-3 text-violet-500 underline">
                      <Link to="#">view details</Link>
                      <Link to="#">withdraw</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* timeline */}
        <div className="gridBox col-span-2 row-span-1 max-h-[25rem]">
          <h1 className="text-2xl">timeline</h1>
          <ol className="relative border-s border-gray-200 px-3 py-2 w-full overflow-y-auto">
            {statusTracker.reverse().map((stage, index) => (
              <li
                key={index}
                className={`ms-6 ${index % 2 ? "" : "bg-gray-100"} px-4 py-2`}
              >
                <span
                  className={`absolute flex items-center justify-center size-4 rounded-full start-3 ring-8 ring-white`}
                >
                  <svg
                    className="w-2.5 h-2.5 text-violet-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-gray-900">
                  {stage.stage}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {stage.date}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {stage.status}
                </p>
                {stage.report && (
                  <button className="btn-primary px-3">download report</button>
                )}
              </li>
            ))}
          </ol>
        </div>
        {/* action logs */}
        <div className="dashboard-box col-span-2 row-span-1">
          <h1 className="text-2xl">action logs</h1>
          <ul className="w-full">
            {actionLogs.reverse().map((log, index) => (
              <li key={index} className="py-2 border-b border-gray-200">
                <div>
                  <p className="text-sm">{log.action}</p>
                  <span className="text-xs text-gray-500">
                    {new Date(log.date).toLocaleString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Status;
