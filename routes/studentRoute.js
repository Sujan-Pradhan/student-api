const express = require("express");
const {
  postStudent,
  studentList,
  studentDetails,
  studentUpdate,
  studentDelete,
} = require("../controllers/studentController");
const upload = require("../middleware/fileUpload");
const { studentValidation } = require("../validation");

const router = express.Router();

router.post(
  "/poststudent",
  upload.single("student_image"),
  studentValidation,
  postStudent
);
router.get("/studentlist", studentList);
router.get("/studentdetails/:id", studentDetails);
router.put("/studentupdate/:id", studentUpdate);
router.delete("/studentdelete/:id", studentDelete);

module.exports = router;
