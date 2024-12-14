const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validator = require("validator");

const documentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    applicationId: { type: Schema.Types.ObjectId, ref: "Application" },
    name: { type: String, required: true },
    url: { type: String, required: true },
    submission_status: {
      type: String,
      enum: ["Pending", "Submitted"],
      default: "Pending",
    },
    current_status: {
      type: String,
      enum: ["Submitted", "Under Review", "Approved", "Rejected"],
      default: "Submitted",
    },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
