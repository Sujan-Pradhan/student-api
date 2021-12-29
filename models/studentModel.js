const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const studentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    student_description: {
      type: String,
      required: true,
    },
    student_image: {
      type: String,
      required: true,
    },
    grade: {
      type: ObjectId,
      required: true,
      ref: "Grade",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
