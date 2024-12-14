/* eslint-disable react/prop-types */
// import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ChatBot from "react-simple-chatbot";
import { useTranslation } from "react-i18next";

const DashboardLayout = ({ userType }) => {
  const { t } = useTranslation("common");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isChatBotOpen, setChatBotOpen] = useState(false);

  const steps = [
    {
      id: "0",
      message: t("Hey ! How can I help you ?"),
      trigger: "1",
    },
    {
      id: "1",
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message: `${t("Ok so your problem is ")}{previousValue}`,
      trigger: 3,
    },
    {
      id: "3",
      options: [
        { value: 1, label: t("take a tour") },
        { value: 2, label: t("watch a video") },
      ],
      end: true,
    },
  ];

  const handleChatBot = () => {
    setChatBotOpen((prev) => !prev);
  };

  return (
    // common dashboard layout
    <div>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar  */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          userType={userType}
          handleChatBot={handleChatBot}
        />

        {/* Content Area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto scrollbar overflow-x-hidden">
          {/* Header */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            userType={userType}
          />

          {/* Main Content*/}
          <main className="bg-violet-50">
            <div className="mx-auto max-w-screen p-3 md:p-8 min-h-screen">
              <Outlet />
              {isChatBotOpen && (
                <div className="absolute top-[50%] translate-y-[-50%] left-8 z-50 ">
                  <ChatBot steps={steps} />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
