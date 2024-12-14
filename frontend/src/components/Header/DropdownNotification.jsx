import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GrNotification } from "react-icons/gr";
import { TiTick } from "react-icons/ti";

const notifications = [
  {
    heading: "Maintenance Request update",
    desc: "Application for new product development in Ayurveda.",
    time: "7h",
  },
  {
    heading: "Document update",
    desc: "Application for new product development in Ayurveda.",
    time: "4h",
  },
  {
    heading: "Report generated",
    desc: "Application for new product development in Ayurveda.",
    time: "45min",
  },
];

const DropdownNotification = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const [isNotificatonRead, setNotificationRead] = useState(false);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const markAsRead = () => {
    setNotificationRead(true);
  };

  //outside click
  const outsideClickHandler = (event) => {
    if (!dropdownRef.current || !triggerRef.current) return;
    if (
      dropdownRef.current.contains(event.target) ||
      triggerRef.current.contains(event.target)
    )
      return;

    setDropdownOpen((prev) => !prev);
  };

  // close on click outside
  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);
    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, []);

  return (
    <li className="relative">
      <button
        ref={triggerRef}
        onClick={() => {
          setNotifying(false);
          toggleDropdown();
        }}
        className="relative flex h-8 w-8 items-center justify-center rounded-full border-[0.5px]"
      >
        <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
        </span>
        <GrNotification className="text-2xl" />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className={`absolute z-[1000] mt-2.5 flex max-h-[30rem] w-80 flex-col rounded-sm bg-white p-2.5 shadow-lg border border-gray-300 sm:right-0 sm:w-96`}
        >
          <div className="px-4.5 py-3 flex justify-between items-center">
            <h5 className="text-lg font-medium">Notifications</h5>
            <button
              className={`${
                isNotificatonRead ? "text-gray-500" : "text-green-700"
              } flex items-center`}
              onClick={markAsRead}
            >
              <TiTick /> {isNotificatonRead ? "read" : "Mark as read"}
            </button>
          </div>

          {!isNotificatonRead && (
            <ul className="flex h-auto flex-col overflow-y-auto scrollbar">
              <span className="mb-2 py-1 text-lg text-gray-700 font-medium">
                Today
              </span>
              {notifications.map((notifi, index) => (
                <li key={index}>
                  <Link
                    className={`flex flex-col gap-2.5 border-t px-4 py-3 ${
                      index % 2 ? "" : "bg-gray-50"
                    }`}
                    to="#"
                  >
                    <p className="text-sm">
                      <span className="block text-black font-[400] text-lg">
                        {notifi.heading}
                      </span>{" "}
                      {notifi.desc}
                    </p>

                    <p className="text-xs">{notifi.time} ago</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="py-3 flex justify-start items-center border-t border-gray-300">
            <Link to="notifications" className="text-lg font-medium">
              View all notifications
            </Link>
          </div>
        </div>
      )}
    </li>
  );
};

export default DropdownNotification;
