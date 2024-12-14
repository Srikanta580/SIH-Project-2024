import React, { useState } from "react";
import { Link } from "react-router-dom";

const cardContainer = `flex flex-col p-4 bg-white border border-gray-300 shadow-md rounded-md`;
const cardHeader = `text-xl font-semibold mb-4`;
const cardContent = `mb-4`;
const cardAction = `text-violet-700 hover:underline`;

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "User" },
    { id: 2, name: "Jane Smith", role: "Admin" },
    { id: 3, name: "John Doe", role: "User" },
    { id: 4, name: "Jane Smith", role: "Admin" },
    { id: 5, name: "John Doe", role: "User" },
    { id: 6, name: "Jane Smith", role: "Admin" },
    { id: 7, name: "John Doe", role: "User" },
    { id: 8, name: "Jane Smith", role: "Admin" },
  ]);

  const [applications, setApplications] = useState([
    { id: 1, name: "ABC Application", status: "Pending", metrics: "High" },
    { id: 2, name: "XYZ Application", status: "Reviewed", metrics: "Medium" },
    { id: 3, name: "ABC Application", status: "Pending", metrics: "High" },
    { id: 4, name: "XYZ Application", status: "Reviewed", metrics: "Medium" },
    { id: 5, name: "XYZ Application", status: "Reviewed", metrics: "Medium" },
  ]);

  const [portalSettings, setPortalSettings] = useState({
    theme: "Light",
    maintenanceMode: false,
  });
  const [logs, setLogs] = useState([
    {
      id: 1,
      message: "User login successful",
      timestamp: "2024-09-09T10:00:00Z",
    },
    {
      id: 2,
      message: "Application reviewed",
      timestamp: "2024-09-09T11:00:00Z",
    },
  ]);

  const handleRoleChange = (id, newRole) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const handleStatusChange = (id) => {
    setApplications(
      applications.map((app) =>
        app.id === id
          ? {
              ...app,
              status: app.status === "Pending" ? "Reviewed" : "Pending",
            }
          : app
      )
    );
  };

  const handleSettingsChange = (setting, value) => {
    setPortalSettings({ ...portalSettings, [setting]: value });
  };

  return (
    <div className="h-full">
      <h1 className="welcomeText">Admin Dashboard</h1>
      <p className="welcomeSubText">
        all systems are running smoothly ! You have{" "}
        <span className="text-violet-500">
          <Link>15 unread notifications !</Link>
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className={cardContainer}>
          <h2 className={cardHeader}>User Management</h2>
          <div className={cardContent}>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="py-2 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-medium">{user.name}</span>
                      <span className="ml-2 text-xs font-medium text-gray-500">
                        {user.role}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handleRoleChange(
                          user.id,
                          user.role === "User" ? "Admin" : "User"
                        )
                      }
                      className={cardAction}
                    >
                      {user.role === "User"
                        ? "Promote to Admin"
                        : "Demote to User"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link to="users" className={cardAction}>
            Manage Users
          </Link>
        </div>

        <div className={cardContainer}>
          <h2 className={cardHeader}>Application Management</h2>
          <div className={cardContent}>
            <ul>
              {applications.map((app) => (
                <li key={app.id} className="py-2 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-medium">{app.name}</span>
                      <span className="ml-2 text-xs font-medium text-gray-500">
                        Metrics: {app.metrics}
                      </span>
                      <span
                        className={`ml-2 text-xs font-medium ${
                          app.status === "Pending"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>
                    <button
                      onClick={() => handleStatusChange(app.id)}
                      className={cardAction}
                    >
                      Toggle Status
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link to="applications" className={cardAction}>
            View All Applications
          </Link>
        </div>

        <div className={cardContainer}>
          <h2 className={cardHeader}>Portal Settings & Logs</h2>
          <div className={cardContent}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Portal Settings</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Theme</label>
                <select
                  value={portalSettings.theme}
                  onChange={(e) =>
                    handleSettingsChange("theme", e.target.value)
                  }
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Maintenance Mode
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={portalSettings.maintenanceMode}
                    onChange={(e) =>
                      handleSettingsChange("maintenanceMode", e.target.checked)
                    }
                    className="sr-only"
                  />
                  <div className="w-10 h-6 bg-gray-200 rounded-full"></div>
                  <div
                    className="absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(${
                        portalSettings.maintenanceMode ? "1.5rem" : "0"
                      })`,
                      backgroundColor: portalSettings.maintenanceMode
                        ? "green"
                        : "gray",
                    }}
                  ></div>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Logs</h3>
              <ul>
                {logs.map((log) => (
                  <li key={log.id} className="py-2 border-b border-gray-200">
                    <div>
                      <p className="text-sm">{log.message}</p>
                      <span className="text-xs text-gray-500">
                        {new Date(log.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="portal-settings" className={cardAction}>
            View Settings & Logs
          </Link>
        </div>

        <div
          className={`${cardContainer} col-span-1 md:col-span-2 lg:col-span-3`}
        >
          <h2 className={cardHeader}>Reports</h2>
          <div className={cardContent}>
            <p>Charts and Graphs</p>
          </div>
          <Link to="reports-analytics" className={cardAction}>
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
