const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
  {
    grade_name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Grade", gradeSchema);
