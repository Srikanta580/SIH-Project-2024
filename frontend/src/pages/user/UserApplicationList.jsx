// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Collapse from "../../components/Collapse";
import ProgressTracker from "../../components/ProgressTracker";
import formData from "../../../public/data/formData.json";
import Guide from "../../components/Guide";

import { useRef, useState } from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useTranslation } from "react-i18next";
import useTour from "../../hooks/useTour";
import StartupRegistrationForm from "../../components/form/StartupRegistrationForm";
import VideoTutorial from "../../components/VideoTutorial";

const UserApplicationList = () => {
  const navigate = useNavigate();
  const collapseRef = useRef(null);
  const { t } = useTranslation("dashboardTranslation");

  const [enabled, setEnabled, handleExit] = useTour("applicationPageTour");
  const [isModalOpen, setModelOpen] = useState(false);
  const [isVideoStarted, setVideoStarted] = useState(false);

  const applications = [
    {
      id: "01apl",
      startup_name: "Innovate Health",
      sub_date: "12/03/2024",
      status: "pending",
    },
  ];

  const notifications = [
    {
      text:
        "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      text:
        "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      text:
        "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
    {
      text:
        "Edit your information in a swipe Sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim.",
      date: "12 May, 2025",
    },
  ];

  const steps = [
    { stepno: t("Step 1"), details: t("drafted"), status: t("done") },
    { stepno: t("Step 2"), details: t("submitted"), status: t("done") },
    { stepno: t("Step 3"), details: t("reviewed"), status: "" },
    { stepno: t("Step 4"), details: t("approved"), status: "" },
  ];

  const stepsForTour = [
    {
      element: "#newApplication",
      intro: t("By clicking here you can start new application"),
      position: "left",
      tooltipClass: "customTourTooltip",
    },
    {
      element: "#action",
      intro: t("here you can view, edit or withdraw you application"),
      position: "top",
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".collapseClass",
      intro: t("here you can check details of your filled form"),
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".gridBoxLink",
      intro: t(
        "Here you can check the current progress of application in details"
      ),
      position: "left",
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".documents",
      intro: t("Check if any documents need any action"),
      position: "left",
      tooltipClass: "customTourTooltip",
    },
  ];

  // Step state and initialization
  // const [enabled, setEnabled] = useState(false);
  // const [isTourCompleted, setIsTourCompleted] = useState(false);

  // useEffect(() => {
  //   const tourCompleted = localStorage.getItem("tourCompleted");

  //   if (!tourCompleted) {
  //     setEnabled(true);
  //   } else {
  //     setIsTourCompleted(true);
  //   }
  // }, []);

  // // Handle the completion of the tour
  // const handleExit = () => {
  //   localStorage.setItem("tourCompleted", "true"); // Set the flag in localStorage
  //   setEnabled(false); // Disable the steps after completion
  //   setIsTourCompleted(true); // Update state to show the tour has been completed
  // };

  //start video tutorial
  const startVideo = () => {
    setVideoStarted(!isVideoStarted);
  };
  //start tour
  const startTour = () => {
    setEnabled(true);
  };
  //start video tutorial
  const openDocs = () => {
    console.log("docs opened");

    navigate("../support");
  };

  return (
    <>
      <div className="h-full">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="welcomeText">{t("my applications")}</h1>
            <p className="welcomeSubText">
              {t("all applications and their details")}
            </p>
          </div>
          <button
            onClick={() => {
              setModelOpen((prev) => !prev);
            }}
            id="newApplication"
            className="btn-primary"
          >
            {t("new application")}
          </button>
        </div>
        <Guide
          onDocsClick={openDocs}
          onTourClick={startTour}
          onVideoClick={startVideo}
        />
        <div className="mt-6 z-10">
          {/* application list */}
          <div className="dashboard-box h-auto">
            <h1 className="text-2xl">{t("APPLICATION LIST")}</h1>
            <div className="w-full relative overflow-x-auto flex-1">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-sm text-gray-500 uppercase border-b">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      {t("Application ID")}
                    </th>
                    <th scope="col" className="px-3 py-3">
                      {t("Startup name")}
                    </th>
                    <th scope="col" className="px-3 py-3">
                      {t("Submission date")}
                    </th>
                    <th scope="col" className="px-3 py-3">
                      {t("Status")}
                    </th>
                    <th scope="col" className="px-3 py-3">
                      {t("Actions")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((appl, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <td className="px-3 py-4">{appl.id}</td>
                      <td className="px-3 py-4">{appl.startup_name}</td>
                      <td className="px-3 py-4">{appl.sub_date}</td>
                      <td className="px-3 py-4">
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
                      <td
                        id="action"
                        className="px-3 py-4 flex gap-x-3 text-violet-500 underline"
                      >
                        <Link to="#">Edit</Link>
                        <Link to="#">view</Link>
                        <Link to="#">withdraw</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* details*/}
          <div className="grid grid-cols-2 grid-rows-5 gap-8 h-[30rem] mt-8">
            <div className="dashboard-box col-span-1 row-span-5">
              <h1 className="text-2xl">{t("DETAILS")}</h1>
              {/* details collapse */}
              <div className="w-full overflow-y-scroll scrollbar">
                <div className="flex justify-start items-center gap-x-5 text-lg uppercase border-b border-gray-200">
                  <span className="capitalize font-semibold">
                    application ID :{" "}
                  </span>
                  {applications[0].id}
                  <span className="capitalize font-semibold">
                    startup name :{" "}
                  </span>
                  {applications[0].startup_name}
                </div>
                <div className="">
                  {formData.map((form, index) => (
                    <Collapse
                      ref={collapseRef}
                      key={index}
                      collapseText={form.data[0].heading}
                      className="collapseClass mt-3"
                      document={form.document}
                    >
                      {form.data.map((field, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center border-b border-violet-200 px-4 py-2`}
                        >
                          <span className="font-medium">{field.label}</span>
                          <span className="normal-case">{field.value}</span>
                        </div>
                      ))}
                    </Collapse>
                  ))}
                </div>
              </div>
            </div>
            {/* application progress overview */}
            <div className="dashboard-box w-full row-span-2">
              <h1 className="text-2xl">{t("progress overview")}</h1>
              <ProgressTracker steps={steps} />
              <Link to="../status" className="gridBoxLink self-end">
                see details
              </Link>
            </div>
            {/* documents upload status */}
            <div className="dashboard-box w-full row-span-3">
              <h1 className="text-2xl">{t("document status")}</h1>
              <div className="w-full">
                <div className="py-2 flex justify-between items-center border-b border-gray-200">
                  <p>
                    <span className="font-medium">Business details file</span>{" "}
                    missing
                  </p>
                  <label
                    htmlFor="document"
                    className="documents bg-gray-200 hover:bg-gray-200/70 cursor-pointer rounded border border-black px-1 py-[0.15rem]"
                  >
                    Upload
                  </label>
                  <input id="document" type="file" className="hidden" />
                </div>
              </div>
            </div>
          </div>
          {/* messages and reviews */}
          <div className="dashboard-box mt-8">
            <h1 className="text-2xl">{t("Messages and reviews")}</h1>
            <ul className="flex w-full h-auto flex-col overflow-y-auto">
              {notifications.map((msg, index) => (
                <li key={index}>
                  <Link
                    className="flex flex-col gap-2.5 border-t border-stroke px-4 py-3 hover:bg-gray-100"
                    to="#"
                  >
                    <p className="text-lg capitalize">{msg.text}</p>

                    <p className="text-xs">{msg.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Intro.js Steps Component */}
        <Steps
          enabled={enabled}
          steps={stepsForTour}
          initialStep={0}
          onExit={handleExit}
          options={{
            nextLabel: t("Next"),
            prevLabel: t("Back"),
            skipLabel: t("Skip"),
            doneLabel: t("Finish"),
            showBullets: true,
          }}
        />
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <StartupRegistrationForm
              onModalClose={() => setModelOpen((prev) => !prev)}
            />
          </div>
        )}
        {isVideoStarted && <VideoTutorial onClose={startVideo} />}
      </div>
    </>
  );
};

export default UserApplicationList;
