/* eslint-disable react/prop-types */
// import React from "react";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import DropdownLang from "../Header/DropdownLang";

const formHeading = `text-left text-3xl font-semibold`;
const formSubHeading = `text-left text-base font-normal mb-6`;
const mandatory = `text-red-600 text-lg ml-1`;

const StepForm = ({
  stepno,
  onChange,
  formValues,
  errors,
  onTourClick,
  onClose,
}) => {
  const { t } = useTranslation("formTranslation");

  const step1 = [
    {
      stepNo: "step1",
      heading: t("Basic Startup Information"),
      label: t("Startup Name"),
      type: "text",
      id: "startupName",
      placeholder: t("Enter your startup's name"),
    },
    {
      label: t("Date of Establishment"),
      type: "date",
      id: "dateOfEstablishment",
      placeholder: "",
    },
    {
      label: t("Startup Category"),
      type: "select",
      id: "startupCategory",
      values: ["Ayurveda", "Yoga", "Unani", "Sidha", "Homeopathy"],
      placeholder: t("Select your startup category"),
    },
    {
      label: t("Startup Description"),
      type: "textarea",
      id: "startupDescription",
      placeholder: t("Briefly describe your startup"),
    },
    {
      label: t("Sector/Field of Work"),
      type: "text",
      id: "sectorField",
      placeholder: t("Enter your field within AYUSH"),
    },
  ];

  const step2 = [
    {
      stepNo: "step2",
      heading: t("Founder Details"),
      label: t("Founder/Co-Founder Name"),
      type: "text",
      id: "founderName",
      placeholder: t("Enter founder's full name"),
    },
    {
      label: t("Designation"),
      type: "text",
      id: "designation",
      placeholder: t("Enter designation (e.g., CEO)"),
    },
    {
      label: t("Contact Details"),
      type: "email",
      id: "contactDetails",
      placeholder: t("Enter contact email"),
    },
    {
      label: t("LinkedIn Profile"),
      type: "url",
      id: "linkedInProfile",
      placeholder: t("Enter LinkedIn profile URL"),
    },
  ];

  const step3 = [
    {
      stepNo: "step3",
      heading: t("Business Registration Details"),
      label: t("Registration Type"),
      type: "select",
      id: "registrationType",
      values: [
        "Sole Proprietorship",
        "Partnership Firm",
        "Private Limited Company (Pvt Ltd)",
        "Limited Liability Partnership (LLP)",
        "One Person Company (OPC)",
        "Public Limited Company",
        "Section 8 Company (Non-Profit Organization)",
        "Hindu Undivided Family (HUF)",
        "Co-operative Society",
        "Trust",
        "Society",
        "Other",
      ],
      placeholder: t("Select registration type"),
    },
    {
      label: t("Registration Number"),
      type: "text",
      id: "registrationNumber",
      placeholder: t("Enter registration number"),
    },
    {
      label: t("Registered Address"),
      type: "text",
      id: "registeredAddress",
      placeholder: t("Enter full registered address"),
    },
    {
      label: t("Business PAN"),
      type: "text",
      id: "businessPan",
      placeholder: t("Enter business PAN"),
    },
  ];

  const step4 = [
    {
      stepNo: "step4",
      heading: t("Document Upload"),
      label: t("Business Registration Certificate"),
      type: "file",
      id: "registrationCertificate",
      placeholder: "",
    },
    {
      label: t("Founder ID Proofs"),
      type: "file",
      id: "founderIdProofs",
      placeholder: "",
    },
    {
      label: t("Startup Pitch Deck/Presentation"),
      type: "file",
      id: "pitchDeck",
      placeholder: "",
    },
    {
      label: t("AYUSH Sector Specific Licenses"),
      type: "file",
      id: "ayushLicenses",
      placeholder: "",
    },
    {
      label: t("Other Supporting Documents"),
      type: "file",
      id: "supportingDocuments",
      placeholder: "",
    },
  ];

  const step5 = [
    {
      stepNo: "step6",
      heading: t("Financial Details (Optional)"),
      label: t("Investment Raised"),
      type: "number",
      id: "investmentRaised",
      placeholder: t("Enter amount raised"),
    },
    {
      label: t("Annual Turnover"),
      type: "number",
      id: "annualTurnover",
      placeholder: t("Enter last financial year turnover"),
    },
    {
      label: t("Bank Account Details"),
      type: "text",
      id: "bankDetails",
      placeholder: t("Enter basic bank details"),
    },
  ];

  const step6 = [
    {
      stepNo: "step5",
      heading: t("AYUSH Compliance"),
      label: t("AYUSH Approval Status"),
      type: "select",
      id: "ayushApprovalStatus",
      values: ["Approved", "Pending", "Not Required"],
      placeholder: t("Select approval status"),
    },
    {
      label: t("Compliance Certifications"),
      type: "file",
      id: "complianceCertifications",
      placeholder: "",
    },
    {
      label: t("I have completed all required AYUSH compliance steps"),
      type: "checkbox",
      id: "regulatoryCheck",
      placeholder: "",
    },
  ];

  const step7 = [
    {
      stepNo: "step7",
      heading: t("Startup Innovation and Goals"),
      label: t("Innovation Summary"),
      type: "textarea",
      id: "innovation",
      placeholder: t("Explain what makes your startup innovative"),
    },
    {
      label: t("Startup Goals"),
      type: "textarea",
      id: "startupGoals",
      placeholder: t("Enter Short-term and long-term goals"),
    },
    {
      label: t("Target Audience"),
      type: "text",
      id: "targetAudience",
      placeholder: t("Primary demographic focus"),
    },
  ];

  const step8 = [
    {
      stepNo: "step8",
      heading: t("Legal and Terms"),
      label: t("I agree to the terms and conditions"),
      type: "checkbox",
      id: "tAndC1",
      placeholder: "",
    },
    {
      label: t("I declare all provided information is accurate"),
      type: "checkbox",
      id: "tAndC2",
      placeholder: "",
    },
  ];

  const renderStepForm = (stepno) => {
    const stepName = stepno[0].stepNo;
    return (
      <div className="relative h-auto">
        {location.pathname !== "/new-registration" && (
          <GrClose
            className="absolute -top-10 -right-4 text-2xl cursor-pointer"
            onClick={onClose}
          />
        )}
        <DropdownLang className="absolute -top-10 -right-[20rem] sm:-right-[40rem] lg:-right-[56rem] w-fit" />
        <div className="flex justify-between">
          <div>
            <h1 className={formHeading}>{stepno[0].heading}</h1>
            <p className={formSubHeading}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos,
              ullam.
            </p>
          </div>
          <div className="flex gap-x-4">
            <div
              onClick={onTourClick}
              className="btn-primary px-3 flex items-center cursor-pointer"
            >
              {t("Need Guide")}
            </div>
            {location.pathname === "/new-registration" && (
              <Link to="/user" className="btn-primary px-3 py-[0.540rem]">
                {t("I'll do it later")}
              </Link>
            )}
          </div>
        </div>
        {stepno.map((data, index) => {
          return (
            <div
              key={index}
              className={`step1 mb-5 ${data.type === "checkbox" &&
                "flex flex-row-reverse justify-end gap-x-2 items-center"}`}
            >
              <label
                htmlFor={data.id}
                className={`block ${
                  data.type === "checkbox" ? "mb-0" : "mb-2"
                } text-left text-sm font-medium text-gray-900`}
              >
                {t(data.label)}
                <span className={mandatory}>*</span>
              </label>
              {data.type === "select" ? (
                <>
                  <select
                    id={data.id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    defaultValue={formValues[stepno]?.[data.id]}
                    onChange={(event) => onChange(stepName, data.id, event)}
                  >
                    <option value={t(data.placeholder)}>
                      {t(data.placeholder)}
                    </option>
                    {data.values?.map((value, i) => (
                      <option key={i} value={value.value}>
                        {t(value)}
                      </option>
                    ))}
                  </select>
                  <span className="text-red-500 font-medium">
                    {errors?.[data.id]}
                  </span>
                </>
              ) : data.type === "textarea" ? (
                <>
                  <textarea
                    type={data.type}
                    id={data.id}
                    rows={5}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    defaultValue={formValues[stepno]?.[data.id] || ""}
                    onChange={(event) => onChange(stepName, data.id, event)}
                    placeholder={t(data.placeholder)}
                    required
                  />
                  <span className="text-red-500 font-medium">
                    {errors?.[data.id]}
                  </span>
                </>
              ) : data.type === "checkbox" ? (
                <>
                  <input
                    type={data.type}
                    id={data.id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-pointer"
                    defaultValue={formValues[stepno]?.[data.id] || ""}
                    onChange={(event) => onChange(stepName, data.id, event)}
                    placeholder={t(data.placeholder)}
                    required
                  />
                  <span className="text-red-500 font-medium">
                    {errors?.[data.id]}
                  </span>
                </>
              ) : (
                <>
                  <input
                    type={data.type}
                    id={data.id}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    defaultValue={formValues[stepno]?.[data.id] || ""}
                    onChange={(event) => onChange(stepName, data.id, event)}
                    placeholder={t(data.placeholder)}
                    required
                  />
                  <span className="text-red-500 font-medium">
                    {errors?.[data.id]}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <form className="">
        {stepno === "Step1" && renderStepForm(step1)}
        {stepno === "Step2" && renderStepForm(step2)}
        {stepno === "Step3" && renderStepForm(step3)}
        {stepno === "Step4" && renderStepForm(step4)}
        {stepno === "Step5" && renderStepForm(step5)}
        {stepno === "Step6" && renderStepForm(step6)}
        {stepno === "Step7" && renderStepForm(step7)}
        {stepno === "Step8" && renderStepForm(step8)}
      </form>
    </>
  );
};

export default StepForm;
