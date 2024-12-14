const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validator = require("validator");

const applicationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
    startupId: { type: Schema.Types.ObjectId, ref: "Startup" },
    application_id: { type: String },
    status: {
      type: String,
      enum: ["Draft", "Submitted", "Under Review", "Approved", "Rejected"],
      default: "Draft",
    },
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
