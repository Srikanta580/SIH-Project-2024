/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { GrCompliance, GrDocumentPerformance } from "react-icons/gr";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import ReportCard from "../../components/govt/ReportCard";
import {
  SectorGrowthPatternChart,
  SectorPerformanceChart,
} from "../../components/charts/GovtChart";

const analytics = [
  {
    id: "totalApplications",
    category: "Application Metrics",
    metricName: "Total Applications",
    description: "The total count of all applications submitted on the portal.",
    dataType: "number",
    unit: "50",
  },
  {
    id: "approvalRates",
    category: "Application Metrics",
    metricName: "Approval Rates",
    description:
      "Percentage of applications that have been approved out of the total submitted.",
    dataType: "percentage",
    unit: "35%",
  },
  {
    id: "processingTimes",
    category: "Application Metrics",
    metricName: "Processing Times",
    description:
      "Average time taken to process an application from submission to approval or rejection.",
    dataType: "time",
    unit: "10 days",
  },
  {
    id: "compliancePercentage",
    category: "Compliance Metrics",
    metricName: "Compliance Meet",
    description:
      "The percentage of startups that meet the compliance requirements set by AYUSH regulations.",
    dataType: "percentage",
    unit: "25%",
  },
  {
    id: "sectorPerformance",
    category: "Sector Insights",
    metricName: "Performance",
    description:
      "Detailed performance metrics categorized by AYUSH sectors like Ayurveda, Yoga, Naturopathy, etc.",
    dataType: "metrics",
    unit: <SectorPerformanceChart />,
  },
  {
    id: "sectorGrowthPatterns",
    category: "Sector Insights",
    metricName: "Growth Patterns",
    description:
      "Analysis of growth patterns in each AYUSH sector over time, highlighting key drivers of growth.",
    dataType: "growth",
    unit: <SectorGrowthPatternChart />,
  },
];

const analytics_category = [
  {
    id: "sector",
    name: "sector",
    options: ["ayurveda", "yoga", "unnai", "siddha", "homeopathy"],
  },
  {
    id: "status",
    name: "status",
    options: ["approved", "rejected", "pending", "fake"],
  },
  {
    id: "region",
    name: "region",
    options: [
      "delhi",
      "tamilnadu",
      "telengana",
      "kerala",
      "uttrakhand",
      "himachal",
      "west bengal",
    ],
  },
];

const report_category = [
  {
    icon: <HiOutlineDocumentCheck />,
    title: "System Performance Report",
    count: 10,
  },
  {
    icon: <GrCompliance />,
    title: "User Management Report",
    count: 5,
  },
  {
    icon: <GrDocumentPerformance />,
    title: "Compliance and Audit Report",
    count: 9,
  },
  {
    icon: <FaChartLine />,
    title: "Custom report",
    count: 0,
  },
];

const reports = [
  {
    id: "02apl",
    heading: "Compliance Report for Herbal Life",
    name: "Herbal Life",
    startup_type: "yoga",
    report_type: "compliance report",
    date: "13/05/2024",
  },
  {
    id: "04apl",
    heading: "Application Status Report for Vedanta Health",
    name: "Vedanta Health",
    startup_type: "siddha",
    report_type: "application status report",
    date: "20/07/2024",
  },
  {
    id: "03apl",
    heading: "Financial Status Report for Natural Cure",
    name: "Natural Cure",
    startup_type: "unani",
    report_type: "financial status report",
    date: "15/06/2024",
  },
  {
    id: "06apl",
    heading: "Financial Status Report for YogaFlex",
    name: "YogaFlex",
    startup_type: "yoga",
    report_type: "financial status report",
    date: "22/09/2024",
  },
  {
    id: "05apl",
    heading: "Compliance Report for AyurMedic",
    name: "AyurMedic",
    startup_type: "ayurveda",
    report_type: "compliance report",
    date: "10/08/2024",
  },
  {
    id: "08apl",
    heading: "Compliance Report for Pure Wellness",
    name: "Pure Wellness",
    startup_type: "homeopathy",
    report_type: "compliance report",
    date: "12/11/2024",
  },
  {
    id: "07apl",
    heading: "Application Status Report for HealthRoots",
    name: "HealthRoots",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "05/10/2024",
  },
  {
    id: "09apl",
    heading: "Financial Status Report for Holistic Care",
    name: "Holistic Care",
    startup_type: "ayurveda",
    report_type: "financial status report",
    date: "18/11/2024",
  },
  {
    id: "11apl",
    heading: "Compliance Report for VedaWell",
    name: "VedaWell",
    startup_type: "siddha",
    report_type: "compliance report",
    date: "30/12/2024",
  },
  {
    id: "10apl",
    heading: "Application Status Report for Green Remedies",
    name: "Green Remedies",
    startup_type: "unani",
    report_type: "application status report",
    date: "23/12/2024",
  },
];

