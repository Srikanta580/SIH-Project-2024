/* eslint-disable react/prop-types */
import { useState } from "react";
const initialNotifications = [];

const calculateMetrics = (notifications) => {
  const totalNotifications = notifications.length;
  const unreadNotifications = notifications.filter(
    (notif) => notif.status === "Unread"
  ).length;
  const readNotifications = notifications.filter(
    (notif) => notif.status === "Read"
  ).length;

  return {
    totalNotifications,
    unreadNotifications,
    readNotifications,
  };
};

const Notification = ({ userType }) => {
  const [filter, setFilter] = useState({
    status: "",
    dateRange: "",
  });
  const [sort, setSort] = useState("date");
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNotification, setNewNotification] = useState({
    userType: "",
    message: "",
    date: "",
    status: "Unread",
  });

  const filteredNotifications = notifications
    .filter((notif) => notif.userType === userType)
    .filter((notif) => {
      return (
        (filter.status ? notif.status === filter.status : true) &&
        (filter.dateRange
          ? new Date(notif.date) >=
              new Date(filter.dateRange.split(" - ")[0]) &&
            new Date(notif.date) <= new Date(filter.dateRange.split(" - ")[1])
          : true)
      );
    })
    .sort((a, b) => {
      if (sort === "date") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return 0;
      }
    });

  const metrics = calculateMetrics(filteredNotifications);

  const handleCreateNotification = () => {
    setNotifications((prev) => [
      ...prev,
      { id: (prev.length + 1).toString(), ...newNotification },
    ]);
    setNewNotification({
      userType: "",
      message: "",
      date: "",
      status: "Unread",
    });
    setShowCreateForm(false);
  };

  return (
    <div className="">
      <h1 className="welcomeText">notifications</h1>
      <div className="p-6 mt-6 bg-white shadow-md rounded-lg">
        <div className="mb-6 flex flex-col md:flex-row items-start gap-x-6">
          <div className="relative flex-1">
            <form action="#" method="POST">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="fill-gray-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search notifications..."
                className="w-full bg-transparent pl-9 py-2 text-black border-b"
              />
            </form>
          </div>

          <div className="mt-4 md:mt-0">
            <label htmlFor="status-filter" className="font-medium text-sm mr-2">
              Filter by Status:
            </label>
            <select
              id="status-filter"
              value={filter.status}
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, status: e.target.value }))
              }
              className="border rounded p-2"
            >
              <option value="">All</option>
              <option value="Unread">Unread</option>
              <option value="Read">Read</option>
            </select>
          </div>

          <div className="mt-4 md:mt-0">
            <label
              htmlFor="date-range-filter"
              className="font-medium text-sm mr-2"
            >
              Filter by Date Range:
            </label>
            <input
              type="date"
              id="start-date"
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  dateRange: `${e.target.value} - ${
                    filter.dateRange ? filter.dateRange.split(" - ")[1] : ""
                  }`,
                }))
              }
              className="border rounded p-2 mr-2"
            />
            <input
              type="date"
              id="end-date"
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  dateRange: `${
                    filter.dateRange ? filter.dateRange.split(" - ")[0] : ""
                  } - ${e.target.value}`,
                }))
              }
              className="border rounded p-2"
            />
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <label htmlFor="sort" className="font-medium text-sm mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded p-2"
            >
              <option value="date">Date</option>
            </select>
          </div>

          {(userType === "admin" || userType === "govt") && (
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="btn-primary"
            >
              {showCreateForm ? "Cancel" : "Create Notification"}
            </button>
          )}
        </div>

        {showCreateForm && (
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">
              Create New Notification
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateNotification();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  value={newNotification.message}
                  onChange={(e) =>
                    setNewNotification({
                      ...newNotification,
                      message: e.target.value,
                    })
                  }
                  className="w-full border rounded p-2"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium mb-1"
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  value={newNotification.date}
                  onChange={(e) =>
                    setNewNotification({
                      ...newNotification,
                      date: e.target.value,
                    })
                  }
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium mb-1"
                >
                  Status:
                </label>
                <select
                  id="status"
                  value={newNotification.status}
                  onChange={(e) =>
                    setNewNotification({
                      ...newNotification,
                      status: e.target.value,
                    })
                  }
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="Unread">Unread</option>
                  <option value="Read">Read</option>
                </select>
              </div>
              <div>
                <button type="submit" className="btn-primary">
                  Create Notification
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-8 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Notification Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-white">
              <h3 className="text-lg font-semibold">Total Notifications</h3>
              <p className="text-2xl font-bold">{metrics.totalNotifications}</p>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <h3 className="text-lg font-semibold">Unread Notifications</h3>
              <p className="text-2xl font-bold">
                {metrics.unreadNotifications}
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-white">
              <h3 className="text-lg font-semibold">Read Notifications</h3>
              <p className="text-2xl font-bold">{metrics.readNotifications}</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 relative overflow-x-auto flex-1 scrollbar">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Notification ID
                </th>
                <th scope="col" className="px-3 py-3">
                  Message
                </th>
                <th scope="col" className="px-3 py-3">
                  Date
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredNotifications.map((notification) => (
                <tr key={notification.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-4">{notification.id}</td>
                  <td className="px-3 py-4">{notification.message}</td>
                  <td className="px-3 py-4">{notification.date}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                        notification.status === "Unread"
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {notification.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notification;
