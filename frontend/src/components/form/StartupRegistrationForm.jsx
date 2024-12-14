/* eslint-disable react/prop-types */
// import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useState } from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useTranslation } from "react-i18next";

import StepForm from "./StepForm";
import "./FormWizard.css";
import useTour from "../../hooks/useTour";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GrClose, GrDownload } from "react-icons/gr";
import jsPDF from "jspdf";
import "jspdf-autotable";

const steps = [
  { stepno: "Step1", heading: "Basic Startup Information" },
  { stepno: "Step2", heading: "Founder Details" },
  { stepno: "Step3", heading: "Business Registration Details" },
  { stepno: "Step4", heading: "Document Upload" },
  { stepno: "Step5", heading: "Financial Details (Optional)" },
  { stepno: "Step6", heading: "AYUSH Compliance" },
  { stepno: "Step7", heading: "Startup Innovation and Goals" },
  { stepno: "Step8", heading: "Legal & Terms" },
];

const formButton = `h-9 text-sm text-white capitalize font-semibold px-12 py-1.5 bg-violet-500/70 hover:bg-violet-500 rounded-[0.250rem]`;
const fieldLabels = {
  // Step 1
  startupName: "Startup Name",
  dateOfEstablishment: "Date of Establishment",
  startupCategory: "Startup Category",
  startupDescription: "Startup Description",
  sectorField: "Sector Field",

  // Step 2
  founderName: "Founder Name",
  designation: "Designation",
  contactDetails: "Contact Details",
  linkedInProfile: "LinkedIn Profile",

  // Step 3
  registrationType: "Registration Type",
  registrationNumber: "Registration Number",
  registeredAddress: "Registered Address",
  businessPan: "Business PAN",

  // Step 4
  registrationCertificate: "Registration Certificate",
  founderIdProofs: "Founder ID Proofs",
  pitchDeck: "Pitch Deck",
  ayushLicenses: "AYUSH Licenses",
  supportingDocuments: "Supporting Documents",

  // Step 5
  investmentRaised: "Investment Raised",
  annualTurnover: "Annual Turnover",
  bankDetails: "Bank Details",

  // Step 6
  ayushApprovalStatus: "AYUSH Approval Status",
  complianceCertifications: "Compliance Certifications",
  regulatoryCheck: "Regulatory Check",

  // Step 7
  innovation: "Innovation",
  startupGoals: "Startup Goals",
  targetAudience: "Target Audience",
};
const stepLabels = {
  step1: "Basic Startup Information",
  step2: "Founder Details",
  step3: "Business Registration Details",
  step4: "Document Upload",
  step5: "AYUSH Compliance",
  step6: "Financial Details (Optional)",
  step7: "Startup Innovation and Goals",
};