// const reports = [
//   {
//     id: "01sys",
//     heading: "System Performance Report",
//     name: "Startup A",
//     startup_type: "ayurveda",
//     report_type: "system performance",
//     date: "12/04/2024",
//     overview: {
//       summary: "Monitored system performance for the last 30 days.",
//       dateRange: "01/04/2024 - 12/04/2024",
//       metrics: "CPU, Memory, Error Rate",
//       includeErrorLogs: true,
//     },
//   },
//   {
//     id: "02usr",
//     heading: "User Management Report",
//     name: "Startup B",
//     startup_type: "yoga",
//     report_type: "user management",
//     date: "15/05/2024",
//     overview: {
//       summary: "Overview of user activity and roles.",
//       userRoles: "Admin, Editor",
//       userStatus: "Active",
//     },
//   },
//   {
//     id: "03aud",
//     heading: "Compliance and Audit Report",
//     name: "Startup C",
//     startup_type: "homeopathy",
//     report_type: "compliance and audit",
//     date: "18/06/2024",
//     overview: {
//       summary: "Reviewed financial and security compliance.",
//       auditType: "Financial Audit",
//       dateRange: "01/06/2024 - 18/06/2024",
//       includeChanges: "Policy Update, Security Enhancements",
//     },
//   },
//   {
//     id: "04sys",
//     heading: "System Performance Report",
//     name: "Startup D",
//     startup_type: "unani",
//     report_type: "system performance",
//     date: "20/07/2024",
//     overview: {
//       summary: "System performance metrics from last 10 days.",
//       dateRange: "10/07/2024 - 20/07/2024",
//       metrics: "Response Time, Throughput",
//       includeErrorLogs: false,
//     },
//   },
//   {
//     id: "05usr",
//     heading: "User Management Report",
//     name: "Startup E",
//     startup_type: "siddha",
//     report_type: "user management",
//     date: "25/08/2024",
//     overview: {
//       summary: "Inactive users and their roles.",
//       userRoles: "User, Viewer",
//       userStatus: "Inactive",
//     },
//   },
//   {
//     id: "06aud",
//     heading: "Compliance and Audit Report",
//     name: "Startup F",
//     startup_type: "ayurveda",
//     report_type: "compliance and audit",
//     date: "30/09/2024",
//     overview: {
//       summary: "Security compliance audit completed.",
//       auditType: "Security Audit",
//       dateRange: "15/09/2024 - 30/09/2024",
//       includeChanges: "Encryption Protocol, Access Control Update",
//     },
//   },
//   {
//     id: "07sys",
//     heading: "System Performance Report",
//     name: "Startup G",
//     startup_type: "yoga",
//     report_type: "system performance",
//     date: "05/10/2024",
//     overview: {
//       summary: "Reviewed disk I/O and network latency.",
//       dateRange: "01/10/2024 - 05/10/2024",
//       metrics: "Disk I/O, Network Latency",
//       includeErrorLogs: true,
//     },
//   },
// ];

const AdminReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportType, setReportType] = useState(null);
  const [newReport, setNewReport] = useState({
    title: "",
    date: "",
    startDate: "",
    endDate: "",
    metrics: [],
    userRole: [],
    userStatus: "Active",
    auditType: "Data Integrity",
    includeChanges: [],
    exportFormat: "PDF",
    includeErrorLogs: false,
  });

  const userRoleOptions = ["Startups", "Officials", "Admins"];
  const userStatusOptions = ["Active", "Inactive"];
  const auditTypeOptions = ["Data Integrity", "Compliance"];
  const metricsOptions = ["Uptime", "Response Time"];
  const includeChangesOptions = ["User Changes", "Startup Modifications"];
  const exportFormatOptions = ["PDF", "Excel"];

  const handleCreateReport = (e) => {
    e.preventDefault();
    console.log(newReport);
    setIsModalOpen(false);
    setNewReport({
      title: "",
      date: "",
      startDate: "",
      endDate: "",
      metrics: [],
      userRole: [],
      userStatus: "Active",
      auditType: "Data Integrity",
      includeChanges: [],
      exportFormat: "PDF",
      includeErrorLogs: false,
    });
  };

  const openModal = (type) => {
    setReportType(type);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="welcomeText">Analytics</h1>
      <div className="mt-4">
        <form className="flex justify-start items-center gap-x-6">
          {analytics_category.map((cat, index) => (
            <div key={index}>
              <label
                htmlFor={cat.id}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select {cat.name}
              </label>
              <select
                id={cat.id}
                className="px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:violet-blue-500 focus:border-violet-500 block w-full p-2.5"
              >
                <option selected>Choose a {cat.name}</option>
                {cat.options.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </form>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {analytics.map((analy, index) => (
            <div
              className={`gridBox ${index >= analytics.length - 2 &&
                "col-span-2"}`}
              key={index}
            >
              <h1 className="text-lg font-semibold">{analy.metricName}</h1>
              <span className="text-3xl w-full">{analy.unit}</span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="welcomeText mt-5">Reports</h1>
      <div className="grid grid-cols-4 gap-8 mt-6">
        {report_category.map((cat, index) => (
          <div className="gridBox" key={index}>
            <div className="w-full flex justify-between items-center bg-yellow-400/70 px-4 py-3">
              <span className="text-[4.5rem]">{cat.icon}</span>
              <span className="text-2xl">{cat.count}</span>
            </div>
            <div className="w-full text-sm font-semibold flex justify-between items-center">
              {cat.title}
              <button
                className="btn-primary px-3"
                onClick={() => openModal(cat.title)}
              >
                Create
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Creating Reports */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-xl font-bold">Create {reportType}</h2>
            <form onSubmit={handleCreateReport}>
              <div className="mb-4">
                <label className="block mb-1">Report Title:</label>
                <input
                  type="text"
                  value={newReport.title}
                  onChange={(e) =>
                    setNewReport({ ...newReport, title: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Report Date:</label>
                <input
                  type="date"
                  value={newReport.date}
                  onChange={(e) =>
                    setNewReport({ ...newReport, date: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {reportType === "System Performance Report" && (
                <>
                  <div className="mb-4">
                    <label className="block mb-1">Date Range:</label>
                    <div className="flex space-x-4">
                      <input
                        type="date"
                        value={newReport.startDate}
                        onChange={(e) =>
                          setNewReport({
                            ...newReport,
                            startDate: e.target.value,
                          })
                        }
                        className="border border-gray-300 p-2 rounded"
                        required
                      />
                      <input
                        type="date"
                        value={newReport.endDate}
                        onChange={(e) =>
                          setNewReport({
                            ...newReport,
                            endDate: e.target.value,
                          })
                        }
                        className="border border-gray-300 p-2 rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Performance Metrics:</label>
                    <select
                      multiple
                      value={newReport.metrics}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setNewReport({
                          ...newReport,
                          metrics: selectedOptions,
                        });
                      }}
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {metricsOptions.map((metric, index) => (
                        <option key={index} value={metric}>
                          {metric}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={newReport.includeErrorLogs}
                        onChange={(e) =>
                          setNewReport({
                            ...newReport,
                            includeErrorLogs: e.target.checked,
                          })
                        }
                      />
                      Include Error Logs
                    </label>
                  </div>
                </>
              )}

              {reportType === "User Management Report" && (
                <>
                  <div className="mb-4">
                    <label className="block mb-1">User Role:</label>
                    <select
                      multiple
                      value={newReport.userRole}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setNewReport({
                          ...newReport,
                          userRole: selectedOptions,
                        });
                      }}
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {userRoleOptions.map((role, index) => (
                        <option key={index} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">User Status:</label>
                    <select
                      value={newReport.userStatus}
                      onChange={(e) =>
                        setNewReport({
                          ...newReport,
                          userStatus: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {userStatusOptions.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {reportType === "Compliance and Audit Report" && (
                <>
                  <div className="mb-4">
                    <label className="block mb-1">Audit Type:</label>
                    <select
                      value={newReport.auditType}
                      onChange={(e) =>
                        setNewReport({
                          ...newReport,
                          auditType: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {auditTypeOptions.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Date Range:</label>
                    <div className="flex space-x-4">
                      <input
                        type="date"
                        value={newReport.startDate}
                        onChange={(e) =>
                          setNewReport({
                            ...newReport,
                            startDate: e.target.value,
                          })
                        }
                        className="border border-gray-300 p-2 rounded"
                        required
                      />
                      <input
                        type="date"
                        value={newReport.endDate}
                        onChange={(e) =>
                          setNewReport({
                            ...newReport,
                            endDate: e.target.value,
                          })
                        }
                        className="border border-gray-300 p-2 rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Include Changes:</label>
                    <select
                      multiple
                      value={newReport.includeChanges}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setNewReport({
                          ...newReport,
                          includeChanges: selectedOptions,
                        });
                      }}
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {includeChangesOptions.map((change, index) => (
                        <option key={index} value={change}>
                          {change}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="block mb-1">Export Format:</label>
                <select
                  value={newReport.exportFormat}
                  onChange={(e) =>
                    setNewReport({ ...newReport, exportFormat: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  {exportFormatOptions.map((format, index) => (
                    <option key={index} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn-primary mr-2">
                  Create
                </button>
                <button
                  type="button"
                  className="bg-gray-300 p-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="py-6 col-span-4">
        <div className="flex flex-row justify-between items-cente px-4 py-3">
          <h1 className="text-2xl flex-1">ALL REPORTS</h1>
          <button className="btn-primary">Filter & Sort</button>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6 capitalize px-4">
          {reports.map((report, index) => (
            <ReportCard
              key={index}
              report_heading={report.heading}
              startup_type={report.startup_type}
              report_type={report.report_type}
              id={report.id}
              name={report.name}
              date={report.date}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 400px;
        }
      `}</style>
    </div>
  );
};

export default AdminReports;
