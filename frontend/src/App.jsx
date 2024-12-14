// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//common layout
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./layouts/Profile.jsx";
import Support from "./layouts/Support.jsx";
import Notification from "./layouts/Notification.jsx";
import ApplicationList from "./layouts/ApplicationList.jsx";
//pages
import {
  UserApplicationList,
  UserDashboard,
  UserManagement,
  GovtDashboard,
  AdminDashboard,
  Documents,
  PortalManagement,
  ComplianceList,
  GovtReports,
  AdminReports,
  Status,
  Error,
} from "./pages/index.js";
import NewRegistration from "./pages/user/NewRegistration.jsx";
import HomeContent from "./pages/HomeContent.jsx";
import About from "./pages/About.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import Resources from "./pages/Resources.jsx";
import Funding from "./pages/Funding.jsx";
import Events from "./pages/Events.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="resources" element={<Resources />} />
          <Route path="funding" element={<Funding />} />
          <Route path="events" element={<Events />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route exact path="/new-registration" element={<NewRegistration />} />
        <Route exact path="/user" element={<DashboardLayout userType="user" />}>
          <Route index element={<UserDashboard />} />
          <Route path="applications" element={<UserApplicationList />} />
          <Route path="documents" element={<Documents />} />
          <Route path="status" element={<Status />} />
          <Route path="support" element={<Support />} />
          <Route
            path="notifications"
            element={<Notification userType="user" />}
          />
          <Route path="profile" element={<Profile userType="user" />} />
        </Route>
        <Route exact path="/govt" element={<DashboardLayout userType="govt" />}>
          <Route index element={<GovtDashboard />} />
          <Route
            path="applications"
            element={<ApplicationList userType="govt" />}
          />
          <Route path="compliances" element={<ComplianceList />} />
          <Route path="reports-analytics" element={<GovtReports />} />
          <Route path="support" element={<Support />} />
          <Route
            path="notifications"
            element={<Notification userType="govt" />}
          />
          <Route path="profile" element={<Profile userType="govt" />} />
        </Route>
        <Route
          exact
          path="/admin"
          element={<DashboardLayout userType="admin" />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route
            path="applications"
            element={<ApplicationList userType="admin" />}
          />
          <Route path="portal-settings" element={<PortalManagement />} />
          <Route path="reports-analytics" element={<AdminReports />} />
          <Route
            path="notifications"
            element={<Notification userType="admin" />}
          />
          <Route path="profile" element={<Profile userType="admin" />} />
        </Route>
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