const StartupRegistrationForm = ({ onModalClose }) => {
  const { t } = useTranslation("steps");
  const [enabled, setEnabled, handleExit] = useTour("formTour");

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Exporting data to PDF
  const exportToPDF = (formValues, fieldLabels, stepLabels) => {
    const doc = new jsPDF();

    doc.text("Startup Registration Form Data", 10, 10);

    Object.keys(formValues).forEach((stepKey, stepIndex) => {
      const stepData = formValues[stepKey];

      // Add step header
      doc.text(stepLabels[stepKey] || stepKey, 10, 25 + stepIndex * 50); // Adjust the position based on stepIndex

      const tableData = [];

      Object.keys(stepData).forEach((fieldKey) => {
        tableData.push([fieldLabels[fieldKey] || fieldKey, stepData[fieldKey]]);
      });

      doc.autoTable({
        head: [["Field", "Value"]],
        body: tableData,
        startY: 30 + stepIndex * 50, // Adjust table start position
      });
    });

    // Save the PDF
    doc.save("startup_registration_data.pdf");
  };

  const [formValues, setFormValues] = useState({
    step1: {
      startupName: "",
      dateOfEstablishment: null,
      startupCategory: "",
      startupDescription: "",
      sectorField: "",
    },
    step2: {
      founderName: "",
      designation: "",
      contactDetails: "",
      linkedInProfile: "",
    },
    step3: {
      registrationType: "",
      registrationNumber: "",
      registeredAddress: "",
      businessPan: "",
    },
    step4: {
      registrationCertificate: "",
      founderIdProofs: "",
      pitchDeck: "",
      ayushLicenses: "",
      supportingDocuments: "",
    },
    step5: {
      investmentRaised: "",
      annualTurnover: "",
      bankDetails: "",
    },
    step6: {
      ayushApprovalStatus: "",
      complianceCertifications: "",
      regulatoryCheck: false,
    },
    step7: {
      innovation: "",
      startupGoals: "",
      targetAudience: "",
    },
    step8: {
      tAndC1: false,
      tAndC2: false,
    },
  });

  const [isFormFinished, setFormFinished] = useState(false);

  const stepsForTour = [
    {
      element: ".wizard-navigation ul span.active",
      intro: t("This is the Step Marker !"),
      position: "top",
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".step1",
      intro: t("Fill all the input fields !"),
      tooltipClass: "customTourTooltip",
    },
    {
      element: ".base-button",
      intro: t("Then click on the next button !"),
      position: "top",
      tooltipClass: "customTourTooltip",
    },
  ];

  const startTour = () => {
    setEnabled(true);
  };

  // Generic handleChange for nested form state
  const handleChange = (step, field, event) => {
    const { value } = event.target;
    console.log(value);
    console.log(step);
    console.log(field);
    setFormValues((prevValues) => ({
      ...prevValues,
      [step]: {
        ...prevValues[step],
        [field]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(formValues);
    console.log(Object.keys(formValues.step1).length);
    // Validation logic here
    const errors = validateForm(formValues);
    if (Object.keys(errors).length) {
      console.log("Form errors:", errors);
      return false;
    } else {
      console.log("Form submitted successfully:", formValues);
      // setCurrentStep((prev) => prev + 1);
      return true;
    }
  };

  const handleFullFormSubmit = () => {
    setFormFinished((prev) => !prev);
  };

  // Basic validation function
  const validateForm = (values) => {
    const currentStepValues = values[`step${currentStep}`];
    const errors = {};
    // Example validation rules
    Object.keys(currentStepValues).forEach((key) => {
      if (!currentStepValues[key]) {
        errors[key] = `${key} is required`;
      }
    });

    setErrors(errors);
    return errors;
  };

  return (
    <div>
      {/* multi-step form */}
      <div
        className={`${
          isFormFinished
            ? "w-[35vw] mx-auto h-[30vh]"
            : "w-[70vw] mx-auto h-[90vh]"
        } p-7 bg-violet-200 rounded-lg`}
      >
        {isFormFinished ? (
          <div className="relative flex flex-col justify-center items-center h-full gap-y-10 bg-white p-20 rounded-md">
            <div className="flex items-center justify-center gap-x-3 font-semibold text-3xl">
              Form Submitted Successfully{" "}
              <span className="text-green-600 text-4xl">
                <RiVerifiedBadgeFill />
              </span>
            </div>
            <div
              className="flex absolute top-5 right-4 cursor-pointer"
              onClick={onModalClose}
            >
              <GrClose />
            </div>
            <div className="flex">
              <button
                className="btn-secondary flex justify-center items-center gap-x-5"
                onClick={() => exportToPDF(formValues, fieldLabels, stepLabels)}
              >
                <GrDownload /> Download your response as PDF
              </button>
            </div>
          </div>
        ) : (
          <FormWizard
            startIndex={0}
            layout="vertical"
            backButtonTemplate={(handlePrevious) => (
              <button
                className={`back-button mr-5 ${formButton} px-4`}
                onClick={() => {
                  handlePrevious();
                  setCurrentStep((prev) => prev - 1);
                }}
              >
                {t("back")}
              </button>
            )}
            nextButtonTemplate={(handleNext) => (
              <button
                className={`base-button ${formButton} px-4`}
                type="submit"
                onClick={() => {
                  handleNext();
                }}
              >
                {t("save & next")}
              </button>
            )}
            finishButtonTemplate={(handleComplete) => (
              <button
                className={`finish-button ${formButton} !bg-violet-500`}
                onClick={() => {
                  handleComplete();
                  handleSubmit();
                  handleFullFormSubmit();
                }}
              >
                {t("finish")}
              </button>
            )}
          >
            {steps.map((stepno, i) => (
              <FormWizard.TabContent
                id={`#${stepno.stepno.toLowerCase()}`}
                title={t(stepno.stepno)}
                icon={i + 1}
                key={i}
              >
                <StepForm
                  stepno={stepno.stepno}
                  onChange={handleChange}
                  formValues={formValues}
                  onTourClick={startTour}
                  onClose={onModalClose}
                  errors={errors}
                />
              </FormWizard.TabContent>
            ))}
          </FormWizard>
        )}
      </div>
      {/* add style */}
      <style>
        {`@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");`}
      </style>
      {/* Intro.js Steps Component */}
      <Steps
        enabled={enabled}
        steps={stepsForTour}
        initialStep={0}
        onExit={handleExit}
        options={{
          nextLabel: t("Next"),
          prevLabel: t("Back"),
          skipLabel: t("Skip"),
          doneLabel: t("Finish"),
          showBullets: true,
        }}
      />
    </div>
  );
};

export default StartupRegistrationForm;
