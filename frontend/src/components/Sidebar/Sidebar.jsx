/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import AYUSH from "../../assets/AYUSH.png";
import {
  MdHelpOutline,
  MdOutlineAnalytics,
  MdOutlineDashboard,
  MdOutlineDocumentScanner,
  MdOutlineFormatAlignLeft,
} from "react-icons/md";
import { GrCompliance, GrNotification, GrStatusInfo } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { RiListSettingsLine } from "react-icons/ri";
import bot from "../../assets/bot2.png";

const menuText = `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-xl duration-300 ease-in-out`;

const Sidebar = ({ sidebarOpen, setSidebarOpen, userType, handleChatBot }) => {
  const { t } = useTranslation("common");
  const location = useLocation(); // Get the current location

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const userSidebar = [
    { menuItem: t("Dashboard"), link: "", icon: <MdOutlineDashboard /> },
    {
      menuItem: t("Application"),
      link: "applications",
      icon: <MdOutlineFormatAlignLeft />,
    },
    { menuItem: t("Status"), link: "status", icon: <GrStatusInfo /> },
    {
      menuItem: t("Documents"),
      link: "documents",
      icon: <MdOutlineDocumentScanner />,
    },
    { menuItem: t("Support"), link: "support", icon: <MdHelpOutline /> },
    {
      menuItem: t("Notifications"),
      link: "notifications",
      icon: <GrNotification />,
    },
    { menuItem: t("Profile"), link: "profile", icon: <LuUser2 /> },
  ];

  const govtSidebar = [
    { menuItem: "Dashboard", link: "", icon: <MdOutlineDashboard /> },
    {
      menuItem: "Applications",
      link: "applications",
      icon: <MdOutlineFormatAlignLeft />,
    },
    { menuItem: "Compliance", link: "compliances", icon: <GrCompliance /> },
    {
      menuItem: "Reports & Analytics",
      link: "reports-analytics",
      icon: <MdOutlineAnalytics />,
    },
    { menuItem: t("Support"), link: "support", icon: <MdHelpOutline /> },
    {
      menuItem: t("Notifications"),
      link: "notifications",
      icon: <GrNotification />,
    },
    { menuItem: t("Profile"), link: "profile", icon: <LuUser2 /> },
  ];

  const adminSidebar = [
    { menuItem: "Dashboard", link: "", icon: <MdOutlineDashboard /> },
    { menuItem: "Users", link: "users", icon: <PiUsersThree /> },
    {
      menuItem: "Applications",
      link: "applications",
      icon: <MdOutlineFormatAlignLeft />,
    },
    {
      menuItem: "Portal Setting",
      link: "portal-settings",
      icon: <RiListSettingsLine />,
    },
    {
      menuItem: "Reports & Analytics",
      link: "reports-analytics",
      icon: <MdOutlineAnalytics />,
    },
    {
      menuItem: t("Notifications"),
      link: "notifications",
      icon: <GrNotification />,
    },
    { menuItem: "Profile", link: "profile", icon: <LuUser2 /> },
  ];

  const renderSidebarMenu = (sidebarItems) => {
    return sidebarItems.map((item, index) => {
      // Generate the path for comparison
      const path =
        item.link === "" ? `/${userType}` : `/${userType}/${item.link}`;

      return (
        <li
          key={index}
          className={`${index === sidebarItems.length - 2 && "mt-10"} py-1 ${
            location.pathname === path
              ? "bg-violet-500/70 rounded-[0.250rem]"
              : ""
          }`}
        >
          <NavLink
            to={item.link}
            end
            className={({ isActive }) =>
              `${menuText} ${isActive ? "text-white" : ""}`
            }
          >
            {item.icon}
            {item.menuItem}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[18rem] flex-col overflow-y-hidden bg-white text-black duration-200 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } shadow-lg`}
    >
      <div className="flex items-center justify-between gap-2 px-16 py-4 lg:py-3">
        <NavLink to="/">
          <img src={AYUSH} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 lg:mt-9">
          <div>
            <ul className="mb-6 flex flex-col gap-5 px-4">
              {userType === "user" && renderSidebarMenu(userSidebar)}
              {userType === "govt" && renderSidebarMenu(govtSidebar)}
              {userType === "admin" && renderSidebarMenu(adminSidebar)}
            </ul>
          </div>
          {userType !== "admin" && (
            <div
              onClick={handleChatBot}
              className="mx-8 mt-28 px-5 py-3 flex justify-center w-fit gap-x-2 items-center bg-white shadow-md shadow-violet-500 rounded-xl rounded-tr-none cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1.5"
            >
              <img src={bot} alt="chatbot" className="size-12" />
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
