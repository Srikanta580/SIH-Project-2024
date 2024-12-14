// import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Collapse from "../../components/Collapse";
import { BsDownload } from "react-icons/bs";
import VideoTutorial from "../../components/VideoTutorial";

import Guide from "../../components/Guide";
import { useState } from "react";

const documents = [
  {
    heading: "business documents",
    overall_status: "under review",
    docs: [
      {
        name: "Business registration certificate",
        submisson_status: "submitted",
        current_status: "under review",
      },
      {
        name: "AYUSH License",
        submisson_status: "submitted",
        current_status: "verified",
      },
    ],
  },
  {
    heading: "founder documents",
    overall_status: "under review",
    docs: [
      {
        name: "ID proofs",
        submisson_status: "submitted",
        current_status: "verified",
      },
      {
        name: "educational certificate",
        submisson_status: "submitted",
        current_status: "under review",
      },
    ],
  },
  {
    heading: "financial documents",
    overall_status: "missing doc",
    docs: [
      {
        name: "Business details file",
        submisson_status: "missing",
        current_status: "-",
      },
      {
        name: "balance sheet",
        submisson_status: "submitted",
        current_status: "under review",
      },
    ],
  },
];

const Documents = () => {
  const navigate = useNavigate();

  const [isVideoStarted, setVideoStarted] = useState(false);

  const openDocs = () => {
    navigate("../support");
  };

  const startVideo = () => {
    setVideoStarted(!isVideoStarted);
  };

  return (
    <div>
      <h1 className="welcomeText">documents management</h1>
      <p className="welcomeSubText">
        see and manage all of your documents here
      </p>
      <Guide onDocsClick={openDocs} onVideoClick={startVideo} />
      <div className="mt-6 py-4 gridBox">
        <div className="w-full flex justify-between">
          <div className="flex justify-start gap-x-5 uppercase text-xl">
            <span className="capitalize font-semibold">application ID : </span>
            01apl
            <span className="capitalize font-semibold">startup name : </span>
            innovate health
          </div>
          <button className="btn-primary px-3 flex items-center gap-x-2">
            download all <BsDownload className="font-bold" />
          </button>
        </div>
        {documents.map((doc, index) => (
          <Collapse
            collapseText={doc.heading}
            key={index}
            document={doc.overall_status}
          >
            <div className="w-full relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-sm text-gray-500 uppercase border-b">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      document
                    </th>
                    <th scope="col" className="px-6 py-3">
                      submission status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      current status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doc.docs.map((doc, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <th scope="row" className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to="/document.pdf" // Replace with the path to your document
                          target="_blank" // Opens in a new tab
                          rel="noopener noreferrer" // Security best practice
                          className="w-fit block bg-gray-300 hover:bg-gray-400/70 px-6 py-1 text-black font-medium rounded capitalize"
                        >
                          {doc.name}
                        </Link>
                      </th>
                      <td className={`px-6 py-4`}>
                        <span
                          className={
                            doc.submisson_status === "submitted"
                              ? "greenSign"
                              : "redSign"
                          }
                        >
                          {doc.submisson_status}
                        </span>
                      </td>
                      <td className={`px-6 py-4`}>
                        <span
                          className={
                            doc.current_status === "under review"
                              ? "yellowSign"
                              : doc.current_status === "verified"
                              ? "greenSign"
                              : "redSign"
                          }
                        >
                          {doc.current_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-violet-500 underline">
                        {doc.submisson_status === "submitted" ? (
                          <Link to="#">view</Link>
                        ) : (
                          <Link to="#">upload</Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Collapse>
        ))}
      </div>
      {isVideoStarted && <VideoTutorial onClose={startVideo} />}
    </div>
  );
};

export default Documents;
