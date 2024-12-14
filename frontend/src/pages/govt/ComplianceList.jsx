// import React from "react";
import { Link } from "react-router-dom";
import {
  ComplianceStatusDoughnut,
  ComplianceTrendLineChart,
  ComplianceTypeBarChart,
} from "../../components/charts/GovtChart";

const pendingComplianceReviews = [
  {
    startupName: "Ayurvedix",
    applicationId: "APP-1001",
    submissionDate: "2024-08-01",
    requiredAction: "Document Verification",
    complianceType: "Financial Compliance",
    linkToDetails: "/compliance-review/APP-1001",
  },
  {
    startupName: "Herbal Bliss",
    applicationId: "APP-1002",
    submissionDate: "2024-08-05",
    requiredAction: "License Review",
    complianceType: "Regulatory Compliance",
    linkToDetails: "/compliance-review/APP-1002",
  },
  {
    startupName: "YogaRoots",
    applicationId: "APP-1003",
    submissionDate: "2024-08-10",
    requiredAction: "Pending Founder ID Verification",
    complianceType: "Identity Compliance",
    linkToDetails: "/compliance-review/APP-1003",
  },
  {
    startupName: "VedaHealth",
    applicationId: "APP-1004",
    submissionDate: "2024-08-15",
    requiredAction: "Compliance Certification Review",
    complianceType: "Health Compliance",
    linkToDetails: "/compliance-review/APP-1004",
  },
  {
    startupName: "NatureWell",
    applicationId: "APP-1005",
    submissionDate: "2024-08-20",
    requiredAction: "Review Additional Documents",
    complianceType: "Environmental Compliance",
    linkToDetails: "/compliance-review/APP-1005",
  },
];

const complianceStatus = [
  {
    startupName: "Ayurvedix",
    applicationId: "APP-1001",
    status: "under review",
    lastUpdated: "2024-08-22",
    complianceStage: "Document Verification",
    linkToDetails: "/compliance-status/APP-1001",
  },
  {
    startupName: "Herbal Bliss",
    applicationId: "APP-1002",
    status: "pending",
    lastUpdated: "2024-08-20",
    complianceStage: "License Review",
    linkToDetails: "/compliance-status/APP-1002",
  },
  {
    startupName: "YogaRoots",
    applicationId: "APP-1003",
    status: "completed",
    lastUpdated: "2024-08-18",
    complianceStage: "Founder ID Verified",
    linkToDetails: "/compliance-status/APP-1003",
  },
  {
    startupName: "VedaHealth",
    applicationId: "APP-1004",
    status: "pending",
    lastUpdated: "2024-08-19",
    complianceStage: "Compliance Certification",
    linkToDetails: "/compliance-status/APP-1004",
  },
  {
    startupName: "NatureWell",
    applicationId: "APP-1005",
    status: "in progress",
    lastUpdated: "2024-08-21",
    complianceStage: "Review Additional Documents",
    linkToDetails: "/compliance-status/APP-1005",
  },
];

const ComplianceList = () => {
  return (
    <div>
      <h1 className="welcomeText">compliance checks</h1>
      <div className="mt-6 grid grid-cols-3 grid-rows-6 gap-8">
        {/* startup table for compliance check */}
        <div className={`gridBox col-span-2 row-span-3`}>
          <div className="w-full flex justify-between">
            <h1 className="text-2xl">Pending compliance reviews</h1>
            <button className="btn-primary">Filter & Sort</button>
          </div>
          {/* table */}
          <div className="w-full relative overflow-x-auto flex-1 scrollbar">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Application ID
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Startup name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    compliance type
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Due date
                  </th>
                  <th scope="col" className="px-3 py-3">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingComplianceReviews.map((pending, index) => (
                  <tr
                    className="bg-white border-b whitespace-nowrap"
                    key={index}
                  >
                    <td className="px-3 py-4">{pending.applicationId}</td>
                    <td className="px-3 py-4">{pending.startupName}</td>
                    <td className="px-3 py-4">{pending.complianceType}</td>
                    <td className="px-3 py-4">{pending.submissionDate}</td>
                    <td className="px-3 py-4">
                      <Link
                        to={pending.linkToDetails}
                        className="underline text-violet-500"
                      >
                        {pending.requiredAction}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="gridBox col-span-1 row-span-2 max-h-80">
          <h1 className="text-2xl">status</h1>
          <ComplianceStatusDoughnut />
        </div>
        <div className="gridBox col-span-1 row-span-2  max-h-80">
          <h1 className="text-2xl">types</h1>
          <ComplianceTypeBarChart />
        </div>
        {/* startup table of overall compliance status */}
        <div className={`gridBox col-span-2 row-span-3`}>
          <div className="w-full flex justify-between">
            <h1 className="text-2xl">compliance status overview</h1>
            <button className="btn-primary">Filter & Sort</button>
          </div>
          {/* table */}
          <div className="w-full relative overflow-x-auto flex-1 scrollbar">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Application ID
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Startup name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    status
                  </th>
                  <th scope="col" className="px-3 py-3">
                    last updated
                  </th>
                  <th scope="col" className="px-3 py-3">
                    compliance stage
                  </th>
                  <th scope="col" className="px-3 py-3">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {complianceStatus.map((cstatus, index) => (
                  <tr
                    className="bg-white border-b whitespace-nowrap"
                    key={index}
                  >
                    <td className="px-3 py-4">{cstatus.applicationId}</td>
                    <td className="px-3 py-4">{cstatus.startupName}</td>
                    <td className="px-3 py-4">
                      <Link
                        to="#"
                        className={`font-medium ${
                          cstatus.status === "completed"
                            ? "greenSign"
                            : cstatus.status === "rejected"
                            ? "redSign"
                            : "yellowSign"
                        } px-2 py-1`}
                      >
                        {cstatus.status}
                      </Link>
                    </td>
                    <td className="px-3 py-4">{cstatus.lastUpdated}</td>
                    <td className="px-3 py-4">{cstatus.complianceStage}</td>
                    <td className="px-3 py-4 text-violet-500 underline">
                      <Link to={cstatus.linkToDetails}>view</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="gridBox col-span-1 row-span-2 max-h-80">
          <h1 className="text-2xl">trend</h1>
          <ComplianceTrendLineChart />
        </div>
      </div>
    </div>
  );
};

export default ComplianceList;
