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
    icon: "document-check",
  },
  {
    id: "approvalRates",
    category: "Application Metrics",
    metricName: "Approval Rates",
    description:
      "Percentage of applications that have been approved out of the total submitted.",
    dataType: "percentage",
    unit: "35%",
    icon: "approval",
  },
  {
    id: "processingTimes",
    category: "Application Metrics",
    metricName: "Processing Times",
    description:
      "Average time taken to process an application from submission to approval or rejection.",
    dataType: "time",
    unit: "10 days",
    icon: "time-clock",
  },

  // Compliance Metrics
  {
    id: "compliancePercentage",
    category: "Compliance Metrics",
    metricName: "Compliance Meet",
    description:
      "The percentage of startups that meet the compliance requirements set by AYUSH regulations.",
    dataType: "percentage",
    unit: "25%",
    icon: "compliance-check",
  },
  // Sector Insights
  {
    id: "sectorPerformance",
    category: "Sector Insights",
    metricName: "Performance",
    description:
      "Detailed performance metrics categorized by AYUSH sectors like Ayurveda, Yoga, Naturopathy, etc.",
    dataType: "metrics",
    unit: <SectorPerformanceChart />,
    icon: "performance-chart",
  },
  {
    id: "sectorGrowthPatterns",
    category: "Sector Insights",
    metricName: "Growth Patterns",
    description:
      "Analysis of growth patterns in each AYUSH sector over time, highlighting key drivers of growth.",
    dataType: "growth",
    unit: <SectorGrowthPatternChart />,
    icon: "growth-graph",
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
    title: "User Activity Report",
    count: 0,
  },
  {
    icon: <GrCompliance />,
    title: "Startup Approval Analytics Report",
    count: 0,
  },
  {
    icon: <GrDocumentPerformance />,
    title: "Funding and Support Status Report",
    count: 0,
  },
  {
    icon: <FaChartLine />,
    title: "Custom Report",
    count: 0,
  },
];

const reports = [
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
  {
    id: "01apl",
    name: "innovate health",
    startup_type: "ayurveda",
    report_type: "application status report",
    date: "12/04/2024",
  },
];

const GovtReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportType, setReportType] = useState(null);
  const [newReport, setNewReport] = useState({
    title: "",
    date: "",
    userRole: [],
    activityType: [],
    approvalStatus: [],
    fundingStatus: [],
    startDate: "",
    endDate: "",
    industryCategory: "",
    exportFormat: "PDF",
  });

  const userRoleOptions = ["Startups", "Government Officials"];
  const activityTypeOptions = ["Registrations", "Document Submissions"];
  const approvalStatusOptions = ["Approved", "Rejected"];
  const fundingStatusOptions = ["Funded", "Not Funded"];
  const industryCategoryOptions = ["AYUSH Category 1", "AYUSH Category 2"];
  const exportFormatOptions = ["PDF", "Excel"];

  const handleCreateReport = (e) => {
    e.preventDefault();
    console.log(newReport); // Replace with actual logic
    setIsModalOpen(false);
    setNewReport({
      title: "",
      date: "",
      userRole: [],
      activityType: [],
      approvalStatus: [],
      fundingStatus: [],
      startDate: "",
      endDate: "",
      industryCategory: "",
      exportFormat: "PDF",
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

      <h1 className="welcomeText">Reports</h1>
      <div className="grid grid-cols-4 gap-8 mt-6">
        {report_category.map((cat) => (
          <div className="gridBox" key={cat.title}>
            <div className="w-full flex justify-between items-center bg-green-200 px-4 py-3">
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

              {reportType === "User Activity Report" && (
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
                      {userRoleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Activity Type:</label>
                    <select
                      multiple
                      value={newReport.activityType}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setNewReport({
                          ...newReport,
                          activityType: selectedOptions,
                        });
                      }}
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {activityTypeOptions.map((activity) => (
                        <option key={activity} value={activity}>
                          {activity}
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
                </>
              )}

              {reportType === "Startup Approval Analytics Report" && (
                <>
                  <div className="mb-4">
                    <label className="block mb-1">Approval Status:</label>
                    <select
                      multiple
                      value={newReport.approvalStatus}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setNewReport({
                          ...newReport,
                          approvalStatus: selectedOptions,
                        });
                      }}
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {approvalStatusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
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
                    <label className="block mb-1">Industry Category:</label>
                    <select
                      value={newReport.industryCategory}
                      onChange={(e) =>
                        setNewReport({
                          ...newReport,
                          industryCategory: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      <option value="">Select Industry Category</option>
                      {industryCategoryOptions.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {reportType === "Funding and Support Status Report" && (
                <>
                  <div className="mb-4">
                    <label className="block mb-1">Funding Status:</label>
                    <select
                      multiple
                      value={newReport.fundingStatus}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setNewReport({
                          ...newReport,
                          fundingStatus: selectedOptions,
                        });
                      }}
                      className="w-full border border-gray-300 p-2 rounded"
                    >
                      {fundingStatusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
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
                  {exportFormatOptions.map((format) => (
                    <option key={format} value={format}>
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
        <div className="flex flex-row justify-between items-center bg-white shadow-md px-6 py-3">
          <h1 className="text-3xl flex-1">ALL REPORTS</h1>
          <button className="btn-primary">Filter & Sort</button>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {reports.map((report, index) => (
            <ReportCard
              key={index}
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

export default GovtReports;
