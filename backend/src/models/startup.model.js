const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const startupSchema = new Schema(
  {
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },

    // Step 1: Basic Startup Information
    startupName: { type: String, required: true },
    dateOfEstablishment: { type: Date, required: true },
    category: {
      type: String,
      enum: ["Ayurveda", "Yoga", "Unani", "Siddha", "Homeopathy"],
      required: true,
    },
    description: { type: String, required: true },
    sector: { type: String, required: true },

    // Step 2: Founder Details
    founders: [
      {
        name: { type: String, required: true },
        designation: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        linkedInProfile: { type: String },
      },
    ],

    // Step 3: Business Registration Details
    registrationType: {
      type: String,
      enum: ["Sole Proprietorship", "Partnership", "Pvt Ltd", "LLP"],
      required: true,
    },
    registrationNumber: { type: String, required: true },
    dateOfRegistration: { type: Date, required: true },
    registeredAddress: { type: String, required: true },
    businessPAN: { type: String, required: true },

    // Step 4: Document Uploads (URLs to files)
    documents: {
      businessRegistrationCertificate: { type: String, required: true },
      idProofs: [{ type: String, required: true }], // Multiple ID proofs
      ayushLicenses: [{ type: String }], // Optional for some sectors
      pitchDeck: { type: String },
      supportingDocuments: [{ type: String }],
    },

    // Step 5: Financial Details (Optional)
    financialDetails: {
      investmentRaised: { type: Number },
      annualTurnover: { type: Number },
      bankAccountDetails: {
        accountNumber: { type: String },
        ifscCode: { type: String },
      },
    },

    // Step 6: AYUSH Compliance
    ayushCompliance: {
      approvalStatus: {
        type: String,
        enum: ["Approved", "Pending", "Not Required"],
        default: "Pending",
      },
      complianceCertifications: [{ type: String }],
      regulatoryChecklist: { type: Boolean, default: false }, // Checkbox for compliance
    },

    // Step 7: Startup Innovation and Goals
    innovationSummary: { type: String, required: true },
    goals: {
      shortTerm: { type: String, required: true },
      longTerm: { type: String, required: true },
    },
    targetAudience: { type: String, required: true },

    // Step 8: Legal and Terms
    termsAccepted: { type: Boolean, required: true, default: false },
    informationAccuracy: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Startup", startupSchema);
