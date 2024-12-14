import React from "react";

const PortalManagement = () => {
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="welcomeText mb-4">Portal Settings</h1>
        <p className="text-gray-700 mb-6">
          Configure portal-wide settings including user roles, notifications,
          and data retention policies.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Roles</h2>
          <p className="mb-4">
            Manage different user roles and permissions within the portal.
          </p>
          <button className="btn-primary mb-4">Manage Roles</button>

          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <p className="mb-4">
            Set up and customize notifications for users and administrators.
          </p>
          <button className="btn-primary mb-4">Configure Notifications</button>

          <h2 className="text-xl font-semibold mb-4">
            Data Retention Policies
          </h2>
          <p className="mb-4">
            Define policies for how long data is retained in the system.
          </p>
          <button className="btn-primary">Set Retention Policies</button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mb-4">Audit Logs</h1>
        <p className="text-gray-700 mb-6">
          Access detailed logs of system activities, user actions, and changes
          made within the dashboard for transparency and accountability.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">System Activities</h2>
          <p className="mb-4">
            View logs of all system activities, including system updates and
            maintenance.
          </p>
          <button className="btn-primary mb-4">View System Logs</button>

          <h2 className="text-xl font-semibold mb-4">User Actions</h2>
          <p className="mb-4">
            Access logs detailing user actions and interactions within the
            portal.
          </p>
          <button className="btn-primary mb-4">View User Actions</button>

          <h2 className="text-xl font-semibold mb-4">Change Logs</h2>
          <p className="mb-4">
            Review logs of changes made within the dashboard, including updates
            and deletions.
          </p>
          <button className="btn-primary">View Change Logs</button>
        </div>
      </div>
    </div>
  );
};

export default PortalManagement;
